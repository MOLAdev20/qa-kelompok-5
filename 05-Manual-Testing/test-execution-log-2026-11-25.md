# Test Execution Log — IdBotani Manual Testing
**Tanggal:** Rabu, 25 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
**Objek uji:** https://idbotani.com/ (Website Idbotani, Live Production, Non-Destructive)
**Repo:** https://github.com/MOLAdev20/qa-kelompok-5 (Kelompok 5, kelas V.714)
**Standar:** ISO/IEC/IEEE 29119 (black-box, sesuai test-plan.md repo)
**Sumber test case:** 04-Test-Cases/test-cases.csv (IDB-BB-001 s.d. IDB-BB-010)

Pengujian interaktif dilakukan 18.41–18.42 WIB lewat cloud browser. Screenshot bukti (PNG) diambil 18.57–18.58 WIB pada halaman yang sama sebagai arsip evidence. Semua pengujian non-destructive: tidak ada pesanan dibuat, tidak ada pembayaran, tidak ada data diubah. Sesi malam (20.43–20.49 WIB): akun uji ramanitiak dibuat atas perintah tester; alur OTP nyata diuji (lihat IDB-BB-006) dan keranjang diuji (IDB-BB-007). Google Login dan Lupa Password masih belum diuji.

## Ringkasan
- **8 PASS, 0 FAIL, 2 BLOCKED** (dari 10 test case: 001–007 dan 010 PASS; 008–009 masih BLOCKED)
- Satu cacat pengiriman OTP (High) + satu masalah keamanan OTP (High) pada IDB-BB-006; dua catatan minor pada IDB-BB-007; satu catatan kosmetik pada IDB-BB-005.

## Hasil per test case

### IDB-BB-001 Homepage — PASS
- **Langkah:** Buka https://idbotani.com/
- **Hasil aktual:** Homepage termuat sempurna: header/logo IDBOTANI, kolom pencarian, menu Kategori/Blog/Forum/Shop/Tentang/Cara Belanja, slider "Buka Toko GRATIS", Layanan OJEK, "Kategori Pilihan" dan "Produk Baru Terpopuler" (Wingko, Sambal Pecel, Dodol, Bawang Merah, dll.) tampil.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-001/step-01-homepage.png
- **Catatan:** Saat pemuatan pertama, gambar slider/produk sempat tampil sebagai kotak abu-abu sesaat, lalu termuat penuh beberapa detik kemudian — jeda pemuatan, bukan kegagalan.

### IDB-BB-002 Navigation — PASS
- **Langkah:** Buka kategori Makanan
- **URL:** https://idbotani.com/produk/kategori/makanan
- **Hasil aktual:** Daftar 3 produk tampil: Wingko Rp 3.500, Sambal Pecel Rp 25.000, Dodol Rp 8.000 — masing-masing dengan penjual, jumlah dilihat, dan tombol "+ Keranjang".
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-002/step-01-kategori-makanan.png

### IDB-BB-003 Search matching — PASS
- **Langkah:** Cari "Wingko" lewat kolom pencarian header
- **URL:** https://idbotani.com/produk?s=Wingko
- **Hasil aktual:** "Terdapat 1 Produk" — Wingko, Rp 3.500, GUDEG SENTHONG WETAN — relevan dengan kata kunci.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-003/step-01-search-wingko.png
- **Catatan:** Kolom pencarian sempat menolak pengisian langsung dan baru bisa diisi setelah diklik terlebih dahulu; pencarian lewat UI tetap berhasil.

### IDB-BB-004 Search unmatched — PASS
- **Langkah:** Cari kata kunci ngasal "zxqvkjngasal123"
- **URL:** https://idbotani.com/produk?s=zxqvkjngasal123
- **Hasil aktual:** "Terdapat 0 Produk" dan pesan "Oops, produk gak ditemukan" + "Coba kata kunci lain untuk menemukan produk yang dicari...".
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-004/step-01-search-tidak-ditemukan.png

### IDB-BB-005 Product detail — PASS
- **Langkah:** Buka halaman detail produk Wingko
- **URL:** https://idbotani.com/produk/detail/wingko-171448
- **Hasil aktual:** Nama "Wingko (Preorder: 2 Hari)", harga 3.500, "Minimal Order 10 Pc", "Stok 10 Pc", "Dilihat 54 kali", penjual Gudeg Senthong Wetan (Verified) dengan tombol Chat, deskripsi "Ada 4 varian rasa: Original, Oreo, Matcha dan Tiramizu", serta bagian Produk Terkait.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-005/step-01-detail-wingko.png
- **Catatan minor:** Harga di halaman detail tertulis "3,500" tanpa awalan "Rp", sedangkan di daftar produk tertulis "Rp 3.500" — inkonsistensi format harga (kosmetik, severity Low).

