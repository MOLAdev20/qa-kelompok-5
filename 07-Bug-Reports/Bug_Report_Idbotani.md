# Bug Report — Website IdBotani

- **Tanggal pelaporan:** Rabu, 25 November 2026
- **Pelapor:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
- **Objek uji:** https://idbotani.com/ (Live Production, Non-Destructive)
- **Lingkungan:** Cloud browser, desktop Chrome, viewport 1920x1080; Chrome di laptop tester (screenshot keranjang IDB-BB-007)
- **Akun uji:** ramanitiak (ID Konsumen 20261125-0950), dibuat 25 Nov 2026 untuk pengujian
- **Catatan:** Semua defect di bawah ini sudah diverifikasi lewat pengujian langsung, bukan asumsi. Pengujian non-destructive: tidak ada pesanan, pembayaran, atau data yang dibuat/dibuat.
- **Retest:** Kamis, 26 November 2026, 08:43–08:49 WIB — kelima bug masih reproduksi (lihat "Retest result" tiap bug). Lupa Password: permintaan reset terkirim ("Permintaan terkirim!, Cek email anda"); kedatangan email reset di Gmail masih menunggu pengecekan. Google Login: pending klik pengguna di pemilih akun Google. Sore harinya, pengujian OJEK (IDB-BB-011–018) menemukan IDB-BUG-006.

## Ringkasan

| Bug ID | Judul | Severity | Priority | Test Case | Status |
|---|---|---|---|---|---|
| IDB-BUG-001 | Kode OTP tidak terkirim ke WhatsApp maupun email | High | P1 | IDB-BB-006 | Open |
| IDB-BUG-002 | Kode OTP ditampilkan langsung di halaman verifikasi | High | P1 | IDB-BB-006 | Open |
| IDB-BUG-003 | Kuantitas otomatis naik ke minimal order tanpa pemberitahuan | Low | P3 | IDB-BB-007 | Open |
| IDB-BUG-004 | Mini-keranjang dan ringkasan tidak refresh setelah item dihapus | Low | P3 | IDB-BB-007 | Open |
| IDB-BUG-005 | Format harga di detail produk tanpa awalan "Rp" | Low | P4 | IDB-BB-005 | Open |
| IDB-BUG-006 | Daftar Produk OJEK tidak tampil untuk tamu | Low | P3 | IDB-BB-015 | Open |

---

## IDB-BUG-001 — Kode OTP tidak terkirim ke WhatsApp maupun email

- **Bug ID:** IDB-BUG-001
- **Title:** Kode OTP tidak terkirim ke WhatsApp maupun email
- **Related Test Case ID:** IDB-BB-006
- **Environment / browser / device:** https://idbotani.com/ (live), Cloud browser, desktop Chrome, viewport 1920x1080
- **Precondition:** Akun baru terdaftar (ramanitiak, email ramanitiak@gmail.com, No. WA terdaftar); halaman verifikasi OTP terbuka
- **Steps to reproduce:**
  1. Daftar akun baru lewat tab Daftar (email + No. WA), klik "Mendaftar".
  2. Halaman OTP tampil dengan pesan kode dikirim ke WA dan email.
  3. Periksa WhatsApp dan Gmail (Inbox, Spam, All Mail).
  4. Klik "klik disini" untuk kirim ulang, lalu periksa lagi.
- **Expected result:** Kode OTP 6 digit sampai ke WA dan/atau email dalam waktu wajar.
- **Actual result:** Kode tidak pernah sampai — tidak ada di WhatsApp, tidak ada di Gmail (Inbox, Spam, dan All Mail sudah diperiksa), bahkan setelah kirim ulang. Pengguna biasa tidak bisa menyelesaikan verifikasi/login lewat jalur normal.
- **Severity:** High
- **Priority:** P1
- **Evidence path:** `05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md`
- **Reporter / date:** RAMA NITTIA KHADIFA / 25 Nov 2026
- **Status:** Open
- **Retest result:** 26 Nov 2026, 08:45 WIB — OTP diminta lagi saat login ulang sebagai ramanitiak; kode tetap tampil di halaman OTP (IDB-BUG-002 masih ada), jadi pengiriman ke WA/email tidak terverifikasi ulang dari sisi situs. Kedatangan email reset/Lupa Password di Gmail masih menunggu pengecekan. Status tetap Open.

