# IDB-BB-014 — OJEK: Hitung ongkir — PASS (dengan catatan)

**Tanggal:** 26 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642
**URL:** https://idbotani.com/k/ojek (sebagai tamu, tanpa login)

## Hasil
Setelah memilih kurir "Instant" (juga dicoba "Regular") dengan tujuan terisi, muncul estimasi
"Jarak: 0.09 km | Ongkir: Rp 0", baik otomatis saat memilih layanan maupun setelah klik "Hitung Ongkir".

Catatan: ongkir Rp 0 untuk kedua layanan pada jarak 0,09 km — perlu verifikasi apakah ini tarif
yang benar atau kesalahan perhitungan.

## Bukti
`05-Manual-Testing/testing-evidence/IDB-BB-014/step-01-hitung-ongkir.png` (tangkapan halaman dari Chrome tester, sesi kedua 26 Nov 2026, 18:44–18:51 WIB; peranti browser menyimpan halaman sebagai PDF lalu dikonversi ke PNG).

Retest sesi kedua 26 Nov 18:44–18:51 WIB: hasil sama (PASS dengan catatan). Ongkir "Jarak: 0.59 km | Ongkir: Rp 0" untuk Instant dan Regular.
