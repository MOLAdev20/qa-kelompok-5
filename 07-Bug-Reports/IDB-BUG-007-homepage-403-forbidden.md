# IDB-BUG-007 — Homepage mengembalikan 403 Forbidden, situs tidak bisa diakses

- **Bug ID:** IDB-BUG-007
- **Title:** Homepage mengembalikan 403 Forbidden, situs tidak bisa diakses
- **Related Test Case ID:** Smoke test akses homepage (tidak ada IDB-BB khusus untuk homepage di repo ini)
- **Environment / browser / device:** https://idbotani.com/ (live, production), Chrome Extension di Windows, Chrome 158.0.0.0, viewport tangkapan 1534x847; pengecekan independen dengan curl (tanpa browser)
- **Precondition:** Tidak ada — akses sebagai tamu, tanpa login
- **Steps to reproduce:**
  1. Buka https://idbotani.com/ di browser.
  2. Perhatikan halaman yang tampil.
- **Expected result:** Homepage Idbotani tampil normal (katalog, pencarian, menu, login/daftar), seperti saat retest pagi 28 Nov 2026 pukul 08:43–08:48 WIB.
- **Actual result:** Halaman menampilkan error `403 Forbidden` dengan teks "Access to this resource on the server is denied!". Tidak ada konten homepage sama sekali, sehingga seluruh fitur situs tidak bisa diakses dari homepage. Server merespons (bukan timeout / DNS gagal): HTTP 403, body 787 byte, header `Server: hcdn`, `platform: hostinger`.
- **Severity:** Critical — fungsi inti / seluruh sistem tidak dapat digunakan
- **Priority:** P1 — perlu ditangani segera
- **Evidence path:** `05-Manual-Testing/testing-evidence/IDB-BUG-007/step-01-homepage-403-forbidden-2026-11-28.png`, `05-Manual-Testing/testing-evidence/IDB-BUG-007/execution-notes.md`
- **Reporter / date:** raouy / Sabtu, 28 Nov 2026, 10:14–10:15 WIB (03:14–03:15 UTC)
- **Status:** Open
- **Retest result:** Belum ada — perlu retest setelah perbaikan di sisi hosting/server.

## Bukti verifikasi

- **Browser (Chrome Extension, Windows):** 28 Nov 2026, 10:14–10:15 WIB — tab sudah menampilkan `403 Forbidden` sejak awal pengecekan; judul halaman "403 Forbidden", teks "403", "Forbidden", "Access to this resource on the server is denied!".
- **curl independen (tanpa browser):** 28 Nov 2026, 03:15:48 UTC — `HTTP/1.1 403 Forbidden`, `Content-Type: text/html`, `Content-Length: 787`, `Server: hcdn`, `platform: hostinger`, `x-hcdn-request-id: 091ef569e446d1bcb8ee14799edc1ff0-bos-edge14`.
- **Konteks waktu:** Pada retest pagi yang sama, 28 Nov 2026 pukul 08:43–08:48 WIB, situs masih bisa diakses dan keenam bug sebelumnya (IDB-BUG-001 s.d. IDB-BUG-006) masih ter-reproduksi. Jadi insiden 403 ini terjadi antara pukul 08:48 dan 10:14 WIB.
- **Catatan:** 403 berarti server menolak akses ke resource, bukan server mati total. Penyebab pastinya (konfigurasi hosting / WAF / permission) ada di sisi server dan belum bisa dipastikan dari sisi QA. Tidak dilakukan login, pengisian form, atau pembelian apa pun selama pengujian ini.
