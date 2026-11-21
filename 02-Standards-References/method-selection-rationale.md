# Rationale for Testing Method Selection — IdBotani

## Tujuan
Memilih kombinasi metode pengujian yang realistis, dapat dipertanggungjawabkan, dan sesuai akses yang diberikan pengelola IdBotani.

## Metode yang dipilih

### Black-box testing
Dipilih untuk memeriksa perilaku website dari perspektif pengguna berdasarkan input dan output tanpa memerlukan source code. Cocok untuk skenario navigasi, pencarian, validasi formulir, katalog, keranjang, dan alur akun yang disediakan untuk pengujian.

### Grey-box testing
Dipilih apabila pengelola memberi informasi internal terbatas, seperti dokumentasi API, diagram arsitektur tingkat tinggi, atau akun dengan role uji. Pengetahuan tersebut membantu menyusun pengujian integrasi dan validasi alur tanpa mengasumsikan akses penuh ke source code atau database.

### White-box testing
Dipilih hanya jika pemilik memberikan source code dan izin untuk memeriksanya. Metode ini dapat digunakan untuk menilai jalur logika, kondisi, unit, dan cakupan kode. Jika source code tidak tersedia, laporkan sebagai BLOCKED/not feasible; jangan mengarang hasil white-box.

### Automation testing
Dipilih untuk mengulang skenario yang stabil, terutama smoke test dan regression test pada lingkungan yang disetujui. Otomatisasi mengurangi pekerjaan pengulangan manual dan membantu mendeteksi regresi. Tidak semua skenario perlu diotomatisasi; eksplorasi, usability, dan skenario yang sering berubah tetap memerlukan penilaian manusia.

## Keterkaitan dengan standar dan literatur
- ISO/IEC/IEEE 29119-1:2022 menjadi rujukan konsep umum pengujian.
- ISO/IEC/IEEE 29119-2:2021 dapat menjadi rujukan proses jika dosen menyetujui pengecualian tahun publikasi.
- ISO/IEC 25010:2023 menjadi dasar pemilihan karakteristik kualitas produk.
- Banjaranahor & Istiyowati (2022), Jurnal RESTI SINTA 2, menjadi referensi pendukung automation smoke/regression testing.
- Artikel lain pada literature-review-2022-2026.md masih memerlukan verifikasi akreditasi SINTA jika belum dinyatakan jelas.

## Batasan
Metode bukan izin untuk melakukan pengujian. Semua pengujian pada sistem nyata harus memiliki persetujuan tertulis, batas ruang lingkup, akun/data uji, dan lingkungan aman. Jangan melakukan transaksi nyata, mengubah data pengguna, mengakses endpoint privat, atau menjalankan uji beban/keamanan tanpa izin eksplisit.
