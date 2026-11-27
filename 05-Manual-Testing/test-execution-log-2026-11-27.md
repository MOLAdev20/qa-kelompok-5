# Test Execution Log — IdBotani Manual Testing (Retest Harian)
**Tanggal:** Jumat, 27 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
**Objek uji:** https://idbotani.com/ (Website Idbotani, Live Production, Non-Destructive)
**Repo:** https://github.com/MOLAdev20/qa-kelompok-5 (Kelompok 5, kelas V.714)
**Standar:** ISO/IEC/IEEE 29119 (black-box, sesuai test-plan.md repo)
**Sumber test case:** 04-Test-Cases/test-cases.csv (IDB-BB-001 s.d. IDB-BB-018)

Retest harian 08.43–08.49 WIB lewat browser Chrome tester. Semua pengujian non-destructive: tidak ada pesanan dibuat, tidak ada pembayaran, tidak ada data diubah. Keranjang ditinggalkan dalam keadaan KOSONG. Kode OTP tidak ditulis di log ini.

## Ringkasan
- **Retest 6 bug terbuka: 0 Fixed, 6 masih reproduksi (IDB-BUG-001 s.d. IDB-BUG-006 tetap Open)**
- **IDB-BB-006 (sisa):** Lupa Password — permintaan reset terkirim lagi 08.47 WIB ("Permintaan terkirim!, Cek email anda"); email reset TIDAK DITEMUKAN di Gmail per 08.48 WIB (Inbox/Spam/All Mail dicari; ~1 menit setelah permintaan — keterlambatan belum bisa disingkirkan, cek ulang besok); password tidak diubah. Google Login — MASIH PENDING, pemilih akun Google terbuka di tab, butuh klik pengguna.
- **IDB-BB-015 (re-check saat login):** Daftar Produk TETAP tidak ada di /k/ojek meski sudah login — IDB-BUG-006 tetap Open; login bukan penyebabnya.
- **IDB-BB-008/009:** tetap BLOCKED (tidak ada pesanan uji di situs live).

## Hasil retest per bug

### IDB-BUG-001 Kode OTP tidak terkirim — tetap Open
- **Langkah:** Login ulang sebagai ramanitiak (email ramanitiak@gmail.com), minta kode OTP.
- **Hasil aktual:** OTP diminta lagi 27 Nov 08.44 WIB; kode tetap tampil di halaman OTP (lihat IDB-BUG-002), jadi pengiriman ke WA/email tidak terverifikasi ulang dari sisi situs. Email reset Lupa Password yang diminta 08.47 WIB tidak ditemukan di Gmail per 08.48 WIB (Inbox, Spam, All Mail sudah dicari; email terbaru di Inbox adalah Kredivo 08.40 WIB) — konsisten dengan dugaan pengiriman email situs bermasalah, tapi jeda baru ~1 menit sehingga keterlambatan belum bisa disingkirkan; cek ulang 28 Nov.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### IDB-BUG-002 Kode OTP ditampilkan di halaman verifikasi — tetap Open
- **Langkah:** Buka halaman https://idbotani.com/members/otp setelah minta OTP.
- **Hasil aktual:** Keenam kotak kode tetap terisi otomatis oleh halaman saat pertama tampil ("Two Factor Code", "Enter the two-factor code sent to your WhatsApp."); klik "Proses Token" → verifikasi berhasil tanpa kode dari channel resmi, login selesai ke https://idbotani.com/main. Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### IDB-BUG-003 Kuantitas otomatis naik ke minimal order — tetap Open
- **Langkah:** Keranjang awal sudah kosong (dikonfirmasi setelah reload); buka detail Wingko, klik "+ Keranjang" dengan kuantitas 1; buka halaman keranjang.
- **Hasil aktual:** Popup "Berhasil Ditambahkan"; mini-cart sudah menulis "Qty.10 x3,500"; keranjang mencatat Qty. 10 x Rp 3.500, Subtotal Rp 35.000, Total 35.000. Tidak ada pemberitahuan minimal order di halaman keranjang; hanya halaman detail yang menulis "Minimal Order 10 Pc". Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-007/step-02-retest-keranjang-2026-11-27.png, 05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md

### IDB-BUG-004 Mini-keranjang dan ringkasan tidak refresh — tetap Open
- **Langkah:** Hapus Wingko lewat tombol X tanpa reload halaman.
- **Hasil aktual:** Baris item hilang dan badge keranjang 1 → 0, tetapi kotak ringkasan MASIH menampilkan Status Order Pending, Berat 0 Gram, Subtotal Rp 35.000, Total 35.000, dan tombol "Lanjut ke Pembayaran" MASIH ada. Panel mini-cart menampilkan "Wah keranjang belanjaanmu kosong!" tetapi daftar di halaman masih memuat entri Wingko "Qty.10 x3,500" yang kedaluwarsa. Setelah reload, keranjang benar-benar kosong ("Maaf, Keranjang belanja anda saat ini masih kosong..."). Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md

