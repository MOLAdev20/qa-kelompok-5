# Ringkasan Metrik Hasil Uji — IdBotani (Fase IV.3 Timeline)

**Tanggal:** 26 November 2026 (diperbarui sore hari setelah pengujian OJEK)
**Penyusun:** RAMA NITTIA KHADIFA — 231011403642 (Functional QA Auth, Kelompok 5)
**Objek uji:** https://idbotani.com/ (Live Production, Non-Destructive)
**Sumber data:** `04-Test-Cases/test-cases.csv`, `05-Manual-Testing/test-execution-log-2026-11-25.md`,
`05-Manual-Testing/test-execution-log-2026-11-26.md`, `07-Bug-Reports/Bug_Report_Idbotani.md`

## Status Test Case (18 skenario, IDB-BB-001 s.d. IDB-BB-018)

| Status | Jumlah | Persentase |
|---|---|---|
| PASS | 15 (001–007, 010–014, 016–018) | 83% |
| FAIL | 1 (015 Daftar Produk OJEK) | 6% |
| BLOCKED | 2 (008 Order, 009 Tracking) | 11% |
| **Total** | **18** | **100%** |

Alasan BLOCKED: 008 dan 009 butuh pesanan sungguhan; pesanan tidak boleh dibuat di situs live.

## Defect (6 temuan, IDB-BUG-001 s.d. IDB-BUG-006)

| Severity | Jumlah | ID |
|---|---|---|
| High / P1 | 2 | BUG-001 (OTP tidak terkirim), BUG-002 (kode OTP tampil di halaman) |
| Low / P3 | 3 | BUG-003 (qty auto-naik tanpa pemberitahuan), BUG-004 (mini-keranjang tidak refresh), BUG-006 (Daftar Produk OJEK tidak tampil untuk tamu) |
| Low / P4 | 1 | BUG-005 (harga detail tanpa "Rp") |

Retest 26 Nov 2026 pagi: kelima defect awal masih Open. Sesi OJEK 26 Nov sore: 011–014, 016–018 PASS, 015 FAIL (BUG-006 baru).

## Cakupan yang belum teruji (gap)

- Daftar Produk OJEK (IDB-BB-015): perlu dicek saat login — kemungkinan fitur hanya untuk pengguna login.
- Ongkir OJEK Rp 0 (IDB-BB-014): perlu verifikasi apakah tarif benar atau kesalahan perhitungan.
- Modul Konfirmasi Pesanan: belum ada test case (selain 008/009 yang BLOCKED).
- Cross-browser: baru Chrome; Firefox/Edge belum diuji.
- Grey-box / white-box: belum ada akses sumber; folder hanya berisi README.
- Wawancara ahli/profesional (Fase IV.4): pertanyaan sudah ada (12 pertanyaan), wawancara belum dilakukan.
- Laporan akhir (Fase V): belum disusun — menunggu pengujian selesai.
