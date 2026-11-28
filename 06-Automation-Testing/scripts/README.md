# Automation Scripts

**Stack final:** Playwright (Node.js) — keputusan di `06-Automation-Testing/README.md`,
acuan P10 Automation Testing.

## Prasyarat

- Node.js 20+ dan npm
- Tidak butuh akun, password, token, atau API key. Jangan masukkan kredensial apa pun di sini.

## Instalasi dan cara menjalankan

```bash
cd 06-Automation-Testing/scripts
npm install
npx playwright install chromium firefox
npx playwright test            # semua browser di playwright.config.js
npx playwright test --project=chromium
npx playwright show-report
```

## Test case yang dicakup

Read-only, tamu, tanpa login/transaksi. Pemetaan lengkap di `../README.md`:

AT-01 (IDB-BB-001) beranda, AT-02 (IDB-BB-002) katalog, AT-03 (IDB-BB-003)
cari Wingko, AT-04 (IDB-BB-004) cari kata tidak cocok, AT-05 (IDB-BB-005)
detail Wingko, AT-06 (IDB-BB-010) mobile 390x844, AT-07 (IDB-BB-011) halaman
Ojek, AT-08 (IDB-BB-015) visibilitas Daftar Produk OJEK — hanya pencatatan,
bukan vonis PASS/FAIL.

## Batasan

- Hasil di `../test-results/` hanya boleh diisi setelah eksekusi nyata.
- Jangan jalankan berulang-ulang di production dalam waktu singkat.
- Bila UI berubah, perbarui selector di `tests/idbotani-readonly.spec.js`
  dan catat tanggal perubahannya. Selector digrounding dari HTML live
  28 Nov 2026 (lihat komentar di file test).
