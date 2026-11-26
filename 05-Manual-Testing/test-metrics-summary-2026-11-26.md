# Ringkasan Metrik Hasil Uji — IdBotani (Fase IV.3 Timeline)

**Tanggal:** 26 November 2026
**Penyusun:** RAMA NITTIA KHADIFA — 231011403642 (Functional QA Auth, Kelompok 5)
**Objek uji:** https://idbotani.com/ (Live Production, Non-Destructive)
**Sumber data:** `04-Test-Cases/test-cases.csv`, `05-Manual-Testing/test-execution-log-2026-11-25.md`,
`05-Manual-Testing/test-execution-log-2026-11-26.md`, `07-Bug-Reports/Bug_Report_Idbotani.md`

## Status Test Case (10 skenario, IDB-BB-001 s.d. IDB-BB-010)

| Status | Jumlah | Persentase |
|---|---|---|
| PASS | 8 (001–007, 010) | 80% |
| FAIL | 0 | 0% |
| BLOCKED | 2 (008 Order, 009 Tracking) | 20% |
| **Total** | **10** | **100%** |

Alasan BLOCKED: 008 dan 009 butuh pesanan sungguhan; pesanan tidak boleh dibuat di situs live.

## Defect (5 temuan, IDB-BUG-001 s.d. IDB-BUG-005)

| Severity | Jumlah | ID |
|---|---|---|
| High / P1 | 2 | BUG-001 (OTP tidak terkirim), BUG-002 (kode OTP tampil di halaman) |
| Low / P3 | 2 | BUG-003 (qty auto-naik tanpa pemberitahuan), BUG-004 (mini-keranjang tidak refresh) |
| Low / P4 | 1 | BUG-005 (harga detail tanpa "Rp") |

Retest 26 Nov 2026: kelima defect masih Open, belum ada yang diperbaiki.

## Cakupan yang belum teruji (gap)

- Modul Layanan OJEK (peta, ongkir, kurir): belum ada test case.
- Modul Konfirmasi Pesanan: belum ada test case (selain 008/009 yang BLOCKED).
- Pengalih bahasa (ID/EN/ZH): belum ada test case.
- Cross-browser: baru Chrome; Firefox/Edge belum diuji.
- Grey-box / white-box: belum ada akses sumber; folder hanya berisi README.
- Wawancara ahli/profesional (Fase IV.4): pertanyaan sudah ada (12 pertanyaan), wawancara belum dilakukan.
- Laporan akhir (Fase V): belum disusun — menunggu pengujian selesai.
