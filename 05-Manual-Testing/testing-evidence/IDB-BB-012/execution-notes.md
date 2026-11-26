# IDB-BB-012 — OJEK: Atur Alamat Jemput — PASS

**Tanggal:** 26 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642
**URL:** https://idbotani.com/k/ojek (sebagai tamu, tanpa login)

## Hasil
Klik kolom Alamat Jemput membuka modal "Pilih Lokasi Jemput" (peta Leaflet/OpenStreetMap).
Klik "Gunakan Titik Ini" mengisi kolom dengan:
"Stadion Tempeh, 3, Tempeh, Lumajang, Jawa Timur, 67371, Indonesia (-8.203248, 113.176144)".

Catatan: klik di peta tidak tampak menggeser pin dari titik tengah default; titik yang dipakai adalah titik tengah/pusat peta saat tombol dikonfirmasi.

## Bukti
`05-Manual-Testing/testing-evidence/IDB-BB-012/step-01-alamat-jemput.png` (tangkapan halaman dari Chrome tester, sesi kedua 26 Nov 2026, 18:44–18:51 WIB; peranti browser menyimpan halaman sebagai PDF lalu dikonversi ke PNG).

Retest sesi kedua 26 Nov 18:44–18:51 WIB: hasil sama (PASS). Alamat Jemput terisi "Tempeh, Lumajang, Jawa Timur, 67371, Indonesia (-8.204119, 113.180648)".
