# Test Plan — IdBotani

**Status:** Draft; belum disetujui pemilik sistem.

## 1. Tujuan
Mengevaluasi fungsi website IdBotani yang diizinkan, mencatat hasil aktual, dan melaporkan defect yang dapat direproduksi.

## 2. Pendekatan
- Black-box: menguji perilaku dari sisi pengguna tanpa melihat kode.
- Grey-box: menguji dengan pengetahuan internal terbatas yang diberikan secara sah, misalnya dokumentasi API atau role akun uji.
- White-box: menguji struktur kode dan jalur logika jika source code serta izin tersedia.
- Automation: menjalankan ulang skenario stabil pada staging atau lingkungan yang disetujui.

## 3. Lingkup kandidat
Navigasi, katalog, kategori, pencarian, autentikasi, keranjang, pesanan, fitur pelapak, dan tracking. Transaksi hanya pada sandbox/data dummy.

## 4. Prasyarat
- Izin tertulis dan ruang lingkup disepakati.
- URL lingkungan dan jadwal pengujian disetujui.
- Akun serta data dummy disediakan bila diperlukan.
- Kontak teknis untuk eskalasi tersedia.
- Browser, versi, dan konfigurasi dicatat.

## 5. Kriteria masuk
Izin, lingkungan, test case, akun, dan data uji siap.

## 6. Kriteria berhenti
Hentikan pengujian jika ada dampak ke pengguna/data produksi, indikasi akses tidak sah, gangguan layanan, atau permintaan pemilik.

## 7. Status test
- PASS: hasil aktual sesuai expected result.
- FAIL: hasil aktual berbeda dari expected result.
- BLOCKED: tidak dapat dijalankan karena izin/akses/prasyarat.
- NOT RUN: belum dijalankan.
- N/A: tidak relevan.

## 8. Deliverables
Test plan, test case, evidence, hasil manual, script dan hasil automation, defect log, catatan wawancara, analisis, dan laporan akhir.

## 9. Batasan
Tidak ada klaim hasil pengujian sebelum eksekusi aktual. White-box dan grey-box bergantung pada akses internal yang diberikan secara resmi.
