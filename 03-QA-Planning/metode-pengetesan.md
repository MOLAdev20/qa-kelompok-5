# Metode Pengetesan — IdBotani

**Status:** Draft; mengacu pada standar di `02-Standards-References/`.
Ringkasan rencana ini juga tampil di halaman depan `README.md` (bagian 🧪 Plan Pengetesan).

## 1. Acuan standar

| Standar | Edisi | Peran dalam pengetesan | Catatan |
| --- | --- | --- | --- |
| ISO/IEC/IEEE 29119-1:2022 | 2022 | Konsep umum dan terminologi software testing | Memenuhi rentang 2022–2026 |
| ISO/IEC/IEEE 29119-2:2021 | 2021 | Proses pengujian: mengatur, mengelola, dan melaksanakan pengujian | **Di luar rentang 2022–2026** — dipakai hanya sebagai pengecualian atas persetujuan dosen; jangan menyebutnya terbit dalam rentang tersebut |
| ISO/IEC 25010:2023 | 2023 | Model kualitas produk (9 karakteristik) — dasar pemilihan jenis pengujian | Memenuhi rentang 2022–2026 |
| ISO/IEC 25002:2024 | 2024 | Panduan penggunaan model kualitas SQuaRE | Memenuhi rentang 2022–2026 |

Detail tiap standar ada di `02-Standards-References/iso-29119-testing-process.md`, `iso-25010-quality-model.md`, `standard-register.md`, dan `standards-mapping.md`. Standar lengkap berhak cipta dan berbayar; repo ini menyimpan metadata, pemetaan, dan ringkasan tim, bukan salinan penuh standar.

## 2. Proses pengetesan (adaptasi ISO/IEC/IEEE 29119-2)

1. **Tetapkan konteks pengujian** — tujuan, ruang lingkup, batasan, risiko, dan kriteria pengujian (`test-plan.md`).
2. **Susun strategi dan rencana pengujian** — strategi berbasis risiko (`testing-strategy.md`), rencana (`test-plan.md`), jadwal (`testing-schedule.md`).
3. **Rancang kondisi dan test case** — analisis basis uji, susun skenario positif & negatif per modul (`04-Test-Cases/test-cases.csv`, IDB-BB-001 s.d. 018).
4. **Siapkan lingkungan dan data uji yang diizinkan** — browser Chrome, Firefox, Edge (Desktop & Mobile), akun uji, dan data dummy.
5. **Jalankan pengujian manual dan otomatis** — manual di `05-Manual-Testing/`, otomatis Playwright read-only di `06-Automation-Testing/`.
6. **Catat hasil aktual, evidence, dan defect** — execution log, screenshot bukti, dan Bug Report di `07-Bug-Reports/`.
7. **Evaluasi hasil, retest, regression test, dan susun laporan** — validasi ulang status test case, ringkasan metrik, laporan akhir di `09-Final-Report/`.

Daftar ini adalah adaptasi rencana kerja proyek mahasiswa, bukan reproduksi lengkap proses normatif standar. Pemetaan final harus diperiksa terhadap dokumen standar resmi.

## 3. Metode pengetesan yang dipakai

| Metode | Cara kerja | Kapan dipakai |
| --- | --- | --- |
| **Black-box** | Menguji perilaku website dari sisi pengguna berdasarkan input dan output, tanpa melihat source code. Teknik: _equivalence partitioning_, _boundary value analysis_, skenario positif & negatif. | Metode utama — dipakai untuk seluruh 18 test case (IDB-BB-001 s.d. 018): navigasi, pencarian, validasi formulir, katalog, keranjang, dan alur akun. |
| **Grey-box** | Menguji dengan pengetahuan internal terbatas yang diberikan secara sah, misalnya dokumentasi API, diagram arsitektur tingkat tinggi, atau akun dengan role uji. | Pengujian integrasi dan validasi alur, bila pengelola memberikan informasi internal tersebut. |
| **White-box** | Menguji struktur kode, jalur logika, kondisi, unit, dan cakupan kode. | **Hanya bila** pemilik memberikan source code dan izin memeriksanya. Bila source code tidak tersedia, laporkan sebagai **BLOCKED / not feasible** — jangan mengarang hasil white-box. |
| **Automation** | Menjalankan ulang skenario yang stabil, terutama smoke test dan regression test, pada lingkungan yang disetujui (Playwright read-only). | Skenario stabil yang sering diulang. Eksplorasi, usability, dan skenario yang sering berubah tetap memerlukan penilaian manusia. |

## 4. Jenis pengujian per karakteristik kualitas (ISO/IEC 25010:2023)

