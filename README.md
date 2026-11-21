# Software Quality Assurance & Testing — IdBotani

Repository ini berisi dokumentasi proyek pengujian kualitas perangkat lunak terhadap website [IdBotani](https://idbotani.com/).

## Status proyek

**Tahap:** Persiapan dan validasi objek penelitian.

Dokumen dan test case awal di repository ini merupakan rancangan. Hasil PASS/FAIL, defect, bukti screenshot, hasil automation, serta wawancara hanya akan dicatat setelah kegiatan benar-benar dilaksanakan.

## Objek penelitian

- **Nama:** IdBotani
- **URL:** https://idbotani.com/
- **Jenis:** Website marketplace/e-commerce
- **Ruang lingkup awal:** halaman publik, katalog, kategori, pencarian, autentikasi, keranjang, pesanan, toko/pelapak, dan pelacakan pesanan.
- **Catatan:** akses ke akun, transaksi, API, source code, database, dan pengujian keamanan memerlukan izin eksplisit dari pengelola.

## Struktur repository

| Direktori | Isi |
|---|---|
| `01-Project-Overview/` | Latar belakang, profil aplikasi, tujuan, dan ruang lingkup |
| `02-Standards-References/` | ISO/IEC 29119, ISO/IEC 25010:2023, IEEE, dan jurnal |
| `03-QA-Planning/` | Test plan, strategi, jadwal, dan pembagian tugas |
| `04-Test-Cases/` | Skenario, test case, dan test data |
| `05-Manual-Testing/` | Black-box, grey-box, white-box, dan evidence |
| `06-Automation-Testing/` | Script, konfigurasi, dan hasil automation |
| `07-Bug-Reports/` | Defect report, severity, priority, dan indeks evidence |
| `08-Interview/` | Profil narasumber, pertanyaan, transkrip, dan bukti |
| `09-Final-Report/` | Ringkasan hasil, analisis, kesimpulan, dan rekomendasi |

## Acuan pengujian

- **ISO/IEC/IEEE 29119 series:** referensi proses dan dokumentasi software testing. Edisi dan bagian standar yang dipakai akan dicatat setelah diverifikasi.
- **ISO/IEC 25010:2023:** model kualitas produk perangkat lunak.
- **IEEE dan jurnal internasional:** referensi pendukung yang relevansi, tahun, dan metadata bibliografinya akan diverifikasi sebelum digunakan.

Standar sistem manajemen keamanan informasi seperti ISO/IEC 27001 tidak diperlakukan sebagai pengganti standar proses software testing.

## Prinsip pelaksanaan

1. Memperoleh izin pengelola sebelum menguji fungsi yang membutuhkan akun atau mengubah data.
2. Menggunakan akun dan data dummy yang disetujui.
3. Tidak melakukan pengujian destruktif, brute force, beban tinggi, bypass autentikasi, atau akses data pengguna lain.
4. White-box testing hanya dilakukan jika source code dan izin tersedia.
5. Grey-box testing hanya dilakukan jika dokumentasi internal terbatas diberikan secara sah.
6. Setiap hasil harus memiliki tanggal, lingkungan, langkah, expected result, actual result, status, dan bukti yang sesuai.
7. Screenshot dan laporan bug dipisahkan; setiap defect merujuk ke Test Case ID dan evidence.
8. Wawancara hanya dinyatakan terlaksana setelah narasumber QA/tester dengan pengalaman minimal tiga tahun benar-benar diwawancarai.

## Status pekerjaan

- [x] Repository privat dibuat.
- [x] Objek penelitian awal ditetapkan: IdBotani.
- [ ] Validasi skala organisasi, pengelola, dan izin penelitian.
- [ ] Finalisasi standar dan referensi tahun 2022–2026.
- [ ] Test plan dan test case disetujui.
- [ ] Manual testing.
- [ ] Automation testing.
- [ ] Wawancara QA/tester.
- [ ] Analisis defect dan laporan akhir.

## Kontak dan sumber

- Website IdBotani: https://idbotani.com/

---

