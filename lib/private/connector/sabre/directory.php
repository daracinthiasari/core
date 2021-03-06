<?php
/**
 * @author Arthur Schiwon <blizzz@owncloud.com>
 * @author Bart Visscher <bartv@thisnet.nl>
 * @author Björn Schießle <schiessle@owncloud.com>
 * @author Jakob Sack <mail@jakobsack.de>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Robin Appelman <icewind@owncloud.com>
 * @author Thomas Müller <thomas.mueller@tmit.eu>
 * @author Vincent Petry <pvince81@owncloud.com>
 *
 * @copyright Copyright (c) 2015, ownCloud, Inc.
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */
namespace OC\Connector\Sabre;

class Directory extends \OC\Connector\Sabre\Node
	implements \Sabre\DAV\ICollection, \Sabre\DAV\IQuota {

	/**
	 * Cached directory content
	 *
	 * @var \OCP\Files\FileInfo[]
	 */
	private $dirContent;

	/**
	 * Cached quota info
	 *
	 * @var array
	 */
	private $quotaInfo;

	/**
	 * Creates a new file in the directory
	 *
	 * Data will either be supplied as a stream resource, or in certain cases
	 * as a string. Keep in mind that you may have to support either.
	 *
	 * After successful creation of the file, you may choose to return the ETag
	 * of the new file here.
	 *
	 * The returned ETag must be surrounded by double-quotes (The quotes should
	 * be part of the actual string).
	 *
	 * If you cannot accurately determine the ETag, you should not return it.
	 * If you don't store the file exactly as-is (you're transforming it
	 * somehow) you should also not return an ETag.
	 *
	 * This means that if a subsequent GET to this new file does not exactly
	 * return the same contents of what was submitted here, you are strongly
	 * recommended to omit the ETag.
	 *
	 * @param string $name Name of the file
	 * @param resource|string $data Initial payload
	 * @throws \Sabre\DAV\Exception\Forbidden
	 * @return null|string
	 */
	public function createFile($name, $data = null) {

		try {
			// for chunked upload also updating a existing file is a "createFile"
			// because we create all the chunks before re-assemble them to the existing file.
			if (isset($_SERVER['HTTP_OC_CHUNKED'])) {

				// exit if we can't create a new file and we don't updatable existing file
				$info = \OC_FileChunking::decodeName($name);
				if (!$this->fileView->isCreatable($this->path) &&
					!$this->fileView->isUpdatable($this->path . '/' . $info['name'])
				) {
					throw new \Sabre\DAV\Exception\Forbidden();
				}

			} else {
				// For non-chunked upload it is enough to check if we can create a new file
				if (!$this->fileView->isCreatable($this->path)) {
					throw new \Sabre\DAV\Exception\Forbidden();
				}
			}

			$path = $this->fileView->getAbsolutePath($this->path) . '/' . $name;
			// using a dummy FileInfo is acceptable here since it will be refreshed after the put is complete
			$info = new \OC\Files\FileInfo($path, null, null, array(), null);
			$node = new \OC\Connector\Sabre\File($this->fileView, $info);
			return $node->put($data);
		} catch (\OCP\Files\StorageNotAvailableException $e) {
			throw new \Sabre\DAV\Exception\ServiceUnavailable($e->getMessage());
		}
	}

	/**
	 * Creates a new subdirectory
	 *
	 * @param string $name
	 * @throws \Sabre\DAV\Exception\Forbidden
	 * @return void
	 */
	public function createDirectory($name) {
		try {
			if (!$this->info->isCreatable()) {
				throw new \Sabre\DAV\Exception\Forbidden();
			}

			$newPath = $this->path . '/' . $name;
			if (!$this->fileView->mkdir($newPath)) {
				throw new \Sabre\DAV\Exception\Forbidden('Could not create directory ' . $newPath);
			}
		} catch (\OCP\Files\StorageNotAvailableException $e) {
			throw new \Sabre\DAV\Exception\ServiceUnavailable($e->getMessage());
		}
	}

	/**
	 * Returns a specific child node, referenced by its name
	 *
	 * @param string $name
	 * @param \OCP\Files\FileInfo $info
	 * @throws \Sabre\DAV\Exception\FileNotFound
	 * @return \Sabre\DAV\INode
	 */
	public function getChild($name, $info = null) {
		$path = $this->path . '/' . $name;
		if (is_null($info)) {
			try {
				$info = $this->fileView->getFileInfo($path);
			} catch (\OCP\Files\StorageNotAvailableException $e) {
				throw new \Sabre\DAV\Exception\ServiceUnavailable($e->getMessage());
			}
		}

		if (!$info) {
			throw new \Sabre\DAV\Exception\NotFound('File with name ' . $path . ' could not be located');
		}

		if ($info['mimetype'] == 'httpd/unix-directory') {
			$node = new \OC\Connector\Sabre\Directory($this->fileView, $info);
		} else {
			$node = new \OC\Connector\Sabre\File($this->fileView, $info);
		}
		return $node;
	}

	/**
	 * Returns an array with all the child nodes
	 *
	 * @return \Sabre\DAV\INode[]
	 */
	public function getChildren() {
		if (!is_null($this->dirContent)) {
			return $this->dirContent;
		}
		$folderContent = $this->fileView->getDirectoryContent($this->path);

		$nodes = array();
		foreach ($folderContent as $info) {
			$node = $this->getChild($info->getName(), $info);
			$nodes[] = $node;
		}
		$this->dirContent = $nodes;
		return $this->dirContent;
	}

	/**
	 * Checks if a child exists.
	 *
	 * @param string $name
	 * @return bool
	 */
	public function childExists($name) {
		// note: here we do NOT resolve the chunk file name to the real file name
		// to make sure we return false when checking for file existence with a chunk
		// file name.
		// This is to make sure that "createFile" is still triggered
		// (required old code) instead of "updateFile".
		//
		// TODO: resolve chunk file name here and implement "updateFile"
		$path = $this->path . '/' . $name;
		return $this->fileView->file_exists($path);

	}

	/**
	 * Deletes all files in this directory, and then itself
	 *
	 * @return void
	 * @throws \Sabre\DAV\Exception\Forbidden
	 */
	public function delete() {

		if (!$this->info->isDeletable()) {
			throw new \Sabre\DAV\Exception\Forbidden();
		}

		if (!$this->fileView->rmdir($this->path)) {
			// assume it wasn't possible to remove due to permission issue
			throw new \Sabre\DAV\Exception\Forbidden();
		}

	}

	/**
	 * Returns available diskspace information
	 *
	 * @return array
	 */
	public function getQuotaInfo() {
		if ($this->quotaInfo) {
			return $this->quotaInfo;
		}
		try {
			$storageInfo = \OC_Helper::getStorageInfo($this->info->getPath(), $this->info);
			$this->quotaInfo = array(
				$storageInfo['used'],
				$storageInfo['free']
			);
			return $this->quotaInfo;
		} catch (\OCP\Files\StorageNotAvailableException $e) {
			return array(0, 0);
		}
	}

}