### IDB-BB-006 Authentication — PASS (tampilan + verifikasi OTP nyata)
- **Langkah:** Buka halaman login https://idbotani.com/auth/login#sign-in (tab Masuk)
- **Hasil aktual:** Tab "Masuk" aktif dan menampilkan form login: teks "Masukkan alamat email atau no Whatsapp anda untuk mengirimkan kode OTP", kolom "Email / No. Handphone", tombol "Masuk", tautan "Lupa Password?", "Belum punya akun? Daftar sekarang!", bagian "metode lainnya" dengan tombol "Google" (merah), dan "Kembali Ke Halaman awal". Semua elemen alur login tampil. Tidak dimasukkan data apa pun.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/step-01-login.png
- **Alur nyata (20.43–20.48 WIB):** Akun uji ramanitiak (ID Konsumen 20261125-0950) didaftarkan lewat tab Daftar. Situs mengklaim kode OTP dikirim ke WA dan email; kode TIDAK PERNAH sampai — tidak ada di WhatsApp, tidak ada di Gmail (Inbox, Spam, All Mail diperiksa; kirim ulang juga tidak sampai). Verifikasi berhasil memakai kode 6 digit yang sudah terisi di kolom form halaman OTP itu sendiri (https://idbotani.com/members/otp). Profil menampilkan "SUKSES - Two Factor Verification". Status Akun masih "UNVERIFIED" (verifikasi identitas terpisah, tidak disentuh).
- **Temuan:** (1) Defect pengiriman OTP — klaim terkirim tapi tidak ada yang sampai, bahkan setelah kirim ulang (High). (2) Kode OTP ditampilkan langsung di halaman verifikasi (High, keamanan). Google Login dan Lupa Password masih BELUM diuji.


### IDB-BB-007 Cart — PASS
- **Langkah:** Login sebagai ramanitiak, buka detail Wingko, klik "+ Keranjang" (kuantitas awal 1), buka halaman keranjang, lalu hapus item dan reload untuk verifikasi akhir
- **URL:** https://idbotani.com/produk/detail/wingko-171448 dan https://idbotani.com/produk/keranjang
- **Hasil aktual:** Popup "Berhasil Ditambahkan"; badge keranjang 0 → 1. Di keranjang Wingko ADA: penjual Gudeg Senthong Wetan, dikirim dari BOGOR, Pre-order 2 Hari, Berat 0 Gram, Status Order "Pending", Rp 3.500 per Pc. Kuantitas tercatat 10 (bukan 1) — situs otomatis menaikkan ke Minimal Order 10 Pc; Subtotal Rp 35.000, Total Rp 35.000. Setelah dihapus dan reload, keranjang TERKONFIRMASI KOSONG di semua tempat dan tombol "Lanjut ke Pembayaran" hilang.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-007/execution-notes.md (file PNG menyusul dari Chrome tester — halaman login tidak bisa di-capture jadi file lewat metode screenshot sesi ini)
- **Temuan minor:** (1) Kuantitas dinaikkan 1 → 10 tanpa pemberitahuan eksplisit saat menambah. (2) Panel mini-keranjang dan ringkasan sempat menampilkan item yang sudah dihapus sampai halaman dimuat ulang.
- **Catatan:** Tidak ada checkout, alamat, pembayaran, atau pesanan yang dibuat — non-destructive.

### IDB-BB-010 Responsive (390x844) — PASS
- **Langkah:** Buka homepage pada viewport 390x844 (emulasi mobile)
- **Hasil aktual:** Layout mobile tampil rapi dan tetap bisa dipakai: kolom pencarian, header "Dikirim ke: Pilih Pengiriman", sapaan "Hai, Pengunjung!", kartu Cashback Rp 0, "Produk Baru Terpopuler" dalam grid 2 kolom (Wingko, Sambal Pecel, dst.), dan bottom navigation Home/Menu/Mall/Video/Masuk. Tidak ada elemen yang terpotong atau bertumpuk.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-010/step-01-mobile-390x844.png

## Tidak dijalankan (sesuai CSV — BLOCKED)
- **IDB-BB-008 Order** — BLOCKED: perlu approved sandbox and test account (pesanan sungguhan tidak boleh dibuat di situs live).
- **IDB-BB-009 Tracking** — BLOCKED: perlu ada pesanan uji (tergantung 008).

## Catatan tentang timeline
- Timeline PDF repo hanya memakai Week 0–8 tanpa tanggal kalender — 25 Nov 2026 tidak bisa dipetakan ke Week tertentu. Modul Auth (Functional QA Auth) dijadwalkan Week 3.
- Repo: test-plan.md berstatus Draft, belum disetujui pemilik sistem; application-profile.md: status izin belum dikonfirmasi, status testing belum dilaksanakan. Sebelum tes hari ini, semua test case di CSV berstatus NOT RUN (kecuali 007–009 BLOCKED).
