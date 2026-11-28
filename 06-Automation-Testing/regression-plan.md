# Regression Plan — IdBotani

**Acuan materi:** Pertemuan 11 — Pengujian Regresi (Regression Testing).
**Sumber data:** `04-Test-Cases/test-cases.csv` (IDB-BB-001 s.d. 018),
`05-Manual-Testing/test-execution-log-2026-11-25.md` s.d. `2026-11-27.md`,
`07-Bug-Reports/Bug_Report_Idbotani.md` (IDB-BUG-001 s.d. 006).
**Tanggal rencana:** 28 Nov 2026.

## 1. Definisi — menurut P11

Pengujian regresi memastikan perubahan/pembaruan tidak merusak fungsionalitas
yang sudah ada. P11 membedakan lima jenis:

| Jenis (P11) | Kapan dipakai | Cocok untuk IdBotani? |
|---|---|---|
| Retest All | Semua kasus uji dijalankan ulang | Tidak efisien di sini — 18 kasus manual tiap hari, tanpa automation yang sudah jalan |
| Complete Regression Testing | Setelah perubahan kode besar | Tidak bisa — tim QA bukan pemilik kode IdBotani, tidak ada perubahan kode yang diumumkan |
| **Selective Regression Testing** | Hanya kasus uji yang relevan dengan modul yang terpengaruh | **Ya — jenis utama yang dipakai** |
| Partial Regression Testing | Modul yang diubah + modul yang terhubung langsung | Ya, sebagai varian selective untuk Ojek (011–017) dan Keranjang (007) |
| Progressive Regression Testing | Fitur baru ditambahkan, diuji bersama fitur lama | Belum — tidak ada fitur baru yang diumumkan untuk diuji |

Pilihan ini sesuai P11: selective menghemat waktu/sumber daya, dengan risiko
melewatkan bug tersembunyi di area yang tidak diuji — risiko itu dicatat di
bagian 4, bukan disembunyikan.

Catatan penting: di proyek ini "perubahan" yang diregresi **bukan** perubahan
kode oleh tim, melainkan waktu (retest harian) dan kemungkinan perubahan di
sisi situs live. Karena itu retest harian 25–27 Nov kemarin pada dasarnya
sudah berupa selective regression — dokumen ini meresmikannya.

## 2. Regression suite — selective

### 2a. Wajib tiap retest harian (terkait 6 bug Open)

| Bug | Test case | Yang dicek ulang |
|---|---|---|
| IDB-BUG-001 OTP tidak terkirim | IDB-BB-006 | Minta OTP lagi; cek WA/email; catat apakah email reset akhirnya sampai |
| IDB-BUG-002 Kode OTP tampil di halaman | IDB-BB-006 | Apakah keenam kotak kode masih terisi otomatis |
| IDB-BUG-003 Qty auto-naik tanpa pemberitahuan | IDB-BB-007 | Tambah Wingko qty 1 → cek qty/total dan ada/tidaknya pemberitahuan |
| IDB-BUG-004 Mini-cart/ringkasan tidak refresh | IDB-BB-007 | Hapus item tanpa reload → cek ringkasan dan mini-cart |
| IDB-BUG-005 Harga detail tanpa "Rp" | IDB-BB-005 | Buka detail Wingko → catat format harga apa adanya |
| IDB-BUG-006 Daftar Produk OJEK tidak tampil | IDB-BB-015 | Lihat 2b — preconditon diperbaiki, bukan sekadar diulang |

### 2b. Koreksi precondition IDB-BB-015 (temuan 28 Nov, perlu verifikasi browser)

Hasil manual 25–27 Nov: Daftar Produk tidak terlihat di `/k/ojek`, baik
sebagai tamu maupun saat login. Kesimpulan sementara saat itu: login bukan
penyebab.

Pemeriksaan HTML/JS situs pada 28 Nov 2026 (curl, bukan browser) menemukan:
- Elemen `#kurirProdukWrap` ("Daftar Produk", tombol "+ Tambah", bantuan
  "Khusus layanan Delivery/Belanja. Isi nama barang dan qty.") **ada di DOM**.
