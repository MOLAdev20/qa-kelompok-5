# Execution Notes — IDB-BB-005 Product Detail

- **Test Case ID:** IDB-BB-005 (Black-box, Product)
- **Tanggal eksekusi:** Rabu, 25 November 2026, 18.41 WIB
- **Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
- **Lingkungan:** https://idbotani.com/ (Live Production, Non-Destructive)
- **Browser/perangkat:** Cloud browser, desktop Chrome, viewport 1920x1080
- **Langkah:** Buka halaman detail produk Wingko (https://idbotani.com/produk/detail/wingko-171448)
- **Hasil aktual:** Nama "Wingko (Preorder: 2 Hari)", harga 3.500, "Minimal Order 10 Pc", "Stok 10 Pc", "Dilihat 54 kali", penjual Gudeg Senthong Wetan (Verified) dengan tombol Chat, deskripsi "Ada 4 varian rasa: Original, Oreo, Matcha dan Tiramizu", serta bagian Produk Terkait.
- **Status:** PASS
- **Bukti:** step-01-detail-wingko.png
- **Catatan minor:** Harga di halaman detail tertulis "3,500" tanpa awalan "Rp", sedangkan di daftar produk tertulis "Rp 3.500" — inkonsistensi format harga (kosmetik, severity Low).
- **Retest 26 Nov 2026, 08.43 WIB:** Harga detail Wingko TETAP "3,500" tanpa "Rp" (screenshot Microlink step-02-retest-detail-wingko-2026-11-26.png; "Dilihat 59 kali", sebelumnya 54). IDB-BUG-005 tetap Open.