### IDB-BUG-005 Format harga detail tanpa "Rp" — tetap Open
- **Langkah:** Buka halaman detail Wingko https://idbotani.com/produk/detail/wingko-171448.
- **Hasil aktual:** Harga tetap tertulis "3,500" tanpa awalan "Rp" (di daftar produk tertulis "Rp 3.500"). "Dilihat 62 kali" saat pertama dibuka (61 di daftar beranda), menjadi "Dilihat 63 kali" saat dibuka lagi — penghitung bertambah setiap kunjungan. Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-005/step-03-retest-detail-wingko-2026-11-27.png

### IDB-BUG-006 Daftar Produk OJEK tidak tampil — tetap Open (re-check saat login)
- **Langkah:** Login sebagai ramanitiak, buka https://idbotani.com/k/ojek.
- **Hasil aktual:** Halaman "Pesan Layanan Kurir" saat login hanya berisi tombol Instant/Regular, field Nama lengkap (terisi otomatis ramanitiak), No. WhatsApp (terisi otomatis), Alamat Jemput/Tujuan (readonly), tombol "Hitung Ongkir", "Catatan (opsional)", tombol "Pesan Sekarang", dan "History Pemesanan — Belum ada history pemesanan." TIDAK ADA bagian "Daftar Produk" maupun field nama produk/qty. Formulir tidak diisi dan tidak dikirim. Jadi login BUKAN penyebab — fitur memang tidak ada di halaman. Status tetap Open; precondition IDB-BB-015 perlu ditinjau (bukan soal login).
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-015/step-02-ojek-login-2026-11-27.png, 05-Manual-Testing/testing-evidence/IDB-BB-015/execution-notes.md

## Tes sisa IDB-BB-006

### Lupa Password — permintaan terkirim, email reset tidak ditemukan (cek ulang besok)
- **Langkah:** Logout, klik "Lupa Password?" di modal login, masukkan ramanitiak@gmail.com, kirim permintaan.
- **Hasil aktual:** Pesan "Permintaan terkirim!, Cek email anda." (27 Nov 08.47 WIB). Tautan reset tidak diklik, password tidak diubah. Gmail ramanitiak@gmail.com dibuka langsung 08.48 WIB (Kotak Masuk 3.592): email terbaru Kredivo 08.40 WIB; pencarian "idbotani" hanya menemukan undangan GitHub lama 21 Nov; Spam (4 email) dan All Mail (50 teratas) tidak berisi email reset IdBotani; pencarian "reset password" hanya menampilkan email lama tidak terkait. Jeda baru ~1 menit — keterlambatan pengiriman belum bisa disingkirkan; cek ulang pada retest 28 Nov.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### Google Login — MASIH PENDING (butuh klik pengguna)
- **Langkah:** Klik tombol "Google" di halaman login.
- **Hasil aktual:** Pemilih akun Google terbuka (accounts.google.com, "Login dengan Google" — "Pilih akun", "Lanjutkan ke idbotani.com") menampilkan akun ramanitiak@gmail.com dan pilihan "Gunakan akun lain". TIDAK ada akun yang dipilih; tab pemilih akun dibiarkan terbuka (tab t1) agar tester melanjutkan sendiri.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

## Cek repo
- **Tanggal cek:** 27 Nov 2026, 08.42 WIB (GitHub API).
- **Hasil:** Tidak ada commit baru sejak 26 Nov 2026 12.00 UTC (commit terakhir "Add testing evidence IDB-BB-018 — RAMA NITTIA KHADIFA", sha da6ddd5, oleh Ramanitia Khadifa). Semua 10 commit terakhir dari 26 Nov, oleh Ramanitia Khadifa. Commit anggota kelompok lain terakhir: Sabilul Hikam, 21 Nov 2026 ("update: change project information in readme.md"). Tidak ada progres baru dari anggota kelompok hari ini.

## Tidak dijalankan (sesuai CSV — BLOCKED)
- **IDB-BB-008 Order** — BLOCKED: perlu approved sandbox and test account (pesanan sungguhan tidak boleh dibuat di situs live).
- **IDB-BB-009 Tracking** — BLOCKED: perlu ada pesanan uji (tergantung 008).

## Langkah selanjutnya
1. Tester memilih akun Google di tab pemilih akun yang masih terbuka untuk menyelesaikan uji Google Login (IDB-BB-006), atau menyampaikan bila tidak jadi diuji.
2. Cek ulang Gmail 28 Nov: apakah email reset password IdBotani (diminta 27 Nov 08.47 WIB) akhirnya sampai — bila tetap tidak ada setelah >24 jam, dukung IDB-BUG-001 (pengiriman email situs bermasalah) dan pertimbangkan defect terpisah untuk Lupa Password.
3. Retest harian berikutnya (28 Nov): ulangi 6 bug terbuka; bila ada yang Fixed, ubah status di bug report + evidence-index + log dan upload ke repo.
