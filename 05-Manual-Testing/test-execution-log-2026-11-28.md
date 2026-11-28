# Test Execution Log — IdBotani Manual Testing (Retest Harian)
**Tanggal:** Sabtu, 28 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
**Objek uji:** https://idbotani.com/ (Website Idbotani, Live Production, Non-Destructive)
**Repo:** https://github.com/MOLAdev20/qa-kelompok-5 (Kelompok 5, kelas V.714)
**Standar:** ISO/IEC/IEEE 29119 (black-box, sesuai test-plan.md repo)
**Sumber test case:** 04-Test-Cases/test-cases.csv (IDB-BB-001 s.d. IDB-BB-018)

Retest harian 08.43–08.48 WIB lewat browser Chrome tester. Semua pengujian non-destructive: tidak ada pesanan dibuat, tidak ada pembayaran, tidak ada data diubah. Keranjang ditinggalkan dalam keadaan KOSONG. Kode OTP tidak ditulis di log ini.

## Ringkasan
- **Retest 6 bug terbuka: 0 Fixed, 6 masih reproduksi (IDB-BUG-001 s.d. IDB-BUG-006 tetap Open)**
- **IDB-BB-006 (sisa):** Lupa Password — email reset yang diminta 27 Nov 08.47 WIB TIDAK DITEMUKAN di Gmail setelah ~24 jam (Inbox/Spam/All Mail dicari; email terbaru wondr 28 Nov 02.25 WIB) — keterlambatan kini tersingkir, mendukung IDB-BUG-001 (pengiriman email situs bermasalah); password tidak diubah. Google Login — MASIH PENDING; tab pemilih akun dari 27 Nov sudah tertutup, butuh klik pengguna untuk memilih akun.
- **IDB-BB-015 (re-check saat login):** Daftar Produk TETAP tidak ada di /k/ojek meski sudah login — IDB-BUG-006 tetap Open; login bukan penyebabnya.
- **IDB-BB-008/009:** tetap BLOCKED (tidak ada pesanan uji di situs live).

## Hasil retest per bug

### IDB-BUG-001 Kode OTP tidak terkirim — tetap Open
- **Langkah:** Login ulang sebagai ramanitiak (email ramanitiak@gmail.com), minta kode OTP.
- **Hasil aktual:** OTP diminta lagi 28 Nov 08.44 WIB; kode tetap tampil di halaman OTP (lihat IDB-BUG-002), jadi pengiriman ke WA/email tidak terverifikasi ulang dari sisi situs. Email reset Lupa Password yang diminta 27 Nov 08.47 WIB TIDAK DITEMUKAN di Gmail setelah ~24 jam (Inbox, Spam, All Mail sudah dicari; email terbaru di Inbox wondr "Transaksi berhasil!" 28 Nov 02.25 WIB; Kredivo 27 Nov 08.40 WIB — 7 menit sebelum permintaan reset — tidak ada email IdBotani di antaranya). Keterlambatan kini tersingkir; hasil ini mendukung dugaan pengiriman email situs bermasalah. Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### IDB-BUG-002 Kode OTP ditampilkan di halaman verifikasi — tetap Open
- **Langkah:** Buka halaman https://idbotani.com/auth/login setelah minta OTP.
- **Hasil aktual:** Keenam kotak kode tetap terisi otomatis oleh halaman saat pertama tampil ("Two Factor Code", "Enter the two-factor code sent to your WhatsApp."); klik "Proses Token" → verifikasi berhasil tanpa kode dari channel resmi, login selesai ke https://idbotani.com/main. Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### IDB-BUG-003 Kuantitas otomatis naik ke minimal order — tetap Open
- **Langkah:** Keranjang awal sudah kosong; buka detail Wingko, klik "+ Keranjang" dengan kuantitas 1; buka halaman keranjang.
- **Hasil aktual:** Popup "Berhasil Ditambahkan" tanpa pemberitahuan minimal order; keranjang mencatat Qty. 10 x Rp 3.500, Subtotal Rp 35.000, Total Rp 35.000. Tidak ada pemberitahuan minimal order di halaman keranjang; hanya halaman detail yang menulis "Minimal Order 10 Pc". Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md

### IDB-BUG-004 Mini-keranjang dan ringkasan tidak refresh — tetap Open
- **Langkah:** Hapus Wingko lewat tombol X tanpa reload halaman.
- **Hasil aktual:** Tepat setelah klik, daftar keranjang, ringkasan (Subtotal/Total Rp 35.000 + tombol "Lanjut ke Pembayaran"), panel mini-keranjang, dan badge 1 masih menampilkan item. Sesaat kemudian (masih tanpa reload) area utama keranjang sudah kosong dan badge 0, tetapi panel mini-keranjang MASIH menampilkan Wingko "Qty.10 x3,500". Setelah reload, keranjang benar-benar kosong di semua tempat ("Maaf, Keranjang belanja anda saat ini masih kosong..."). Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md

