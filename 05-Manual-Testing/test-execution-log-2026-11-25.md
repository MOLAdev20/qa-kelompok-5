# Test Execution Log — IdBotani Manual Testing
**Tanggal:** Rabu, 25 November 2026
**Tester:** RAMA NITTIA KHADIFA — 231011403642 — Functional QA Auth (Kelompok 5)
**Objek uji:** https://idbotani.com/ (Website Idbotani, Live Production, Non-Destructive)
**Repo:** https://github.com/MOLAdev20/qa-kelompok-5 (Kelompok 5, kelas V.714)
**Standar:** ISO/IEC/IEEE 29119 (black-box, sesuai test-plan.md repo)
**Sumber test case:** 04-Test-Cases/test-cases.csv (IDB-BB-001 s.d. IDB-BB-010)

Pengujian interaktif dilakukan 18.41–18.42 WIB lewat cloud browser. Screenshot bukti (PNG) diambil 18.57–18.58 WIB pada halaman yang sama sebagai arsip evidence. Semua pengujian non-destructive: tidak ada pesanan dibuat, tidak ada pembayaran, tidak ada data diubah. Pada uji login tidak dimasukkan email/nomor apa pun, tidak dipicu OTP, tidak dicoba login Google maupun Lupa Password.

## Ringkasan
- **7 PASS, 0 FAIL, 0 BLOCKED** (dari 7 test case yang dijalankan)
- Tidak ditemukan cacat fungsional. Dua catatan minor (kosmetik).

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

### IDB-BB-006 Authentication — PASS (tampilan alur login)
- **Langkah:** Buka halaman login https://idbotani.com/auth/login#sign-in (tab Masuk)
- **Hasil aktual:** Tab "Masuk" aktif dan menampilkan form login: teks "Masukkan alamat email atau no Whatsapp anda untuk mengirimkan kode OTP", kolom "Email / No. Handphone", tombol "Masuk", tautan "Lupa Password?", "Belum punya akun? Daftar sekarang!", bagian "metode lainnya" dengan tombol "Google" (merah), dan "Kembali Ke Halaman awal". Semua elemen alur login tampil. Tidak dimasukkan data apa pun.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-006/step-01-login.png
- **Batasan:** Uji OTP / Google Login / Lupa Password yang sebenarnya TIDAK dijalankan — butuh akun/email/WA dan akan memicu OTP sungguhan di situs live. Perlu akun uji yang disetujui atau arahan kelompok.

### IDB-BB-010 Responsive (390x844) — PASS
- **Langkah:** Buka homepage pada viewport 390x844 (emulasi mobile)
- **Hasil aktual:** Layout mobile tampil rapi dan tetap bisa dipakai: kolom pencarian, header "Dikirim ke: Pilih Pengiriman", sapaan "Hai, Pengunjung!", kartu Cashback Rp 0, "Produk Baru Terpopuler" dalam grid 2 kolom (Wingko, Sambal Pecel, dst.), dan bottom navigation Home/Menu/Mall/Video/Masuk. Tidak ada elemen yang terpotong atau bertumpuk.
- **Bukti:** 05-Manual-Testing/testing-evidence/IDB-BB-010/step-01-mobile-390x844.png

## Tidak dijalankan (sesuai CSV — BLOCKED)
- **IDB-BB-007 Cart** — BLOCKED: perlu approved test account and permission.
- **IDB-BB-008 Order** — BLOCKED: perlu approved sandbox and test account.
- **IDB-BB-009 Tracking** — BLOCKED: perlu approved test account.

## Catatan tentang timeline
- Timeline PDF repo hanya memakai Week 0–8 tanpa tanggal kalender — 25 Nov 2026 tidak bisa dipetakan ke Week tertentu. Modul Auth (Functional QA Auth) dijadwalkan Week 3.
- Repo: test-plan.md berstatus Draft, belum disetujui pemilik sistem; application-profile.md: status izin belum dikonfirmasi, status testing belum dilaksanakan. Sebelum tes hari ini, semua test case di CSV berstatus NOT RUN (kecuali 007–009 BLOCKED).
