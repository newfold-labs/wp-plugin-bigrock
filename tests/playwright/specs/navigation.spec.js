import { test, expect } from '@playwright/test';
import { auth } from '../helpers';

test.describe('Navigation', () => {
	test.beforeEach(async ({ page }) => {
		// Use shared authentication helper
		await auth.navigateToAdminPage(page, 'admin.php?page=bigrock_in');
	});

	test('Logo Links to home', async ({ page }) => {
		await page.click('.wppbr-logo-wrap a');
		await page.waitForTimeout(500);

		// Check if the hash is #/home
		const hash = await page.evaluate(() => window.location.hash);
		expect(hash).toBe('#/home');
	});

	test('Admin submenu exists', async ({ page }) => {
		// Use shared helper to get WordPress utilities
		const { admin } = await auth.setupAuthenticatedContext(page);

		// Use WordPress admin utilities for navigation
		await admin.visitAdminPage('index.php');

		// Check if the admin submenu exists
		await expect(page.locator('#adminmenu #toplevel_page_bigrock_in ul.wp-submenu')).toBeVisible();

		// Check for specific submenu items
		await expect(page.locator('#adminmenu #toplevel_page_bigrock_in ul.wp-submenu li a[href="admin.php?page=bigrock_in#/home"]')).toBeVisible();
		await expect(page.locator('#adminmenu #toplevel_page_bigrock_in ul.wp-submenu li a[href="admin.php?page=bigrock_in#/settings"]')).toBeVisible();
		await expect(page.locator('#adminmenu #toplevel_page_bigrock_in ul.wp-submenu li a[href="admin.php?page=bigrock_in#/help"]')).toBeVisible();
	});

	test('Settings link properly navigates', async ({ page }) => {
		// Navigate to the bigrock admin page first
		await auth.navigateToAdminPage(page, 'admin.php?page=bigrock_in');

		// First hover over the main bigrock menu to make submenu visible
		await page.hover('#adminmenu #toplevel_page_bigrock_in');
		await page.waitForTimeout(100);

		// Click the settings link with force option
		await page.click('#adminmenu #toplevel_page_bigrock_in ul.wp-submenu li a[href="admin.php?page=bigrock_in#/settings"]', { force: true });
		await page.waitForTimeout(500);

		// Check if the hash is #/settings
		const hash = await page.evaluate(() => window.location.hash);
		expect(hash).toBe('#/settings');
	});
});
