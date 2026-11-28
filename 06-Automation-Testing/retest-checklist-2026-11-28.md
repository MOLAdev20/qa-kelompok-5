# Retest Checklist — 28 Nov 2026 (Pra-Verifikasi, BUKAN Hasil Final)

**Status dokumen ini:** Checklist dan temuan pra-verifikasi dari pemeriksaan
HTML/JS situs (curl, 28 Nov 2026). **Belum ada PASS/FAIL baru di sini.**
Semua item di bawah ini masih harus dicek di browser dan dibuktikan dengan
screenshot sebelum status di `test-cases.csv` / `Bug_Report_Idbotani.md` diubah.
Acuan: P11 Regression Testing (selective regression) dan P15 Manajemen Bug
(siklus hidup bug).

## Yang sudah dicek lewat HTML (bukan browser)

| Item | Temuan 28 Nov | Artinya |
|---|---|---|
| Detail Wingko `/produk/detail/wingko-171448` | Harga masih `3.500` (tanpa `Rp`); di daftar produk `Rp 3.500`; `Dilihat 68 kali` (27 Nov: 62–63 kali) | **BUG-005 masih reproduksi** dari sisi HTML. Perlu konfirmasi visual di browser. |
| Cari `Wingko` (`/produk?s=Wingko`) | 1 produk Wingko tampil, `Rp 3.500`, penjual Gudeg Senthong Wetan | Konsisten dengan IDB-BB-003 PASS. |
| Ojek `/k/ojek` | `#kurirProdukWrap` ada di DOM: "Daftar Produk", tombol "+ Tambah", bantuan "Khusus layanan Delivery/Belanja. Isi nama barang dan qty." | **Bukan bukti BUG-006 fixed.** Lihat bawah. |
| Ojek — JS `toggleKurirProdukWrap()` | Hanya `.show()` bila `isDeliveryBelanjaType()` true, sisanya `.hide()` | Precondition IDB-BB-015 kemungkinan kurang: jenis layanan harus dipilih dulu. |

## Checklist retest di browser — 28 Nov

- [ ] IDB-BUG-001/002 (IDB-BB-006): Minta OTP lagi. Apakah kode masih tampil di halaman? Cek Gmail: apakah email reset password yang diminta 27 Nov 08.47 WIB akhirnya sampai (>24 jam)? Bila tetap tidak ada, dukung BUG-001.
- [ ] IDB-BUG-003/004 (IDB-BB-007): Tambah Wingko qty 1, cek qty/total dan pemberitahuan; hapus tanpa reload, cek ringkasan/mini-cart. Keranjang ditinggalkan kosong.
- [ ] IDB-BUG-005 (IDB-BB-005): Buka detail Wingko, screenshot harga.
- [ ] IDB-BUG-006 (IDB-BB-015) — **langkah yang diperbaiki:**
  1. Buka `/k/ojek` sebagai tamu, screenshot sebelum memilih jenis layanan.
  2. Pilih jenis layanan Delivery/Belanja, jangan isi/submit formulir.
  3. Screenshot apakah Daftar Produk + field nama barang/qty tampil.
  4. Bila tampil → perbarui precondition IDB-BB-015 di `test-cases.csv`, jangan langsung Closed; status bug diubah hanya dengan bukti.
  5. Bila tetap tidak tampil → BUG-006 tetap Open.
- [ ] Google Login (IDB-BB-006, PENDING): hanya bila ada yang bersedia mengklik pemilih akun Google secara sadar.
- [ ] Smoke: IDB-BB-001, 002, 003, 004, 010, 011, 016, 017, 018 — atau jalankan automation AT-01 s.d. AT-07 sekali, lalu isi hasil nyata di folder ini.
- [ ] Jangan jalankan IDB-BB-008/009 — tetap BLOCKED.

## Setelah checklist selesai

Buat `test-execution-log-2026-11-28.md` di `05-Manual-Testing/` mengikuti
format log 25–27 Nov, perbarui `test-metrics-summary`, `Bug_Report_Idbotani.md`,
dan `evidence-index.md` hanya dengan yang benar-benar terverifikasi.