---

## IDB-BUG-002 — Kode OTP ditampilkan langsung di halaman verifikasi

- **Bug ID:** IDB-BUG-002
- **Title:** Kode OTP ditampilkan langsung di halaman verifikasi
- **Related Test Case ID:** IDB-BB-006
- **Environment / browser / device:** https://idbotani.com/ (live), Cloud browser, desktop Chrome, viewport 1920x1080
- **Precondition:** Halaman verifikasi OTP terbuka setelah daftar/login
- **Steps to reproduce:**
  1. Minta kode OTP (daftar atau login).
  2. Perhatikan keenam kotak "Two Factor Code" di halaman https://idbotani.com/members/otp.
  3. Klik "Verifikasi" tanpa memasukkan kode dari WA/email.
- **Expected result:** Kode hanya dikirim lewat channel resmi (WA/email); kolom form kosong sampai pengguna memasukkan kode yang diterimanya.
- **Actual result:** Keenam kotak sudah terisi kode 6 digit yang benar oleh halaman itu sendiri; verifikasi berhasil ("SUKSES - Two Factor Verification") tanpa kode dari channel resmi. Kode berubah setelah kirim ulang — yang tampil memang kode aktif. Ini meniadakan fungsi verifikasi dua faktor.
- **Severity:** High
- **Priority:** P1
- **Evidence path:** `05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md`
- **Reporter / date:** RAMA NITTIA KHADIFA / 25 Nov 2026
- **Status:** Open
- **Retest result:** 26 Nov 2026, 08:45 WIB — keenam kotak kode tetap terisi otomatis oleh halaman saat pertama tampil; verifikasi berhasil tanpa kode dari channel resmi. Status tetap Open.

---

## IDB-BUG-003 — Kuantitas otomatis naik ke minimal order tanpa pemberitahuan

- **Bug ID:** IDB-BUG-003
- **Title:** Kuantitas otomatis naik ke minimal order tanpa pemberitahuan
- **Related Test Case ID:** IDB-BB-007
- **Environment / browser / device:** https://idbotani.com/ (live), Cloud browser, desktop Chrome, viewport 1920x1080; login sebagai ramanitiak
- **Precondition:** Keranjang kosong; halaman detail Wingko (Minimal Order 10 Pc, Stok 10 Pc)
- **Steps to reproduce:**
  1. Buka halaman detail Wingko https://idbotani.com/produk/detail/wingko-171448.
  2. Kuantitas awal 1, klik tombol "+ Keranjang".
  3. Buka halaman keranjang https://idbotani.com/produk/keranjang.
- **Expected result:** Pengguna diberi tahu bahwa minimal order 10 Pc (atau kuantitas tetap 1 dengan pesan yang jelas).
- **Actual result:** Popup "Berhasil Ditambahkan"; keranjang berisi Qty. 10 x Rp 3.500, Subtotal Rp 35.000, Total Rp 35.000 — tanpa pemberitahuan apa pun saat menambah.
- **Severity:** Low
- **Priority:** P3
- **Evidence path:** `05-Manual-Testing/testing-evidence/IDB-BB-007/step-01-keranjang-wingko.png`, `05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md`
- **Reporter / date:** RAMA NITTIA KHADIFA / 25 Nov 2026
- **Status:** Open
- **Retest result:** 26 Nov 2026, 08:46 WIB — tambah Wingko qty 1 → keranjang tercatat Qty 10, Subtotal/Total Rp 35.000, tanpa pemberitahuan minimal order. Status tetap Open.

---

## IDB-BUG-004 — Mini-keranjang dan ringkasan tidak refresh setelah item dihapus

- **Bug ID:** IDB-BUG-004
- **Title:** Mini-keranjang dan ringkasan tidak refresh setelah item dihapus
- **Related Test Case ID:** IDB-BB-007
- **Environment / browser / device:** https://idbotani.com/ (live), Cloud browser, desktop Chrome, viewport 1920x1080; login sebagai ramanitiak
- **Precondition:** Keranjang berisi Wingko (Qty. 10, Total Rp 35.000)
- **Steps to reproduce:**
  1. Buka halaman keranjang https://idbotani.com/produk/keranjang.
  2. Hapus Wingko lewat tombol X pada item.
  3. Perhatikan panel mini-keranjang dan kotak ringkasan tanpa memuat ulang halaman.
