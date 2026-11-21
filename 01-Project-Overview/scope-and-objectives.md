# Scope and Objectives

## Tujuan

1. Menyusun rencana pengujian berbasis risiko.
2. Menguji fungsi yang telah disetujui pemilik sistem.
3. Menerapkan black-box, grey-box, dan white-box sesuai ketersediaan akses.
4. Menyiapkan automation test pada lingkungan yang diizinkan.
5. Mendokumentasikan defect, evidence, dan rekomendasi.
6. Membandingkan pendekatan dengan standar serta literatur yang terverifikasi.

## Kandidat in-scope

- Navigasi dan halaman publik.
- Kategori, katalog, detail produk, dan pencarian.
- Validasi autentikasi menggunakan akun uji.
- Keranjang dan pemesanan melalui sandbox/data uji.
- Fitur pelapak dan tracking menggunakan akun/data dummy.

## Out-of-scope tanpa izin khusus

- Penetration testing dan eksploitasi.
- Brute force, stress/load test, dan fuzzing agresif.
- Akses akun atau data pengguna lain.
- Transaksi dan pembayaran nyata.
- Perubahan database produksi.
- White-box pada source code yang tidak diberikan.

## Kriteria

Pengujian hanya dimulai setelah izin, batasan, lingkungan, dan data uji disepakati. Fungsi yang tidak dapat diakses diberi status BLOCKED atau NOT RUN, bukan PASS.
