# Execution Notes — IDB-BB-006 Authentication

- **Test Case ID:** IDB-BB-006 (Black-box, Authentication)
- **Tanggal eksekusi:** Rabu, 25 November 2026, 18.41 WIB
- **Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
- **Lingkungan:** https://idbotani.com/ (Live Production, Non-Destructive)
- **Browser/perangkat:** Cloud browser, desktop Chrome, viewport 1920x1080
- **Langkah:** Buka halaman login https://idbotani.com/auth/login#sign-in (tab Masuk)
- **Hasil aktual:** Tab "Masuk" aktif dan menampilkan form login: teks "Masukkan alamat email atau no Whatsapp anda untuk mengirimkan kode OTP", kolom "Email / No. Handphone", tombol "Masuk", tautan "Lupa Password?", "Belum punya akun? Daftar sekarang!", bagian "metode lainnya" dengan tombol "Google" (merah), dan "Kembali Ke Halaman awal". Semua elemen alur login tampil. Tidak dimasukkan data apa pun.
- **Status:** PASS (tampilan alur login + verifikasi OTP nyata; dengan 2 temuan)
- **Bukti:** step-01-login.png
- **Catatan:** Modal login yang sama ("Masuk ke Akun anda") juga sudah diverifikasi tampil lewat klik "Login" di homepage pada pengujian interaktif 18.41 WIB; screenshot ini adalah halaman auth yang sama pada tab Masuk.
- **Pengujian alur nyata (20.43–20.48 WIB):** Akun uji ramanitiak (ID Konsumen 20261125-0950) didaftarkan lewat tab Daftar dengan email ramanitiak@gmail.com dan No. WA tester. Situs mengklaim kode OTP dikirim ke WA dan email; kode TIDAK PERNAH sampai — tidak ada di WhatsApp, tidak ada di Gmail (Inbox, Spam, dan All Mail sudah diperiksa; kirim ulang juga tidak sampai). Verifikasi akhirnya berhasil memakai kode 6 digit yang sudah terisi di kolom form halaman OTP itu sendiri (https://idbotani.com/members/otp): situs menampilkan kode di halaman. Profil menampilkan "SUKSES - Two Factor Verification" dan "Hai ramanitiak, selamat datang di halaman Biodata diri!". Status Akun masih tertulis "UNVERIFIED" (verifikasi identitas terpisah, bukan OTP — tidak disentuh).
- **Temuan:** (1) Defect pengiriman OTP — klaim terkirim ke WA/email tapi tidak ada yang sampai, bahkan setelah kirim ulang (severity High untuk alur Auth). (2) Kode OTP ditampilkan langsung di halaman verifikasi (severity High, keamanan). Google Login dan Lupa Password masih BELUM diuji.
