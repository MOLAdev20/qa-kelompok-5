# Laporan Akhir QA — Website Idbotani

**DRAF — 28 Nov 2026.** Status draf karena wawancara belum dilakukan dan
automation belum dieksekusi (lihat §7). Semua angka di bawah ini berasal dari
data aktual repo, bukan asumsi. Retest harian 28 Nov 2026 sudah masuk
(log 28 Nov, Rama): 6 bug tetap Open, 0 Fixed; email reset password yang
diminta 27 Nov 08.47 WIB tidak ditemukan di Gmail setelah ~24 jam —
keterlambatan tersingkir, mendukung BUG-001. Google Login masih pending
(tab pemilih akun sudah tertutup).

**Kelompok:** Kelompok 5, Kelas V.714, Teknik Informatika, Universitas Pamulang
**Mata kuliah:** Testing & QA Perangkat Lunak — Dosen: Asep Erlan Maulana, S.Kom., M.Kom.
**Objek:** https://idbotani.com/ (live, non-destructive)
**Acuan materi:** Pertemuan 1–16 (Pengantar s.d. Dokumentasi & Tren QA);
khususnya P10 Automation, P11 Regression, P15 Manajemen Bug, P16 Dokumentasi
(Test Plan, Test Case, Test Report).

## 1. Pendahuluan dan Profil Objek

Idbotani adalah marketplace web untuk produk petani dan UMKM Indonesia:
autentikasi (email/WA OTP, Google, lupa password), katalog dan pencarian,
keranjang, layanan Ojek/pengiriman (Instant/Regular, peta, ongkir), konfirmasi
dan pelacakan pesanan, Idbotani Mall, afiliasi, blog/forum, dan multi-bahasa
(ID/EN/ZH). Detail profil ada di `01-Project-Overview/` dan README utama.

Tujuan pengujian (dari README dan test plan): memastikan fungsionalitas utama
berjalan sesuai ekspektasi, mengidentifikasi bug dan masalah UI/UX, dan
memberikan laporan terstruktur beserta rekomendasi.

## 2. Standar dan Kajian Literatur

- ISO/IEC/IEEE 29119 (proses pengujian) dan ISO/IEC 25010 (model kualitas) —
  lihat `02-Standards-References/`.
- Metode: Black-box (Equivalence Partitioning, Boundary Value Analysis —
  P4), didukung Usability/UI Testing dan Compatibility Testing.
- Dokumentasi mengikuti P16: Test Plan (`03-QA-Planning/test-plan.md`),
  Test Case (`04-Test-Cases/test-cases.csv`), dan Test Report (dokumen ini).

## 3. Metodologi

- **Black-box:** 18 test case IDB-BB-001 s.d. 018, dieksekusi manual
  25–27 Nov 2026, retest harian untuk 6 bug terbuka.
- **Grey-box / White-box:** tidak ada akses source code maupun dokumentasi
  internal resmi — folder `05-Manual-Testing/grey-box-testing/` dan
  `white-box-testing/` hanya berisi README. Tidak ada klaim hasil di sini.
- **Automation:** skrip Playwright read-only dibuat 28 Nov 2026
  (`06-Automation-Testing/`), mencakup AT-01 s.d. AT-08. **Belum dieksekusi**
  saat draf ini ditulis — hasilnya tidak diklaim.
- **Regression:** selective regression (P11) — retest kasus terkait bug +
  smoke suite kasus PASS stabil. Rencana lengkap di
  `06-Automation-Testing/regression-plan.md`.
- **Batasan etis:** non-destructive; tidak ada pesanan, pembayaran, atau data
  yang dibuat/diubah di production. IDB-BB-008/009 BLOCKED karena alasan ini.

## 4. Hasil Pengujian Manual

Sumber: `04-Test-Cases/test-cases.csv`, log eksekusi 25–27 Nov 2026,
`05-Manual-Testing/test-metrics-summary-2026-11-26.md`.

**Total: 18 test case — 15 PASS (83%), 1 FAIL (6%), 2 BLOCKED (11%).**