- **Expected result:** Semua bagian halaman langsung menunjukkan keranjang kosong.
- **Actual result:** Area utama menampilkan "Maaf, Keranjang belanja anda saat ini masih kosong,..." dan badge keranjang kembali 0, tetapi panel mini-keranjang dan kotak ringkasan masih menampilkan Wingko dan total Rp 35.000 sampai halaman dimuat ulang.
- **Severity:** Low
- **Priority:** P3
- **Evidence path:** `05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md`
- **Reporter / date:** RAMA NITTIA KHADIFA / 25 Nov 2026
- **Status:** Open
- **Retest result:** 26 Nov 2026, 08:47 WIB — setelah hapus tanpa reload, ringkasan tetap Subtotal/Total Rp 35.000 + tombol 'Lanjut ke Pembayaran'; panel mini-keranjang masih menampilkan Wingko; setelah reload keranjang kosong. Status tetap Open.

---

## IDB-BUG-005 — Format harga di detail produk tanpa awalan "Rp"

- **Bug ID:** IDB-BUG-005
- **Title:** Format harga di detail produk tanpa awalan "Rp"
- **Related Test Case ID:** IDB-BB-005
- **Environment / browser / device:** https://idbotani.com/ (live), Cloud browser, desktop Chrome, viewport 1920x1080
- **Precondition:** Halaman daftar produk tersedia
- **Steps to reproduce:**
  1. Buka kategori Makanan https://idbotani.com/produk/kategori/makanan.
  2. Buka halaman detail Wingko https://idbotani.com/produk/detail/wingko-171448.
  3. Bandingkan format harga di daftar produk dan di detail produk.
- **Expected result:** Format harga konsisten ("Rp 3.500").
- **Actual result:** Di daftar produk tertulis "Rp 3.500", di halaman detail tertulis "3,500" tanpa awalan "Rp".
- **Severity:** Low
- **Priority:** P4
- **Evidence path:** `05-Manual-Testing/testing-evidence/IDB-BB-005/step-01-detail-wingko.png`, `05-Manual-Testing/testing-evidence/IDB-BB-005/execution-notes.md`
- **Reporter / date:** RAMA NITTIA KHADIFA / 25 Nov 2026
- **Status:** Open
- **Retest result:** 26 Nov 2026, 08:43 WIB — harga detail Wingko tetap '3,500' tanpa 'Rp' (bukti: step-02-retest-detail-wingko-2026-11-26.png). Status tetap Open.

---

## IDB-BUG-006 — Daftar Produk OJEK tidak tampil untuk tamu

- **Bug ID:** IDB-BUG-006
- **Title:** Daftar Produk OJEK tidak tampil untuk tamu
- **Related Test Case ID:** IDB-BB-015
- **Environment / browser / device:** https://idbotani.com/k/ojek (live), Chrome di laptop tester, sebagai tamu (tanpa login)
- **Precondition:** Halaman Pemesanan Kurir terbuka
- **Steps to reproduce:**
  1. Buka https://idbotani.com/k/ojek sebagai tamu.
  2. Perhatikan formulir: Nama, No. WhatsApp, Alamat Jemput, Alamat Tujuan, Hitung Ongkir, Catatan, "Pesan Sekarang".
  3. Cari bagian "Daftar Produk" atau kolom nama produk dan qty.
- **Expected result:** Ada bagian "Daftar Produk" dengan kolom nama barang dan qty, sesuai teks "Khusus layanan Delivery/Belanja. Isi nama barang dan qty." yang tampil di halaman.
- **Actual result:** Tidak ada bagian "Daftar Produk" maupun kolom nama produk dan qty. Pencarian teks "Produk" di seluruh halaman hanya menemukan menu "Kategori Produk". Widget OJEK di beranda juga tidak memiliki Daftar Produk.
- **Severity:** Low
- **Priority:** P3
- **Evidence path:** `05-Manual-Testing/testing-evidence/IDB-BB-015/execution-notes.md`
- **Reporter / date:** RAMA NITTIA KHADIFA / 26 Nov 2026
- **Status:** Open
- **Catatan:** Perlu dicek saat login — kemungkinan fitur hanya tersedia untuk pengguna login. Kalau begitu, test case IDB-BB-015 perlu diubah precondition-nya menjadi login.