### IDB-BUG-005 Format harga detail tanpa "Rp" — tetap Open
- **Langkah:** Buka halaman detail Wingko https://idbotani.com/produk/detail/wingko-171448.
- **Hasil aktual:** Harga tetap tertulis "3,500" tanpa awalan "Rp" (di daftar produk tertulis "Rp 3.500"). "Dilihat 65 kali" saat diuji browser (64 di daftar beranda sebelum dibuka), 67 kali pada tangkapan Microlink sesudahnya — penghitung bertambah setiap kunjungan. Status tetap Open.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-005/step-04-retest-detail-wingko-2026-11-28.png

### IDB-BUG-006 Daftar Produk OJEK tidak tampil — tetap Open (re-check saat login)
- **Langkah:** Login sebagai ramanitiak, buka https://idbotani.com/k/ojek.
- **Hasil aktual:** Halaman "Pesan Layanan Kurir" saat login hanya berisi tombol Instant/Regular, field Nama lengkap, No. WhatsApp, Alamat Jemput/Tujuan, tombol "Hitung Ongkir", "Catatan (opsional)", tombol "Pesan Sekarang", dan "History Pemesanan — Belum ada history pemesanan." TIDAK ADA bagian "Daftar Produk" maupun field nama produk/qty. Formulir tidak diisi dan tidak dikirim. Jadi login BUKAN penyebab — fitur memang tidak ada di halaman. Status tetap Open; precondition IDB-BB-015 perlu ditinjau (bukan soal login).
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-015/execution-notes.md

## Tes sisa IDB-BB-006

### Lupa Password — email reset tidak ditemukan setelah ~24 jam
- **Langkah:** Buka Gmail ramanitiak@gmail.com; cari email reset IdBotani yang diminta 27 Nov 08.47 WIB di Inbox, Spam, dan All Mail (pencarian "idbotani" dan "reset password").
- **Hasil aktual:** TIDAK DITEMUKAN. Pencarian "idbotani" hanya menemukan undangan GitHub lama 21 Nov; "reset password" tidak ada hasil dari IdBotani (hasil teratas dari layanan lain, mis. Soundcore 24 Sep 2026). Spam hanya 4 email, tidak ada dari IdBotani; terbaru 18 Nov 2026. Email terbaru di Inbox: wondr "Transaksi berhasil!" 28 Nov 02.25 WIB, lalu wondr "Top-up berhasil!" 27 Nov 17.41 WIB, lalu Kredivo 27 Nov 08.40 WIB. Tautan reset tidak diklik, password tidak diubah. Keterlambatan pengiriman kini tersingkir — mendukung IDB-BUG-001; pertimbangkan defect terpisah untuk Lupa Password bila perlu.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### Google Login — MASIH PENDING (tab pemilih akun sudah tertutup)
- **Langkah:** Periksa tab pemilih akun Google dari 27 Nov ("Login dengan Google" — "Lanjutkan ke idbotani.com").
- **Hasil aktual:** Tab SUDAH TERTUTUP — jendela browser diawali tanpa tab; saat pemeriksaan hanya ada tab IdBotani dan tab Gmail. TIDAK ada akun yang dipilih. Uji Google Login tetap pending klik pengguna.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

## Cek repo
- **Tanggal cek:** 28 Nov 2026, 08.42 WIB (GitHub API).
- **Hasil:** Tidak ada commit baru sejak 27 Nov 2026 02.02 UTC (commit terakhir "Update bug report + evidence index retest 27 Nov 2026 — RAMA NITTIA KHADIFA", sha ebe2692, oleh Ramanitia Khadifa). Semua 7 commit terakhir dari 27 Nov, oleh Ramanitia Khadifa. Commit anggota kelompok lain terakhir: Sabilul Hikam, 21 Nov 2026 ("update: change project information in readme.md"). Tidak ada progres baru dari anggota kelompok hari ini.

## Tidak dijalankan (sesuai CSV — BLOCKED)
- **IDB-BB-008 Order** — BLOCKED: perlu approved sandbox and test account (pesanan sungguhan tidak boleh dibuat di situs live).
- **IDB-BB-009 Tracking** — BLOCKED: perlu ada pesanan uji (tergantung 008).

## Catatan bukti
- Screenshot retest IDB-BB-005 hari ini diambil lewat Microlink (step-04-retest-detail-wingko-2026-11-28.png).
- Halaman yang butuh login (keranjang IDB-BB-007, /k/ojek IDB-BB-015) tidak bisa di-capture jadi PNG lewat Microlink — tidak ada bukti PNG baru untuk keduanya hari ini; hasil dicatat di execution-notes masing-masing. Bila PNG diperlukan, tester perlu mengambilnya sendiri dari Chrome.

## Langkah selanjutnya
1. Tester memilih akun Google di pemilih akun untuk menyelesaikan uji Google Login (IDB-BB-006), atau menyampaikan bila tidak jadi diuji.
2. Lupa Password: email reset tidak sampai setelah ~24 jam — dukung IDB-BUG-001; pertimbangkan defect terpisah untuk Lupa Password (atau perluasan BUG-001) pada laporan akhir.
3. Retest harian berikutnya (29 Nov): ulangi 6 bug terbuka; bila ada yang Fixed, ubah status di bug report + evidence-index + log dan upload ke repo.
