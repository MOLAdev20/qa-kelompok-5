# Execution Notes — IDB-BUG-007

- **Bug ID:** IDB-BUG-007
- **Tanggal / waktu:** Sabtu, 28 November 2026, 10:14–10:15 WIB (03:14–03:15 UTC)
- **URL:** https://idbotani.com/
- **Pelapor:** raouy

## Langkah

1. Tab browser sudah menampilkan halaman `403 Forbidden` untuk https://idbotani.com/ sejak awal pengecekan pukul 10:14 WIB.
2. Verifikasi ulang lewat browser (Chrome Extension, Windows, Chrome 158.0.0.0): halaman tetap `403 Forbidden`, judul "403 Forbidden", teks "403", "Forbidden", "Access to this resource on the server is denied!".
3. Verifikasi independen dengan curl (tanpa browser), 03:15:48 UTC: `HTTP/1.1 403 Forbidden`, `Content-Type: text/html`, `Content-Length: 787`, `Server: hcdn`, `platform: hostinger`, `x-hcdn-request-id: 091ef569e446d1bcb8ee14799edc1ff0-bos-edge14`. Body HTML 787 byte berisi judul dan teks error yang sama.
4. Tidak dilakukan login, pengisian form, atau pembelian.

## Hasil

- **Expected:** Homepage Idbotani tampil normal.
- **Actual:** 403 Forbidden di browser dan di curl — seluruh situs tidak bisa diakses dari homepage.
- **Severity / Priority:** Critical / P1.
- **Konteks:** Retest pagi yang sama (08:43–08:48 WIB) situs masih bisa diakses; insiden terjadi antara 08:48 dan 10:14 WIB.

## Evidence

- `step-01-homepage-403-forbidden-2026-11-28.png` — tangkapan halaman 403 (dikonversi dari PDF bukti browser, 28 Nov 2026 10:15 WIB)
