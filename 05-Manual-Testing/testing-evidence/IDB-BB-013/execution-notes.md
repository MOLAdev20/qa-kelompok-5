# IDB-BB-013 — OJEK: Atur titik tujuan di peta — PASS

**Tanggal:** 26 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642
**URL:** https://idbotani.com/k/ojek (sebagai tamu, tanpa login)

## Hasil
Klik titik pada peta di modal "Pilih Lokasi Tujuan" menetapkan tujuan: muncul garis rute hijau
dan estimasi berubah dari "Jarak estimasi: 0.00 km | Durasi: 0 menit" menjadi "0.09 km | 0 menit".
Setelah "Gunakan Titik Ini", Alamat Tujuan terisi:
"Tempeh, Lumajang, Jawa Timur, 67371, Indonesia (-8.203643, 113.177213)".

Catatan: estimasi jarak/durasi hanya tampil di dalam modal, bukan pada formulir utama.

## Bukti
`05-Manual-Testing/testing-evidence/IDB-BB-013/step-01-alamat-tujuan.png` (tangkapan halaman dari Chrome tester, sesi kedua 26 Nov 2026, 18:44–18:51 WIB; peranti browser menyimpan halaman sebagai PDF lalu dikonversi ke PNG).

Retest sesi kedua 26 Nov 18:44–18:51 WIB: hasil sama (PASS). Modal menampilkan rute "Jarak: 0.59 km | Durasi: 2 menit"; Alamat Tujuan terisi "Tempeh, Lumajang, Jawa Timur, 67371, Indonesia (-8.205583, 113.179180)", berbeda dari titik jemput.