| Area (dari CSV) | Total | PASS | FAIL | BLOCKED |
|---|---|---|---|---|
| Homepage (001) | 1 | 1 | 0 | 0 |
| Navigation (002) | 1 | 1 | 0 | 0 |
| Search (003–004) | 2 | 2 | 0 | 0 |
| Product (005) | 1 | 1 | 0 | 0 |
| Authentication (006) | 1 | 1 | 0 | 0 |
| Cart (007) | 1 | 1 | 0 | 0 |
| Order (008) | 1 | 0 | 0 | 1 |
| Tracking (009) | 1 | 0 | 0 | 1 |
| Responsive (010) | 1 | 1 | 0 | 0 |
| OJEK (011–017) | 7 | 6 | 1 | 0 |
| UI/UX (018) | 1 | 1 | 0 | 0 |
| **Total** | **18** | **15** | **1** | **2** |

Catatan penting atas angka PASS:
- IDB-BB-005, 006, dan 007 berstatus PASS untuk skenario utamanya, tetapi
  masing-masing melahirkan bug (BUG-005, BUG-001/002, BUG-003/004). PASS di
  sini tidak berarti "tanpa temuan".
- IDB-BB-014 (ongkir) PASS dengan catatan: ongkir Rp 0 untuk Instant maupun
  Regular pada jarak 0,09 km — perlu verifikasi apakah tarif benar atau
  kesalahan perhitungan.
- IDB-BB-018 (ganti bahasa) PASS dengan catatan: bekerja via widget Google
  Translate, bukan terjemahan native; sebagian teks tetap Indonesia.

## 5. Defect — Ringkasan

Sumber: `07-Bug-Reports/Bug_Report_Idbotani.md`. Semua masih **Open** per
retest 27 Nov 2026 (0 Fixed). Siklus hidup bug mengikuti P15:
New → Open → Fixed → Retest → Closed/Reopen; keenam bug masih di tahap Open.

| Bug ID | Judul | Severity | Priority | Test Case |
|---|---|---|---|---|
| IDB-BUG-001 | Kode OTP tidak terkirim ke WhatsApp maupun email | High | P1 | IDB-BB-006 |
| IDB-BUG-002 | Kode OTP ditampilkan langsung di halaman verifikasi | High | P1 | IDB-BB-006 |
| IDB-BUG-003 | Kuantitas otomatis naik ke minimal order tanpa pemberitahuan | Low | P3 | IDB-BB-007 |
| IDB-BUG-004 | Mini-keranjang dan ringkasan tidak refresh setelah item dihapus | Low | P3 | IDB-BB-007 |
| IDB-BUG-005 | Format harga di detail produk tanpa awalan "Rp" | Low | P4 | IDB-BB-005 |
| IDB-BUG-006 | Daftar Produk OJEK tidak tampil untuk tamu | Low | P3 | IDB-BB-015 |

**Temuan pra-verifikasi 28 Nov (bukan perubahan status):** pemeriksaan
HTML/JS `/k/ojek` menemukan `#kurirProdukWrap` ada di DOM dan hanya
ditampilkan bila jenis layanan Delivery/Belanja dipilih
(`toggleKurirProdukWrap()`). Precondition IDB-BB-015 kemungkinan kurang
lengkap — perlu verifikasi di browser sebelum status BUG-006 diubah. Detail
di `06-Automation-Testing/retest-checklist-2026-11-28.md`.
Pemeriksaan HTML yang sama mengonfirmasi BUG-005 masih reproduksi
(harga detail masih `3.500`).

## 6. Hasil Automation

**Belum ada hasil yang valid.** Skrip AT-01 s.d. AT-08 dibuat 28 Nov 2026
dan sudah dicoba sekali di VM: 8 gagal karena
`ERR_TUNNEL_CONNECTION_FAILED` (masalah jaringan VM, bukan FAIL situs —
lihat `06-Automation-Testing/automation-run-2026-11-28.md`). Setelah
dijalankan ulang dari jaringan yang bisa mencapai situs, isi
`06-Automation-Testing/test-results/` dengan versi tool, browser, waktu,
dan PASS/FAIL per ID — jangan isi dokumen ini sebelum itu.

