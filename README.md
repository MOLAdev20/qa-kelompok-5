# Laporan Pengujian Perangkat Lunak (Quality Assurance Testing) — Website Idbotani

Repositori ini disusun sebagai dokumentasi resmi kegiatan pengujian perangkat lunak (_Software Testing & Quality Assurance_) terhadap aplikasi berbasis web **Idbotani** (`https://idbotani.com/`). Proyek ini dibuat untuk memenuhi tugas kelompok mata kuliah **Testing & QA Perangkat Lunak** di **Universitas Pamulang**.

## 📋 Identitas Penyusun

### Anggota Kelompok

| No  | Nama Mahasiswa              | NIM            |
| :-: | --------------------------- | -------------- |
|  1  | `Fabian Jason Song`         | `231011400173` |
|  2  | `M Fachris Aziz Wantah`     | `231011402121` |
|  3  | `M Sabiilul Hikam Azzuhrie` | `231011400198` |
|  4  | `Ramaniitia Khadifa`        | `231011403642` |

### Informasi Akademik

| Keterangan           | Informasi                                               |
| -------------------- | ------------------------------------------------------- |
| **Kelompok**         | `[Isi Nomor/Nama Kelompok]`                             |
| **Kelas / Ruang**    | `[Isi Kelas, misal: 07TPLP001]`                         |
| **Program Studi**    | Teknik Informatika _(atau sesuaikan dengan prodi Anda)_ |
| **Fakultas**         | Ilmu Komputer                                           |
| **Perguruan Tinggi** | Universitas Pamulang                                    |
| **Mata Kuliah**      | Testing & QA Perangkat Lunak                            |
| **Dosen Pengampu**   | `[Isi Nama Dosen Pengampu]`                             |

## 🌐 Profil Objek Pengujian

- **Nama Aplikasi:** Idbotani
- **URL Target:** <https://idbotani.com/>
- **Kategori:** _E-Commerce_ / _Marketplace_ Berbasis Web

### Tentang Idbotani

**Idbotani** adalah platform _marketplace_ berbasis web yang berfokus pada kemudahan transaksi jual beli produk **petani dan UMKM (Usaha Mikro, Kecil, dan Menengah)** di Indonesia. Platform ini mempertemukan pelaku usaha (pelapak) dengan konsumen secara daring, sekaligus menyediakan beragam fitur pendukung transaksi dan logistik.

### Fitur Utama yang Tersedia pada Sistem

Berdasarkan observasi awal terhadap sistem, fitur-fitur utama yang terdapat pada situs web Idbotani meliputi:

1. **Autentikasi & Manajemen Akun:** Registrasi pengguna baru, masuk (_login_) menggunakan _email_ atau nomor WhatsApp (dengan verifikasi kode OTP), _login_ melalui akun Google, serta pemulihan kata sandi (_Lupa Password_).
2. **Katalog & Pencarian Produk:** Pencarian produk berdasarkan kata kunci, tren pencarian (_trending_), serta klasifikasi kategori (seperti Makanan, Minuman, Keripik, Olahan Pangan, Sambal, Ikan Hias, Peralatan Berkebun, Peralatan Rumah Tangga, hingga Produk Digital).
3. **Keranjang Belanja & Pemesanan:** Penambahan dan penghapusan produk di keranjang belanja, _Group Orders_, konfirmasi pesanan (_Konfirmasi Orders_), pelacakan status pengiriman (_Tracking Orders_), serta laporan pesanan (_Orders Report_).
4. **Layanan Ojek & Pengiriman (_Delivery_):** Fitur pemesanan kurir (_Instant_ dan _Regular_) dengan penentuan titik jemput dan alamat tujuan melalui peta interaktif, perhitungan estimasi ongkos kirim, serta layanan titip belanja.
5. **Ekosistem Pelapak & Komunitas:** Direktori _Idbotani Mall_, daftar toko pelapak, program afiliasi (_Affiliate Program_), serta fitur konten seperti _Blog_ dan _Forum_.
6. **Fungsionalitas Pendukung:** Pengaturan multi-bahasa (Bahasa Indonesia, Bahasa Inggris, dan Bahasa Mandarin), pusat notifikasi, kotak masuk (_Inbox_), serta layanan bantuan pelanggan.

## 🎯 Tujuan dan Ruang Lingkup Pengujian

### Tujuan Pengujian

1. Memastikan seluruh fungsionalitas utama pada situs web Idbotani berjalan sesuai dengan ekspektasi dan kebutuhan pengguna.
2. Mengidentifikasi cacat perangkat lunak (_bugs_), ketidaksesuaian antarmuka (_UI/UX issues_), maupun kendala teknis lainnya yang dapat memengaruhi pengalaman pengguna.
3. Memberikan laporan hasil pengujian yang terstruktur beserta rekomendasi perbaikan guna meningkatkan kualitas perangkat lunak.