- Fungsi `toggleKurirProdukWrap()` hanya `.show()` bila
  `isDeliveryBelanjaType()` true, dan `.hide()` bila tidak.

Artinya precondition IDB-BB-015 kemungkinan **tidak lengkap**: jenis layanan
kurir harus dipilih dulu (Delivery/Belanja), bukan sekadar membuka halaman
atau login. Ini belum membuktikan BUG-006 fixed — hanya membuktikan test
case-nya perlu diperbaiki sebelum diulang.

**Langkah retest 28 Nov untuk IDB-BB-015:**
1. Buka `/k/ojek` sebagai tamu, catat visibilitas Daftar Produk sebelum memilih jenis layanan.
2. Pilih jenis layanan Delivery/Belanja (jangan isi/submit formulir).
3. Catat apakah `#kurirProdukWrap` tampil beserta field nama barang dan qty.
4. Bila tampil: BUG-006 bukan "fitur tidak ada", melainkan test case yang
   precondition-nya kurang — ubah status hanya setelah bukti screenshot
   dilampirkan, dan perbarui `test-cases.csv` + `Bug_Report_Idbotani.md`.
5. Bila tetap tidak tampil setelah memilih Delivery/Belanja: BUG-006 tetap Open.

Automation AT-08 hanya mencatat visibilitas awal; langkah 2–5 di atas tetap manual.

### 2c. Smoke suite — kasus PASS yang stabil, dijalankan ulang tiap retest

IDB-BB-001 (beranda), 002 (kategori), 003 (cari Wingko), 004 (cari tidak
cocok), 010 (mobile), 011 (halaman Ojek), 016 (validasi Ojek kosong),
017 (history kosong), 018 (ganti bahasa). Ini juga cakupan automation
AT-01 s.d. AT-07 setelah script dijalankan.

### 2d. Tidak masuk regression suite

- IDB-BB-008 (Order) dan IDB-BB-009 (Tracking): tetap BLOCKED — butuh pesanan
  sungguhan di situs live, dilarang test plan.
- IDB-BB-006 bagian Google Login: tetap PENDING sampai ada yang mengklik
  pemilih akun Google secara sadar; bukan untuk diotomatisasi.
- IDB-BB-012/013/014 (alamat jemput/tujuan, ongkir): masuk partial regression
  Ojek bila ada perubahan di modul Ojek; ongkir Rp 0 di IDB-BB-014 tetap
  perlu verifikasi tarif, bukan sekadar diulang.

## 3. Kriteria selesai / gagal

- **PASS:** hasil aktual sama dengan expected result di `test-cases.csv`.
- **FAIL:** hasil aktual berbeda; buat/perbarui bug report sesuai template
  P15 (siklus hidup bug: New → Open → Fixed → Retest → Closed/Reopen).
- **Tetap Open:** bug yang masih reproduksi di retest dicatat dengan tanggal
  retest, bukan dihapus. Enam bug saat ini semuanya masih Open per 27 Nov.
- **Fixed:** hanya bila retest dengan bukti menunjukkan perilaku sudah
  berubah, lalu status diubah di bug report + evidence-index + log.
- **Closed:** hanya setelah Fixed dan retest lanjutan mengonfirmasi.

## 4. Risiko dan keterbatasan (P11)

- Selective bisa melewatkan bug di area yang tidak dipilih — mitigasinya
  smoke suite 2c di atas.
- Membutuhkan pemahaman mendalam tentang sistem untuk memilih area yang
  terpengaruh — di proyek ini pemahaman itu berasal dari log manual 25–27 Nov,
  bukan dari akses kode.
- Tidak ada akses white-box/grey-box; regression di sini murni black-box,
  sesuai batasan di test plan.
- Situs live bisa berubah tanpa pemberitahuan — tanggal dan bukti tiap
  retest wajib dicatat.