| Karakteristik (ISO 25010:2023) | Jenis pengujian | Modul / test case |
| --- | --- | --- |
| Functional suitability | Pengujian fungsional black-box | Semua modul — IDB-BB-001 s.d. 018 |
| Performance efficiency | Pengukuran non-destruktif pada staging | Hanya pada lingkungan yang disetujui; **bukan** uji beban di production tanpa izin |
| Compatibility | Uji lintas browser / perangkat | Chrome, Firefox, Edge; Desktop & Mobile — IDB-BB-010 |
| Interaction capability | Skenario usability dan observasi antarmuka | IDB-BB-010, IDB-BB-018 (pengalih bahasa ID/EN/ZH) |
| Reliability | Pengulangan skenario dan pencatatan kegagalan | Retest 26–28 Nov 2026 |
| Security | Review terbatas dan pengujian berizin | Akun, sesi, dan informasi — **tanpa** pengujian keamanan invasif |
| Maintainability | White-box / code review | Hanya bila source code diberikan — saat ini **BLOCKED** |
| Flexibility | Uji konfigurasi / lingkungan yang tersedia | Sesuai lingkungan yang tersedia |
| Safety | Analisis risiko dan skenario dampak relevan | Sesuai risiko yang teridentifikasi |

## 5. Pemetaan metode ke modul dan test case

Status per 28 Nov 2026 dari `04-Test-Cases/test-cases.csv`.

| Modul | Metode | Test case | Status |
| --- | --- | --- | --- |
| Beranda & navigasi | Black-box | IDB-BB-001, IDB-BB-002 | PASS |
| Pencarian | Black-box; boundary / negative test | IDB-BB-003, IDB-BB-004 | PASS |
| Detail produk | Black-box | IDB-BB-005 | PASS (temuan IDB-BUG-005: harga tanpa awalan "Rp") |
| Autentikasi & akun | Black-box | IDB-BB-006 | PASS (temuan IDB-BUG-001, IDB-BUG-002 soal OTP) |
| Keranjang belanja | Black-box; integration test | IDB-BB-007 | PASS (temuan IDB-BUG-003, IDB-BUG-004) |
| Pesanan | Black-box di sandbox | IDB-BB-008 | **BLOCKED** — butuh sandbox dan akun uji |
| Pelacakan pesanan | Black-box | IDB-BB-009 | **BLOCKED** — butuh pesanan uji |
| Responsivitas | Black-box (viewport mobile 390x844) | IDB-BB-010 | PASS |
| Layanan OJEK | Black-box | IDB-BB-011 s.d. IDB-BB-017 | PASS, kecuali IDB-BB-015 **FAIL** (temuan IDB-BUG-006: Daftar Produk tidak tampil) |
| UI/UX & bahasa | Black-box | IDB-BB-018 | PASS |

> **Catatan 28 Nov 2026:** homepage mengembalikan `403 Forbidden` (IDB-BUG-007, Critical/P1). Smoke test beranda (IDB-BB-001) tidak dapat dijalankan ulang sampai layanan pulih; retest dilakukan setelah perbaikan di sisi hosting/server.

## 6. Kriteria dan status hasil

Mengacu pada `test-plan.md`:

- **PASS** — hasil aktual sesuai expected result.
- **FAIL** — hasil aktual berbeda dari expected result.
- **BLOCKED** — tidak dapat dijalankan karena izin / akses / prasyarat.
- **NOT RUN** — belum dijalankan.
- **N/A** — tidak relevan.

Kriteria masuk: izin, lingkungan, test case, akun, dan data uji siap. Kriteria berhenti: hentikan pengujian bila ada dampak ke pengguna/data produksi, indikasi akses tidak sah, gangguan layanan, atau permintaan pemilik.

## 7. Batasan dan etika

- Semua pengujian pada sistem nyata harus memiliki persetujuan tertulis, batas ruang lingkup, akun/data uji, dan lingkungan yang aman.
- Pengujian bersifat non-destruktif: jangan melakukan transaksi nyata, mengubah data pengguna, mengakses endpoint privat, atau menjalankan uji beban/keamanan tanpa izin eksplisit.
- Jangan menjalankan automation berulang pada production tanpa persetujuan dan batas laju.
- Tidak ada klaim hasil pengujian sebelum eksekusi aktual.

## Referensi

- `02-Standards-References/iso-29119-testing-process.md`
- `02-Standards-References/iso-25010-quality-model.md`
- `02-Standards-References/method-selection-rationale.md`
- `02-Standards-References/standards-mapping.md`
- `02-Standards-References/standard-register.md`
- `03-QA-Planning/test-plan.md`
- `03-QA-Planning/testing-strategy.md`
- `04-Test-Cases/test-cases.csv`
