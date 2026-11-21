# Testing Strategy — Draft

## Strategi berbasis risiko

Prioritas awal ditentukan dari dampak bisnis dan kemungkinan kegagalan. Alur autentikasi, keranjang, checkout/pesanan, dan konsistensi status pesanan berpotensi memiliki dampak tinggi; prioritas final ditentukan setelah diskusi dengan pengelola.

| Area | Pendekatan kandidat | Prioritas awal |
|---|---|---|
| Navigasi/beranda | Black-box, UI automation | Medium |
| Katalog/detail produk | Black-box, UI/API bila diizinkan | High |
| Pencarian | Black-box, boundary/negative test | Medium |
| Login/registrasi | Black-box; grey-box jika dokumentasi tersedia | High |
| Keranjang | Black-box, integration test | High |
| Pesanan/tracking | Black-box dan integration test di sandbox | High |
| Source code | White-box hanya jika akses disetujui | Belum ditentukan |

## Pemilihan alat

Pilih alat setelah mengetahui teknologi dan akses yang tersedia. Kandidat:
- Playwright untuk browser UI automation.
- Postman/Newman untuk API testing jika API dan izin tersedia.
- Unit-test framework yang sesuai bahasa pemrograman setelah stack dikonfirmasi.

Jangan menjalankan automation berulang pada production tanpa persetujuan dan batas laju.
