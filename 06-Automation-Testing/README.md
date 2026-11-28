# 06 — Automation Testing

**Acuan materi:** Pertemuan 10 — Otomatisasi Pengujian (Automation Testing), dan Pertemuan 11 — Pengujian Regresi.
**Objek:** https://idbotani.com/ (live, non-destructive, read-only)
**Status:** Script dibuat 28 Nov 2026. Hasil eksekusi belum diisi — lihat `test-results/` setelah script benar-benar dijalankan.

## Keputusan alat — berdasarkan P10

P10 membahas Selenium (open-source, multi-bahasa, multi-browser), Cypress
(JavaScript, E2E, auto-wait, time-travel, terbatas di tab/window dan browser
tertentu), Katalon Studio, JUnit/TestNG, Appium, dan JMeter. Kriteria pemilihan
di P10: skenario berulang, regresi, butuh konsistensi, dan bisa jalan di CI/CD.

Repo ini sebelumnya sudah menetapkan kandidat Playwright untuk UI dan
Postman/Newman untuk API (`03-QA-Planning/testing-strategy.md`). Keputusan
final untuk UI di sini: **Playwright (Node.js)**.

Alasannya, sesuai kriteria P10:
- E2E di browser sungguhan, seperti Selenium/Cypress, dengan auto-wait seperti Cypress.
- Cross-browser (Chromium, Firefox, WebKit) dalam satu alat — menutup gap
  cross-browser di `05-Manual-Testing/test-metrics-summary-2026-11-26.md`
  yang baru menguji Chrome.
- Paralel dan CI-ready, sesuai manfaat otomatisasi di P10: efisiensi waktu,
  akurasi/konsistensi, jangkauan lebih luas, dan dukungan CI/CD.
- Logika test case-nya sama dengan Selenium/Cypress; ID test case tidak
  berubah, jadi bisa dipindah alat bila dosen meminta Selenium sesuai P10.

API (P12) dan Performance (P13) **belum** diotomatisasi di sini: tidak ada
dokumentasi API/akses resmi, dan pengujian beban di production dilarang oleh
test plan. Keduanya dicatat sebagai pekerjaan lanjutan di laporan akhir.

## Manfaat dan batasan — berdasarkan P10

Manfaat yang dikejar: pengujian berulang (terutama regresi) jadi cepat dan
konsisten, tanpa kelelahan manusia; skrip bisa dipakai ulang tiap retest harian.

Batasan yang diakui di P10 dan berlaku di sini:
- Biaya awal dan pemeliharaan skrip tinggi — skrip harus diperbarui tiap ada
  perubahan UI IdBotani.
- Tidak efektif untuk pengujian ad-hoc/eksploratif.
- Tidak menggantikan pengujian manual sepenuhnya, terutama penilaian
  UI/UX dan pengalaman pengguna.
- Tidak ada klaim hasil sebelum eksekusi aktual.

## Ruang lingkup automation — read-only saja

Hanya skenario tamu (guest) yang tidak mengubah data, sesuai test plan dan
README repo:

| ID Automation | Test Case manual | Skenario | Keterangan |
|---|---|---|---|
| AT-01 | IDB-BB-001 | Buka beranda | Logo, search, menu, slider, kategori tampil |
| AT-02 | IDB-BB-002 | Buka kategori Makanan | Lewat `/produk`, produk kategori tampil |
| AT-03 | IDB-BB-003 | Cari `Wingko` | Hasil relevan tampil |
| AT-04 | IDB-BB-004 | Cari `zxqvkjngasal123` | State "0 Produk" / "Oops produk gak ditemukan" |
| AT-05 | IDB-BB-005 | Buka detail Wingko | Detail tampil; harga aktual dicatat apa adanya (lihat BUG-005) |
| AT-06 | IDB-BB-010 | Viewport mobile 390x844 | Layout usable, tidak ada elemen terpotong |
| AT-07 | IDB-BB-011 | Buka `/k/ojek` | Halaman kurir tampil; Daftar Produk hanya tampil bila jenis layanan Delivery/Belanja dipilih (lihat catatan retest 28 Nov) |
| AT-08 | IDB-BB-015 | Cek Daftar Produk OJEK | **Bukan** PASS/FAIL otomatis — skrip hanya mencatat visibilitas `#kurirProdukWrap` sebelum dan sesudah memilih Delivery/Belanja |

**Sengaja TIDAK diotomatisasi:**
- Login/OTP, registrasi, lupa password (IDB-BB-006) — butuh akun dan kode OTP; BUG-001/BUG-002 masih Open.
- Tambah/hapus keranjang, pesanan, tracking (IDB-BB-007/008/009) — mengubah state dan butuh sandbox.
- Ganti bahasa (IDB-BB-018) — lewat widget Google Translate, flaky di automation; tetap manual.
- Submit formulir Ojek — tidak ada pesanan yang boleh dibuat di production.

## Cara menjalankan

```bash
cd 06-Automation-Testing/scripts
npm install
npx playwright install chromium firefox
npx playwright test
npx playwright show-report
```

Satu kali jalan = satu kali kunjungan read-only per skenario. Jangan dijalankan
berulang-ulang dalam waktu singkat di production (batas laju, sesuai
`testing-strategy.md`). Hasilnya simpan di `test-results/` dengan format di
README folder tersebut, dan jangan mengarang hasil sebelum dijalankan.

## Struktur folder

```
06-Automation-Testing/
├── README.md                  # dokumen ini
├── regression-plan.md         # rencana regresi acuan P11
├── retest-checklist-2026-11-28.md  # temuan pra-verifikasi 28 Nov, belum PASS/FAIL
├── configuration/
│   ├── README.md
│   └── .env.example           # placeholder, tanpa kredensial
├── scripts/
│   ├── README.md
│   ├── package.json
│   ├── playwright.config.js
│   └── tests/idbotani-readonly.spec.js
└── test-results/
    └── README.md              # hasil eksekusi nyata saja; folder ini di-.gitignore
```
