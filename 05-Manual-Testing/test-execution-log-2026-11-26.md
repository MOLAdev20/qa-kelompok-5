# Test Execution Log — IdBotani Manual Testing (Retest Harian)
**Tanggal:** Kamis, 26 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
**Objek uji:** https://idbotani.com/ (Website Idbotani, Live Production, Non-Destructive)
**Repo:** https://github.com/MOLAdev20/qa-kelompok-5 (Kelompok 5, kelas V.714)
**Standar:** ISO/IEC/IEEE 29119 (black-box, sesuai test-plan.md repo)
**Sumber test case:** 04-Test-Cases/test-cases.csv (IDB-BB-001 s.d. IDB-BB-010)

Retest harian 08.43–08.49 WIB lewat browser Chrome tester. Semua pengujian non-destructive: tidak ada pesanan dibuat, tidak ada pembayaran, tidak ada data diubah. Keranjang dikosongkan kembali setelah pengujian (sisa Wingko Qty 10 dari pengujian sebelumnya sudah dihapus; setelah reload keranjang terkonfirmasi kosong).

## Ringkasan
- **Retest 5 bug terbuka: 0 Fixed, 5 masih reproduksi (IDB-BUG-001 s.d. IDB-BUG-005 tetap Open)**
- **IDB-BB-006 (sisa):** Lupa Password — permintaan reset terkirim ("Permintaan terkirim!, Cek email anda"); kedatangan email reset di Gmail masih menunggu pengecekan. Google Login — PENDING, butuh klik pengguna di pemilih akun Google.
- **IDB-BB-008/009:** tetap BLOCKED (tidak ada pesanan uji di situs live).

## Hasil retest per bug

### IDB-BUG-001 Kode OTP tidak terkirim — tetap Open
- **Langkah:** Login ulang sebagai ramanitiak (email ramanitiak@gmail.com), minta kode OTP.
- **Hasil aktual:** OTP diminta lagi 26 Nov 08.45 WIB; kode tetap tampil di halaman OTP (lihat IDB-BUG-002), jadi pengiriman ke WA/email tidak terverifikasi ulang dari sisi situs. Kedatangan email reset/Lupa Password di Gmail masih menunggu pengecekan.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### IDB-BUG-002 Kode OTP ditampilkan di halaman verifikasi — tetap Open
- **Langkah:** Buka halaman https://idbotani.com/members/otp setelah minta OTP.
- **Hasil aktual:** Keenam kotak kode tetap terisi otomatis oleh halaman saat pertama tampil; verifikasi berhasil tanpa kode dari channel resmi. Login sebagai ramanitiak berhasil.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### IDB-BUG-003 Kuantitas otomatis naik ke minimal order — tetap Open
- **Langkah:** Keranjang dikosongkan dulu; buka detail Wingko, klik "+ Keranjang" dengan kuantitas 1; buka halaman keranjang.
- **Hasil aktual:** Popup "Berhasil Ditambahkan"; keranjang mencatat Qty 10 (bukan 1), Subtotal/Total Rp 35.000. Tidak ada pemberitahuan soal minimal order saat menambah maupun di halaman keranjang.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md

### IDB-BUG-004 Mini-keranjang dan ringkasan tidak refresh — tetap Open
- **Langkah:** Hapus Wingko lewat tombol X tanpa reload halaman.
- **Hasil aktual:** Baris item utama hilang dan badge keranjang header menjadi 0, tetapi kotak ringkasan masih menampilkan Subtotal Rp 35.000, Total Rp 35.000, Berat 0 Gram, Status Pending, dan tombol "Lanjut ke Pembayaran". Panel mini-keranjang: dropdown header sudah menampilkan "Wah keranjang belanjaanmu kosong!", tetapi entri Wingko (Qty. 10 x 3.500) masih tercantum di panel geser. Setelah reload, keranjang benar-benar kosong.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md

### IDB-BUG-005 Format harga detail tanpa "Rp" — tetap Open
- **Langkah:** Buka halaman detail Wingko https://idbotani.com/produk/detail/wingko-171448.
- **Hasil aktual:** Harga tetap tertulis "3,500" tanpa awalan "Rp" (di daftar produk tertulis "Rp 3.500"). "Dilihat 59 kali" (sebelumnya 54).
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-005/step-02-retest-detail-wingko-2026-11-26.png

## Tes sisa IDB-BB-006

### Lupa Password — permintaan terkirim, email belum terverifikasi
- **Langkah:** Logout, klik "Lupa Password?" di halaman login, masukkan ramanitiak@gmail.com, kirim permintaan.
- **Hasil aktual:** Pesan "Permintaan terkirim!, Cek email anda." Tautan reset di email tidak diklik dan password baru tidak diset. Kedatangan email reset di Gmail TIDAK BISA DICEK 26 Nov 09.00 WIB: pembukaan mail.google.com di browser menunggu persetujuan pengguna yang tidak terjawab pada run terjadwal ini (Gmail connector tidak terhubung ke Muse). Pengecekan diulang pada run berikutnya setelah persetujuan diberikan, atau dicek langsung oleh tester.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

### Google Login — PENDING (butuh klik pengguna)
- **Langkah:** Klik tombol "Google" di bagian metode lainnya pada halaman login.
- **Hasil aktual:** Halaman beralih ke pemilih akun Google ("Login dengan Google" — "Pilih akun", "Lanjutkan ke idbotani.com") yang menampilkan akun ramanitiak@gmail.com dan pilihan "Gunakan akun lain". Pengujian berhenti di sini sesuai batasan — tidak ada akun yang dipilih dan tidak ada login lewat Google. Tab dibiarkan terbuka di halaman pemilih akun agar tester dapat melanjutkan sendiri.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/execution-notes.md

## Cek repo
- **Tanggal cek:** 26 Nov 2026, 08.42 WIB (GitHub API).
- **Hasil:** Tidak ada commit baru sejak 25 Nov 2026 21.11 WIB (commit terakhir "Update evidence index with 5 confirmed defects — RAMA NITTIA KHADIFA", sha 6b2f4fe). Semua 19 commit terakhir di atasnya juga dari 25 Nov, oleh Ramanitia Khadifa. Commit anggota kelompok lain terakhir: Sabilul Hikam, 21 Nov 2026 ("update: change project information in readme.md"). Tidak ada progres baru dari anggota kelompok hari ini.

## Tidak dijalankan (sesuai CSV — BLOCKED)
- **IDB-BB-008 Order** — BLOCKED: perlu approved sandbox and test account (pesanan sungguhan tidak boleh dibuat di situs live).
- **IDB-BB-009 Tracking** — BLOCKED: perlu ada pesanan uji (tergantung 008).

## Langkah selanjutnya
1. Tester memilih akun Google di tab pemilih akun yang masih terbuka untuk menyelesaikan uji Google Login (IDB-BB-006), atau menyampaikan bila tidak jadi diuji.
2. Periksa Gmail ramanitiak@gmail.com: apakah email reset password IdBotani sampai (dan apakah ada email OTP dari login 26 Nov) — pengecekan via browser 26 Nov 09.00 WIB TERBLOKIR karena pembukaan mail.google.com menunggu persetujuan pengguna yang tidak terjawab pada run terjadwal ini; diulang pada run berikutnya setelah persetujuan diberikan, atau dicek langsung oleh tester. Hasilnya dicatat menyusul di execution-notes IDB-BB-006.
3. Retest harian berikutnya (27 Nov): ulangi 5 bug terbuka; bila ada yang Fixed, ubah status di bug report + evidence-index + log dan upload ke repo.
