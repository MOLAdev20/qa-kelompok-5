# Obrolan QA Testing — IdBotani, 25 November 2026

**Tester:** RAMA NITTIA KHADIFA — 231011403642 (Functional QA Auth, Kelompok 5)
**Lawan bicara:** Developer / tim IdBotani
**Konteks:** Laporan hasil manual testing 25 Nov 2026 (8 PASS, 0 FAIL, 2 BLOCKED, 5 defect).
Detail lengkap: `05-Manual-Testing/test-execution-log-2026-11-25.md` dan
`07-Bug-Reports/Bug_Report_Idbotani.md`.

---

**Rama:** halo kak, izin lapor hasil testing idbotani kemarin (25 nov)

**Dev:** halo, silakan

**Rama:** jadi dari 10 test case, 8 pass, 0 fail, 2 blocked

**Rama:** homepage, kategori makanan, search wingko, search ngasal, detail wingko, tampilan login, keranjang, sama tampilan hp 390px — semuanya pass

**Dev:** oke, yang blocked apa?

**Rama:** order sama tracking. itu butuh pesanan beneran, jadi nggak bisa dites di situs live

**Rama:** nah ada 5 temuan, 2 yang penting

**Dev:** apa tuh?

**Rama:** pertama, otp nggak pernah sampai. daftar akun baru, katanya kode dikirim ke wa sama email. ditungguin, di-refresh, kirim ulang — nggak ada yang masuk. wa kosong, gmail juga kosong, spam juga udah dicek

**Dev:** terus gimana verifikasinya?

**Rama:** nah ini yang kedua, malah lebih penting. kodenya udah tampil di halaman verifikasi itu sendiri, tinggal dipake. jadi verifikasi berhasil, tapi kodenya kebuka di halaman

**Dev:** waduh, itu bahaya ya

**Rama:** iya kak, itu masuk high. kalau kode otp tampil di halaman, siapa aja yang buka halaman itu bisa verifikasi akun orang

**Rama:** akun ujinya udah kebuat (ramanitiak), tapi statusnya masih unverified

**Rama:** terus 3 temuan minor. pertama, wingko masuk keranjang kuantitasnya otomatis naik 1 ke 10 (minimal order) tanpa ada pemberitahuan

**Rama:** kedua, habis hapus item, mini keranjang sama ringkasan masih nunjukin itemnya, baru ilang setelah reload

**Rama:** ketiga, harga di halaman detail tulisannya "3,500" doang, nggak ada "rp". di daftar produk ada "rp 3.500". jadi nggak konsisten

**Dev:** oke dicatat semua. ada lagi yang belum dites?

**Rama:** google login sama lupa password belum dites. itu nyusul

**Dev:** siap, makasih laporannya. ditunggu update-nya

**Rama:** sama-sama kak
