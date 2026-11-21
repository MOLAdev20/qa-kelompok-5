# ISO/IEC 25010:2023 — Product Quality Model

## Tujuan penggunaan
ISO/IEC 25010:2023 mendefinisikan model kualitas produk untuk produk TIK dan perangkat lunak. Model ini memiliki sembilan karakteristik yang dapat digunakan sebagai referensi untuk menetapkan, mengukur, dan mengevaluasi kualitas produk.

Sumber resmi: https://www.iso.org/standard/78176.html  
Edisi: 2  
Tanggal publikasi: November 2023

## Sembilan karakteristik dan pemetaan awal IdBotani

| Karakteristik | Makna evaluasi pada konteks website | Bukti/metode yang mungkin |
|---|---|---|
| Functional suitability | Fungsi katalog, pencarian, akun, keranjang, dan pesanan sesuai kebutuhan | Test case fungsional black-box |
| Performance efficiency | Waktu respons dan penggunaan sumber daya pada skenario yang disetujui | Pengukuran non-destruktif pada staging |
| Compatibility | Perilaku pada browser/perangkat dan koeksistensi dengan lingkungan terkait | Uji lintas browser/perangkat |
| Interaction capability | Kemudahan pengguna memahami dan berinteraksi dengan antarmuka | Skenario usability dan observasi |
| Reliability | Konsistensi fungsi dan pemulihan dari gangguan dalam kondisi uji | Pengulangan skenario dan pencatatan kegagalan |
| Security | Perlindungan akun, sesi, dan informasi dari akses tidak sah | Review terbatas dan pengujian berizin |
| Maintainability | Kemudahan perubahan, analisis, dan pengujian struktur perangkat lunak | White-box/code review jika source code diberikan |
| Flexibility | Kemampuan adaptasi terhadap lingkungan dan kebutuhan yang berubah | Uji konfigurasi/lingkungan yang tersedia |
| Safety | Pembatasan risiko dampak sistem terhadap manusia, bisnis, aset, atau lingkungan | Analisis risiko dan skenario dampak relevan |

Pemetaan ini adalah rencana awal, bukan klaim bahwa seluruh karakteristik dapat diuji dari akses publik. Sebagian memerlukan source code, informasi arsitektur, akses staging, metrik, atau keterlibatan pengelola. Subkarakteristik dan ukuran final harus dicocokkan dengan teks resmi ISO/IEC 25010:2023 yang dimiliki secara sah.

## Alasan memilih standar
- Versi 2023 berada dalam rentang tahun 2022–2026.
- Model ini ditujukan untuk spesifikasi dan evaluasi kualitas produk perangkat lunak.
- Sembilan karakteristik membantu tim memilih kualitas yang relevan, bukan hanya menguji apakah tombol berfungsi.
- Hasilnya dapat dipakai untuk menyusun tujuan pengujian, indikator, kriteria penerimaan, dan rekomendasi.

## Referensi
International Organization for Standardization. (2023). *ISO/IEC 25010:2023 Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*. https://www.iso.org/standard/78176.html
