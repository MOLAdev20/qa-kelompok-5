# Automation Run — 28 Nov 2026

**Hasil: 8 gagal, 0 lolos — BUKAN karena situs IdBotani gagal.**

## Yang terjadi

- Perintah: `npx playwright test --project=chromium` di
  `06-Automation-Testing/scripts/`
- Semua 8 test (AT-01 s.d. AT-08) gagal di `page.goto()` dengan
  `net::ERR_TUNNEL_CONNECTION_FAILED` ke `https://idbotani.com/`
- Penyebab: browser Playwright di VM ini tidak bisa menembus tunnel/proxy
  ke idbotani.com pada saat itu. Bukan bukti situs down atau test case salah.

## Bukti itu masalah jaringan VM, bukan situs

- `curl` dari VM yang sama pada 28 Nov berhasil mengambil beranda, hasil
  cari `Wingko`, detail Wingko, dan halaman `/k/ojek` (lihat
  `retest-checklist-2026-11-28.md`).
- Jadi jangan tulis hasil run ini sebagai FAIL untuk IDB-BB-001 s.d. 018
  di `test-cases.csv`, dan jangan ubah status bug berdasarkan run ini.

## Yang perlu dilakukan

1. Jalankan ulang `npx playwright test --project=chromium` dari laptop
   Fachriz atau dari jaringan yang tidak diblokir tunnel — atau lewat
   browser Chrome di laptop (device browser) bila tersedia.
2. Bila tetap gagal di VM, catat error persisnya dan jangan paksa retry
   berulang di production.
3. Hasil run yang valid baru boleh masuk `test-results/` (folder itu
   di-`.gitignore`, jadi laporan ringkasnya taruh di file ini).