### Ruang Lingkup Pengujian (_Test Scope_)

Pengujian difokuskan pada modul-modul utama yang dapat diakses oleh pengguna umum (_guest_) maupun pengguna terdaftar (_registered user_), antara lain:

- Modul Autentikasi (_Login_, Registrasi, dan Lupa Kata Sandi).
- Modul Navigasi, Kategori, dan Pencarian Produk.
- Modul Keranjang Belanja (_Add to Cart_, _Update Quantity_, dan _Remove Item_).
- Modul Layanan Ojek/Pengiriman (interaksi peta dan formulir pemesanan).
- Modul Konfirmasi & Pelacakan Pesanan.
- Pengujian Antarmuka (_UI/UX_) dan Responsivitas pada berbagai ukuran layar (_Desktop_ & _Mobile_).

## 🧪 Metode dan Alat Bantu Pengujian

### Metode Pengujian

- **_Black-Box Testing_:** Pengujian fungsionalitas sistem berdasarkan _input_ dan _output_ yang diharapkan tanpa melihat struktur kode internal (menggunakan teknik seperti _Equivalence Partitioning_ dan _Boundary Value Analysis_).
- **_Usability & UI Testing_:** Evaluasi kemudahan penggunaan, konsistensi tata letak, keterbacaan teks, serta kejelasan umpan balik sistem.
- **_Compatibility Testing_:** Pengujian kesesuaian tampilan dan fungsi pada berbagai peramban (_browser_) serta resolusi perangkat.

### Lingkungan & Alat Bantu (_Tools_)

_(Sesuaikan daftar di bawah ini dengan alat bantu yang digunakan oleh kelompok Anda)_

- **Peramban (_Browser_):** Google Chrome, Mozilla Firefox, Microsoft Edge.
- **Dokumentasi _Test Case_ & _Bug Report_:** Microsoft Excel / Google Sheets / Markdown.
- **Alat Inspeksi & Performa:** Chrome DevTools, Google Lighthouse.
- **Alat Otomasi _(Opsional)_:** `[Sebutkan jika menggunakan Selenium / Cypress / Katalon / Playwright]`

## 📁 Struktur Repositori

Berikut adalah struktur direktori yang digunakan untuk mengorganisasi dokumen pengujian di dalam repositori ini:

```text
├── README.md                    # Dokumentasi utama repositori
├── docs/
│   ├── Test_Plan.pdf            # Dokumen Rencana Pengujian (Test Plan)
│   └── Laporan_Akhir_QA.pdf     # Laporan lengkap hasil pengujian
├── test-cases/
│   └── Test_Cases_Idbotani.xlsx # Daftar skenario dan kasus uji (Test Case)
├── bug-reports/
│   └── Bug_Report_Idbotani.md   # Dokumentasi temuan cacat/bug secara terperinci
└── evidence/
    ├── screenshots/             # Tangkapan layar bukti pengujian & temuan bug
    └── videos/                  # Rekaman layar (screen recording) alur pengujian
```

## 📊 Ringkasan Hasil Pengujian _(Templat)_

Silakan perbarui tabel berikut setelah seluruh rangkaian pengujian selesai dilaksanakan:

| Modul yang Diuji               | Total _Test Case_ | _Passed_ | _Failed_ | _Blocked_ | Persentase Keberhasilan |
| ------------------------------ | :---------------: | :------: | :------: | :-------: | :---------------------: |
| Autentikasi (Login/Register)   |        `0`        |   `0`    |   `0`    |    `0`    |          `0%`           |
| Pencarian & Filter Produk      |        `0`        |   `0`    |   `0`    |    `0`    |          `0%`           |
| Keranjang Belanja              |        `0`        |   `0`    |   `0`    |    `0`    |          `0%`           |
| Layanan Ojek / Pengiriman      |        `0`        |   `0`    |   `0`    |    `0`    |          `0%`           |
| Konfirmasi & Pelacakan Pesanan |        `0`        |   `0`    |   `0`    |    `0`    |          `0%`           |
| Antarmuka & Responsivitas      |        `0`        |   `0`    |   `0`    |    `0`    |          `0%`           |
| **Total Keseluruhan**          |      **`0`**      | **`0`**  | **`0`**  |  **`0`**  |        **`0%`**         |

## ⚠️ Pernyataan Akademik (_Disclaimer_)

Seluruh aktivitas pengujian yang terdokumentasi dalam repositori ini dilakukan secara etis dan semata-mata untuk **keperluan pembelajaran akademik** pada mata kuliah Testing & QA Perangkat Lunak di Universitas Pamulang. Pengujian tidak melibatkan tindakan eksploitatif atau pengujian keamanan invasif yang dapat mengganggu ketersediaan layanan maupun data pada situs web <https://idbotani.com/>.