## 7. Yang Belum Selesai (Gap)

- **Wawancara QA (Fase IV.4, `08-Interview/`):** 12 pertanyaan sudah ada,
  wawancara belum dilakukan — bagian ini kosong dan tidak boleh diisi
  dengan jawaban karangan.
- **Automation:** skrip ada, eksekusi belum ada (lihat §6).
- **API Testing (P12), Performance Testing (P13), Security Testing (P14):**
  tidak diuji. Tidak ada dokumentasi API/akses resmi; pengujian beban dan
  keamanan invasif dilarang di production oleh test plan dan disclaimer repo.
- **Grey-box / White-box (P3):** tidak ada akses; hanya black-box yang
  dilaporkan.
- **Cross-browser:** baru Chrome. Firefox/Edge direncanakan lewat
  Playwright (AT-01 s.d. AT-07), belum dieksekusi.
- **Konfirmasi pesanan:** tidak ada test case selain 008/009 yang BLOCKED.
- **Retest 28 Nov:** sudah dilakukan Rama 08.43–08.48 WIB (log 28 Nov);
  hasilnya sudah masuk §5. Retest berikutnya 29 Nov: ulangi 6 bug terbuka.

## 8. Analisis Kualitas

- Fungsionalitas inti yang bisa diuji sebagai tamu sebagian besar berjalan:
  beranda, kategori, pencarian (cocok dan tidak cocok), detail produk,
  halaman Ojek, validasi form kosong, dan responsivitas mobile.
- Dua temuan High/P1 terkonsentrasi di autentikasi OTP (BUG-001/002):
  pengguna biasa tidak bisa menyelesaikan verifikasi lewat jalur normal
  (kode tidak sampai), sementara jalur di halaman itu sendiri meniadakan
  fungsi verifikasi dua faktor (kode tampil di halaman). Ini temuan
  terpenting laporan ini dan perlu ditindaklanjuti pemilik sistem.
- Empat temuan Low lainnya konsisten dan sudah diretest tiga hari
  berturut-turut (25–27 Nov) tanpa perubahan — menunjukkan defect yang
  stabil, bukan gangguan sesaat.
- Satu-satunya FAIL (IDB-BB-015) kini dipertanyakan precondition-nya
  (lihat §5) — contoh bahwa test case yang baik (P16) sama pentingnya
  dengan eksekusi yang baik.

## 9. Kesimpulan

Situs Idbotani layak digunakan untuk alur tamu yang diuji, dengan catatan
dua defect High di autentikasi OTP harus diperbaiki sebelum alur login
diandalkan. Enam bug masih Open per 28 Nov 2026; tidak ada yang dinyatakan
Fixed tanpa bukti retest.

## 10. Rekomendasi

1. **P1 — Perbaiki pengiriman OTP (BUG-001)** dan **hentikan penayangan kode
   OTP di halaman verifikasi (BUG-002)**; verifikasi ulang end-to-end
   setelah perbaikan, termasuk email reset password.
2. **P3 — Beri pemberitahuan minimal order (BUG-003)** dan **refresh
   mini-cart/ringkasan setelah hapus item (BUG-004)** tanpa perlu reload.
3. **P3 — Perjelas Daftar Produk OJEK (BUG-006):** bila fitur memang hanya
   untuk Delivery/Belanja, tampilkan petunjuknya di halaman; bila untuk
   semua layanan, tampilkan selalu. Perbaiki precondition IDB-BB-015.
4. **P4 — Samakan format harga (BUG-005):** tampilkan `Rp 3.500` di detail
   seperti di daftar produk.
5. **Verifikasi ongkir Rp 0 (IDB-BB-014)** dengan tarif resmi sebelum
   disimpulkan benar/salah.
6. Selesaikan wawancara dan eksekusi ulang automation, lalu perbarui
   laporan ini dari DRAF menjadi Final — tanpa mengubah angka yang sudah
   terverifikasi di §4–§5.
