# IDB-BB-016 — OJEK: Pesan dengan data belum lengkap — PASS

**Tanggal:** 26 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642
**URL:** https://idbotani.com/k/ojek (sebagai tamu, tanpa login)

## Hasil
Setelah reload halaman (titik jemput/tujuan kembali kosong; modal titik tidak menyediakan
tombol hapus), klik "Pesan Sekarang" menampilkan peringatan:
"Data Belum Lengkap — Lengkapi nama, no WhatsApp, alamat jemput, dan alamat tujuan."
Tidak ada pesanan yang dibuat: bagian "History Pemesanan" tetap "Belum ada history pemesanan."
setelah peringatan ditutup.

## Bukti
`05-Manual-Testing/testing-evidence/IDB-BB-016/step-01-validasi-data-belum-lengkap.png` (tangkapan halaman dari Chrome tester, sesi kedua 26 Nov 2026, 18:44–18:51 WIB; peranti browser menyimpan halaman sebagai PDF lalu dikonversi ke PNG).

Retest sesi kedua 26 Nov 18:44–18:51 WIB: hasil sama (PASS). Kolom Nama dan No. WhatsApp dikosongkan secara lokal hanya untuk pengujian ini; peringatan "Data Belum Lengkap" muncul dan tidak ada pesanan dibuat.
