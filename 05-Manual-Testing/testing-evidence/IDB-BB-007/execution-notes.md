# Execution Notes — IDB-BB-007 Cart

- **Test Case ID:** IDB-BB-007 (Black-box, Cart)
- **Tanggal eksekusi:** Rabu, 25 November 2026, 20.48–20.49 WIB
- **Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
- **Lingkungan:** https://idbotani.com/ (Live Production, Non-Destructive)
- **Browser/perangkat:** Cloud browser, desktop Chrome, viewport 1920x1080
- **Akun uji:** ramanitiak (ID Konsumen 20261125-0950), dibuat 25 Nov 2026 untuk pengujian ini atas perintah tester; email ramanitiak@gmail.com, No. WA terdaftar
- **Langkah:**
  1. Buka halaman detail Wingko https://idbotani.com/produk/detail/wingko-171448 dalam keadaan login (menu "Akun" tampil lengkap: Profile, Sosmed, Data Bank, Keuangan, Wishlist, Pembelian, History Kurir, PPOB, Donasi, Jadi Kurir, Komplain, Logout). Badge keranjang 0 (kosong).
  2. Klik tombol "+ Keranjang" dengan kuantitas awal 1.
  3. Buka halaman keranjang https://idbotani.com/produk/keranjang dan periksa isinya.
  4. Hapus item lewat tombol X, lalu muat ulang halaman untuk verifikasi akhir.
- **Hasil aktual:** Popup "Berhasil Ditambahkan" untuk Wingko muncul; badge keranjang berubah 0 → 1. Di halaman keranjang Wingko ADA: penjual Gudeg Senthong Wetan, dikirim dari BOGOR, Pre-order 2 Hari, Berat 0 Gram, Status Order "Pending", harga Rp 3.500 per Pc. Kuantitas tercatat 10 (bukan 1) — situs otomatis menaikkan ke Minimal Order 10 Pc; Subtotal Rp 35.000, Total Rp 35.000 (10 × Rp 3.500). Setelah dihapus, area utama keranjang menampilkan "Maaf, Keranjang belanja anda saat ini masih kosong,..." dan badge kembali 0; setelah reload, keranjang TERKONFIRMASI KOSONG di semua tempat (panel samping "Wah keranjang belanjaanmu kosong!", tidak ada lagi tombol "Lanjut ke Pembayaran").
- **Status:** PASS — keranjang mencerminkan item dan kuantitas sesuai aturan minimal order; pembersihan berhasil.
- **Bukti:** step-01-keranjang-wingko.png
- **Temuan:**
  1. (Minor, UX) Kuantitas otomatis dinaikkan 1 → 10 ke minimal order tanpa pemberitahuan eksplisit saat menambah ke keranjang — pengguna yang mengira membeli 1 Pc akan terkejut dengan total Rp 35.000.
  2. (Minor, UI) Setelah item dihapus, panel mini-keranjang dan kotak ringkasan sempat masih menampilkan Wingko dan total Rp 35.000 (tampilan usang, tidak ikut ter-refresh) — baru benar setelah halaman dimuat ulang.
- **Catatan bukti:** Screenshot diambil langsung dari Chrome tester pada 25 Nov 2026, 20.54 WIB — halaman keranjang yang sama (Wingko, Qty. 10 x Rp 3.500, Total Rp 35.000). Halaman yang memerlukan login tidak bisa di-capture menjadi file PNG lewat metode screenshot yang dipakai untuk test 001–006/010, jadi bukti ini berasal dari screenshot tester. Tidak ada checkout, alamat, pembayaran, atau pesanan yang dibuat — pengujian non-destructive.
- **Retest 26 Nov 2026, 08.46–08.47 WIB:** Keranjang awal berisi sisa Wingko Qty 10 dari pengujian sebelumnya — dihapus dulu dan dipastikan kosong sebelum uji. Tambah Wingko qty 1 → keranjang tercatat Qty 10, Total Rp 35.000, tanpa pemberitahuan minimal order (IDB-BUG-003 tetap Open). Hapus item tanpa reload: baris utama hilang dan badge 0, tetapi ringkasan tetap Subtotal/Total Rp 35.000 + tombol "Lanjut ke Pembayaran", dan panel mini-keranjang masih menampilkan Wingko (IDB-BUG-004 tetap Open). Setelah reload, keranjang terkonfirmasi kosong. Tidak ada checkout/pesanan/pembayaran.
