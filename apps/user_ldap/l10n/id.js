OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Gagal membersihkan pemetaan.",
    "Failed to delete the server configuration" : "Gagal menghapus konfigurasi server",
    "The configuration is valid and the connection could be established!" : "Konfigurasi valid dan koneksi dapat dilakukan!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "Konfigurasi valid, tetapi Bind gagal. Silakan periksa pengaturan server dan kredensial.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Konfigurasi tidak sah. Silakan lihat log untuk rincian lebh lanjut.",
    "No action specified" : "Tidak ada tindakan yang ditetapkan",
    "No configuration specified" : "Tidak ada konfigurasi yang ditetapkan",
    "No data specified" : "Tidak ada data yang ditetapkan",
    " Could not set configuration %s" : "Tidak dapat menyetel konfigurasi %s",
    "Action does not exist" : "Tidak ada tindakan",
    "Configuration incorrect" : "Konfigurasi salah",
    "Configuration incomplete" : "Konfigurasi tidak lengkap",
    "Configuration OK" : "Konfigurasi Oke",
    "Select groups" : "Pilih grup",
    "Select object classes" : "Pilik kelas obyek",
    "Please check the credentials, they seem to be wrong." : "Mohon periksa kredensial, nampaknya ada kesalahan.",
    "Please specify the port, it could not be auto-detected." : "Mohon tentukan port karena tidak terdeteksi secara otomatis.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN tidak terdeteksi secara otomatis, mohon periksa kembali kredensial, host dan port.",
    "Could not detect Base DN, please enter it manually." : "Tidak dapat mendeteksi Base DN, mohon masukkan secara manual.",
    "{nthServer}. Server" : "{nthServer}. Server",
    "No object found in the given Base DN. Please revise." : "Tidak ada obyek ditemukan di Base DN yang diberikan. Mohon diperiksa kembali.",
    "More than 1.000 directory entries available." : "Lebih dari 1.000 entri direktori yang tersedia.",
    " entries available within the provided Base DN" : "entri tersedia didalam Base DN yang diberikan",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Terjadi kesalahan. Silakan periksa Base DN, serta pengaturan sambungan dan kredensial.",
    "Do you really want to delete the current Server Configuration?" : "Apakan Anda ingin menghapus Konfigurasi Server saat ini?",
    "Confirm Deletion" : "Konfirmasi Penghapusan",
    "Mappings cleared successfully!" : "Pemetaan berhasil dibersihkan!",
    "Error while clearing the mappings." : "Kesalahan saat membersihkan pemetaan.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Menyimpan gagal. Mohon pastikan basis data di Operasi. Muat Ulang sebelum melanjutkan.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Beralih modus akan mengaktifkan kueri LDAP. Hal ini memerlukan beberapa saat tergantung pada ukuran LDAP Anda. Apakah Anda tetap ingin beralih modus?",
    "Mode switch" : "Beralih modus",
    "Select attributes" : "Pilih atribut",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Pengguna tidak ditemukan. Mohon periksa atribut login dan nama pengguna Anda. Penyaring efektif (salin dan tempel berikut untuk validasi baris perintah):\n<br/>",
    "User found and settings verified." : "Pengguna ditemukan dan pengaturan terverifikasi.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Terjadi kesalahan sambungan ke LDAP / AD, mohon periksa host, port dan kredensial.",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Kotak grup telah diaktifkan, karena server LDAP / AD tidak mendukung keanggotaan.",
    "_%s group found_::_%s groups found_" : ["%s grup ditemukan"],
    "_%s user found_::_%s users found_" : ["%s pengguna ditemukan"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Tidak mendeteksi atribut nama tampilan pengguna. Silakan menentukannya sendiri di pengaturan ldap lanjutan.",
    "Could not find the desired feature" : "Tidak dapat menemukan fitur yang diinginkan",
    "Invalid Host" : "Host tidak sah",
    "Server" : "Server",
    "Users" : "Pengguna",
    "Login Attributes" : "Atribut Login",
    "Groups" : "Grup",
    "Test Configuration" : "Uji Konfigurasi",
    "Help" : "Bantuan",
    "Groups meeting these criteria are available in %s:" : "Grup memenuhi kriteria ini tersedia di %s:",
    "Only these object classes:" : "Hanya kelas obyek berikut:",
    "Only from these groups:" : "Hanya dari grup berikut:",
    "Search groups" : "Pencarian grup",
    "Available groups" : "Grup tersedia",
    "Selected groups" : "Grup terpilih",
    "Edit LDAP Query" : "Sunting Kueri LDAP",
    "LDAP Filter:" : "Penyaring LDAP:",
    "LDAP / AD Username:" : "Nama pengguna LDAP / AD:",
    "LDAP / AD Email Address:" : "Alamat Email LDAP / AD:",
    "Other Attributes:" : "Atribut Lain:",
    "1. Server" : "1. Server",
    "%s. Server:" : "%s. Server:",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Protokol dapat tidak ditulis, kecuali Anda menggunakan SSL. Lalu jalankan dengan ldaps://",
    "Port" : "Port",
    "User DN" : "Pengguna DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN dari klien pengguna yang dengannya tautan akan diterapkan, mis. uid=agen,dc=contoh,dc=com. Untuk akses anonim, biarkan DN dan kata sandi kosong.",
    "Password" : "Sandi",
    "For anonymous access, leave DN and Password empty." : "Untuk akses anonim, biarkan DN dan Kata sandi kosong.",
    "One Base DN per line" : "Satu Base DN per baris",
    "You can specify Base DN for users and groups in the Advanced tab" : "Anda dapat menetapkan Base DN untuk pengguna dan grup dalam tab Lanjutan",
    "Manually enter LDAP filters (recommended for large directories)" : "Masukkan penyaring LDAP secara manual (direkomendasikan untuk direktori yang besar)",
    "Limit %s access to users meeting these criteria:" : "Batasi akses %s untuk pengguna yang sesuai dengan kriteria berikut:",
    "Saving" : "Menyimpan",
    "Back" : "Kembali",
    "Continue" : "Lanjutkan",
    "LDAP" : "LDAP",
    "Expert" : "Lanjutan",
    "Advanced" : "Lanjutan",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Peringatan:</b> Modul LDAP PHP tidak terpasang, perangkat tidak akan bekerja. Silakan minta administrator sistem untuk memasangnya.",
    "Connection Settings" : "Pengaturan Koneksi",
    "Configuration Active" : "Konfigurasi Aktif",
    "When unchecked, this configuration will be skipped." : "Jika tidak dicentang, konfigurasi ini dilewati.",
    "Backup (Replica) Host" : "Host Cadangan (Replika)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Berikan pilihan host cadangan. Harus merupakan replika dari server LDAP/AD utama.",
    "Backup (Replica) Port" : "Port Cadangan (Replika)",
    "Disable Main Server" : "Nonaktifkan Server Utama",
    "Turn off SSL certificate validation." : "matikan validasi sertivikat SSL",
    "Cache Time-To-Live" : "Gunakan Tembolok untuk Time-To-Live",
    "in seconds. A change empties the cache." : "dalam detik. perubahan mengosongkan cache",
    "Directory Settings" : "Pengaturan Direktori",
    "User Display Name Field" : "Bidang Tampilan Nama Pengguna",
    "The LDAP attribute to use to generate the user's display name." : "Atribut LDAP digunakan untuk menghasilkan nama tampilan pengguna.",
    "Base User Tree" : "Pohon Pengguna Dasar",
    "One User Base DN per line" : "Satu Pengguna Base DN per baris",
    "User Search Attributes" : "Atribut Pencarian Pengguna",
    "Optional; one attribute per line" : "Pilihan; satu atribut per baris",
    "Group Display Name Field" : "Bidang Tampilan Nama Grup",
    "The LDAP attribute to use to generate the groups's display name." : "Atribut LDAP digunakan untuk menghasilkan nama tampilan grup.",
    "Base Group Tree" : "Pohon Grup Dasar",
    "One Group Base DN per line" : "Satu Grup Base DN per baris",
    "Group Search Attributes" : "Atribut Pencarian Grup",
    "Group-Member association" : "asosiasi Anggota-Grup",
    "Special Attributes" : "Atribut Khusus",
    "Quota Field" : "Bidang Kuota",
    "Quota Default" : "Kuota Baku",
    "in bytes" : "dalam bytes",
    "Email Field" : "Bidang Email",
    "User Home Folder Naming Rule" : "Aturan Penamaan Folder Home Pengguna",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Biarkan nama pengguna kosong (default). Atau tetapkan atribut LDAP/AD.",
    "Internal Username" : "Nama Pengguna Internal",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Secara default, nama pengguna internal akan dibuat dari atribut UUID. Hal ini untuk memastikan bahwa nama pengguna agar unik dan karakter tidak perlu dikonversi. Nama pengguna internal memiliki batasan hanya karakter ini yang diizinkan: [ a-zA-Z0-9_.@- ]. Karakter selain itu akan diganti dengan korespondensi ASCII mereka atau akan dihilangkan. Pada nama yang bentrok, sebuah angka akan ditambahkan dan ditingkatkan. Nama pengguna internal ini digunakan untuk mengenali sebuah nama secara internal. Itu juga dipakai sebagai nama folder home default, serta sebagai bagian dari URL remote untuk semua instansi layanan *DAV. Dengan pengaturan ini, perilaku default dapat diganti. Untuk mewujudkan perilaku seperti sebelum ownCloud 5, masukkan atribut nama tampilan pengguna di bidang isian berikut. Tinggalkan kosong untuk menggunakan perilaku default. Perubahan hanya akan terlihat untuk pengguna LDAP yang baru dipetakan (ditambahkan).",
    "Internal Username Attribute:" : "Atribut Nama Pengguna Internal:",
    "Override UUID detection" : "Timpa deteksi UUID",
    "UUID Attribute for Users:" : "Atribut UUID untuk Pengguna:",
    "UUID Attribute for Groups:" : "Atribut UUID untuk Grup:"
},
"nplurals=1; plural=0;");
