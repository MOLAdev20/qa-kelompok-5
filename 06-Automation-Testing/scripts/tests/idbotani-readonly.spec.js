// Read-only UI automation — IdBotani, Kelompok 5.
// Acuan materi: P10 Automation Testing, P11 Regression Testing.
// Mapping ke test case manual di 04-Test-Cases/test-cases.csv.
// DILARANG: login, OTP, tambah/hapus keranjang, buat pesanan, submit form.
// Semua test di sini hanya membuka halaman dan membaca apa yang tampil.
//
// Selector digrounding 28 Nov 2026 dari HTML live:
// - Search: form GET ke /produk, input name="s", class "productsearch",
//   placeholder "Aku mau belanja..." / "Aku mau belanja atau Cari di Idbotani..."
// - Detail Wingko: /produk/detail/wingko-171448, harga list "Rp 3.500"
// - Ojek: /k/ojek, #kurirProdukWrap hanya .show() bila isDeliveryBelanjaType()
const { test, expect } = require('@playwright/test');

test.describe('IdBotani — read-only guest (AT-01 s.d. AT-08)', () => {
  test('AT-01 / IDB-BB-001 — beranda tampil', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Idbotani/i);
    await expect(page.locator('input.productsearch').first()).toBeVisible();
    await expect(page.getByText('Wingko').first()).toBeVisible();
  });

  test('AT-02 / IDB-BB-002 — kategori / katalog produk tampil', async ({ page }) => {
    await page.goto('/produk');
    await expect(page.getByText('Wingko').first()).toBeVisible();
  });

  test('AT-03 / IDB-BB-003 — cari kata yang cocok: Wingko', async ({ page }) => {
    await page.goto('/produk?s=Wingko');
    await expect(page.getByText('Wingko').first()).toBeVisible();
    await expect(page.locator('a[href*="/produk/detail/wingko-"]').first()).toBeVisible();
  });

  test('AT-04 / IDB-BB-004 — cari kata yang tidak cocok', async ({ page }) => {
    await page.goto('/produk?s=zxqvkjngasal123');
    // Expected manual: "Terdapat 0 Produk" dan "Oops produk gak ditemukan"
    await expect(page.getByText(/0 Produk|Oops produk/i).first()).toBeVisible();
  });

  test('AT-05 / IDB-BB-005 — detail produk tampil, harga dicatat apa adanya', async ({ page }) => {
    await page.goto('/produk/detail/wingko-171448');
    await expect(page.getByText('Wingko').first()).toBeVisible();
    // JANGAN assert "Rp" di sini: BUG-005 (harga detail "3.500" tanpa "Rp")
    // masih Open per 27 Nov, dan cek HTML 28 Nov masih "3.500".
    // Test ini hanya memastikan detail tampil; harga aktual dicatat di laporan.
    const body = await page.textContent('body');
    expect(body).toMatch(/3[.,]500/);
    expect(body).toMatch(/Minimal Order|Dilihat/);
  });

  test('AT-06 / IDB-BB-010 — viewport mobile 390x844 usable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator('input.productsearch').first()).toBeVisible();
    await expect(page.getByText('Wingko').first()).toBeVisible();
  });

  test('AT-07 / IDB-BB-011 — halaman Ojek tampil', async ({ page }) => {
    await page.goto('/k/ojek');
    await expect(page.getByText(/Pesan Layanan Kurir/i).first()).toBeVisible();
    await expect(page.getByText(/Alamat Jemput/i).first()).toBeVisible();
  });

  test('AT-08 / IDB-BB-015 — Daftar Produk OJEK: catat visibilitas, jangan simpulkan PASS/FAIL di sini', async ({ page }) => {
    await page.goto('/k/ojek');
    const wrap = page.locator('#kurirProdukWrap');
    // Di HTML 28 Nov: #kurirProdukWrap ada di DOM, tapi toggleKurirProdukWrap()
    // hanya .show() bila isDeliveryBelanjaType() true, sisanya .hide().
    // Jadi visibilitas awal saja TIDAK cukup untuk menyatakan BUG-006 fixed.
    // Skrip ini hanya mencatat kondisi awal; verifikasi visual + pilih
    // layanan Delivery/Belanja tetap harus dilakukan manual (lihat
    // retest-checklist-2026-11-28.md).
    const visibleAtLoad = await wrap.isVisible().catch(() => false);
    // eslint-disable-next-line no-console
    console.log(`AT-08 #kurirProdukWrap visible at load (guest, no type selected): ${visibleAtLoad}`);
    expect(await wrap.count()).toBe(1);
  });
});
