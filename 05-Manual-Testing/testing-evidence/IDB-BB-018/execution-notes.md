# IDB-BB-018 — UI/UX: Ganti bahasa antarmuka — PASS

**Tanggal:** 26 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642
**URL:** https://idbotani.com/ (beranda)

## Hasil
Pengalih bahasa (ID/EN/ZH) ada di bilah atas beranda.
- English: antarmuka berubah menjadi "Idbotani: Easy shopping for MSME products",
  "Let's Buy and Sell at Idbotani, Register Now!", "Browse Orders", "OJEK service", "Order now", dsb.
- Chinese: antarmuka berubah (judul "Idbotani：轻松选购中小微企业产品", menu berbahasa Mandarin).

Catatan: pengalih bekerja via widget Google Translate (bilah "Diterjemahkan ke: …" muncul),
bukan terjemahan native — sebagian teks tetap berbahasa Indonesia
(mis. spanduk "Buka Toko GRATIS untuk Usahamu").
Bahasa sudah dikembalikan ke Indonesia setelah pengujian.

## Bukti
`05-Manual-Testing/testing-evidence/IDB-BB-018/step-01-ganti-bahasa.png` (tangkapan halaman dari Chrome tester, sesi kedua 26 Nov 2026, 18:44–18:51 WIB; peranti browser menyimpan halaman sebagai PDF lalu dikonversi ke PNG).

Retest sesi kedua 26 Nov 18:44–18:51 WIB: hasil sama (PASS). Bahasa diganti berurutan Indonesia → English → Chinese → Indonesia. Catatan: saat beralih ke Chinese dan kembali ke Indonesia sempat muncul "option_not_found", tapi halaman tetap berubah; setelah kembali ke Indonesia, banner Google Translate masih menampilkan "Lihat halaman ini dalam bahasa: Abkhaz".
