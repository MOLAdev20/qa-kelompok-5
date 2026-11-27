# IDB-BB-015 — OJEK: Tambah produk ke Daftar Produk — FAIL

**Tanggal:** 26 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642
**URL:** https://idbotani.com/k/ojek (sebagai tamu, tanpa login)

## Hasil
TIDAK ADA bagian "Daftar Produk" maupun kolom nama produk dan qty di halaman /k/ojek.
Formulir hanya berisi: Nama, No. WhatsApp, Alamat Jemput, Alamat Tujuan, Hitung Ongkir,
Catatan, dan tombol "Pesan Sekarang". Pencarian teks "Produk" di seluruh halaman hanya
menemukan menu "Kategori Produk". Widget OJEK di beranda juga tidak memiliki Daftar Produk.

Defect tercatat: IDB-BUG-006 (Low/P3) — Daftar Produk OJEK tidak tampil untuk tamu.

Catatan: perlu dicek saat login — kemungkinan fitur hanya tersedia untuk pengguna login.
Kalau begitu, test case ini perlu diubah precondition-nya menjadi login.

## Bukti
`05-Manual-Testing/testing-evidence/IDB-BB-015/step-01-tanpa-daftar-produk.png` (tangkapan halaman dari Chrome tester, sesi kedua 26 Nov 2026, 18:44–18:51 WIB; peranti browser menyimpan halaman sebagai PDF lalu dikonversi ke PNG).

Retest sesi kedua 26 Nov 18:44–18:51 WIB: hasil sama (FAIL). Tetap tidak ada bagian Daftar Produk di halaman /k/ojek.

## Re-check saat login — 27 November 2026, 08.46 WIB

Login sebagai ramanitiak, buka https://idbotani.com/k/ojek. Halaman "Pesan Layanan Kurir" hanya berisi tombol Instant/Regular, field Nama lengkap (terisi otomatis ramanitiak), No. WhatsApp (terisi otomatis), Alamat Jemput/Tujuan (readonly), tombol "Hitung Ongkir", "Catatan (opsional)", tombol "Pesan Sekarang", dan "History Pemesanan — Belum ada history pemesanan."

TETAP TIDAK ADA bagian "Daftar Produk" maupun field nama produk/qty — meski sudah login. Jadi login BUKAN penyebab; fitur memang tidak ada di halaman. IDB-BUG-006 tetap Open; precondition test case ini perlu ditinjau (bukan soal login). Formulir tidak diisi dan tidak dikirim.

## Bukti
`05-Manual-Testing/testing-evidence/IDB-BB-015/step-02-ojek-login-2026-11-27.png` (tangkapan halaman /k/ojek saat login, 27 Nov 2026, 08.46 WIB; PDF browser dikonversi ke PNG).
