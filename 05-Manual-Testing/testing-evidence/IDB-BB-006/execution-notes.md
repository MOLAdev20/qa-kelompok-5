# Execution Notes — IDB-BB-006 Authentication

- **Test Case ID:** IDB-BB-006 (Black-box, Authentication)
- **Tanggal eksekusi:** Rabu, 25 November 2026, 18.41 WIB
- **Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
- **Lingkungan:** https://idbotani.com/ (Live Production, Non-Destructive)
- **Browser/perangkat:** Cloud browser, desktop Chrome, viewport 1920x1080
- **Langkah:** Buka halaman login https://idbotani.com/auth/login#sign-in (tab Masuk)
- **Hasil aktual:** Tab "Masuk" aktif dan menampilkan form login: teks "Masukkan alamat email atau no Whatsapp anda untuk mengirimkan kode OTP", kolom "Email / No. Handphone", tombol "Masuk", tautan "Lupa Password?", "Belum punya akun? Daftar sekarang!", bagian "metode lainnya" dengan tombol "Google" (merah), dan "Kembali Ke Halaman awal". Semua elemen alur login tampil. Tidak dimasukkan data apa pun.
- **Status:** PASS (tampilan alur login)
- **Bukti:** step-01-login.png
- **Catatan:** Modal login yang sama ("Masuk ke Akun anda") juga sudah diverifikasi tampil lewat klik "Login" di homepage pada pengujian interaktif 18.41 WIB; screenshot ini adalah halaman auth yang sama pada tab Masuk.
- **Batasan:** Uji OTP / Google Login / Lupa Password yang sebenarnya TIDAK dijalankan — butuh akun/email/WA dan akan memicu OTP sungguhan di situs live. Perlu akun uji yang disetujui atau arahan kelompok.
