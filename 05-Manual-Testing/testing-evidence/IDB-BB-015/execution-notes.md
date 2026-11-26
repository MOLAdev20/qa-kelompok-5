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
