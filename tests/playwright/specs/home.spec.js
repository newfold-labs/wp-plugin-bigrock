import { test, expect } from '@playwright/test';
import { auth, a11y, utils } from '../helpers';

test.describe('Home Page', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to home page
		await auth.navigateToAdminPage(page, 'admin.php?page=bigrock_in#/home');
	});

	test('Home page UI elements are present and visible', async ({ page }) => {
		// Header
		const header = page.locator(
			'.wppbr-app-home-container .wppbr-app-home-header'
		);
		await expect(header).toBeVisible();

		// Main content
		const content = page.locator('.wppbr-app-home-content');
		await expect(content).toBeVisible();

		// Settings section
		const settings = page.locator('.wppbr-app-home-settings');
		await expect(settings).toBeVisible();

		// Settings actions (scoped inside settings)
		await expect(
			settings.locator('.wppbr-app-home-settings-action')
		).toBeVisible();

		await expect(
			settings.locator('.wppbr-app-home-performance-action')
		).toBeVisible();

		await expect(
			settings.locator('.wppbr-app-home-marketplace-action')
		).toBeVisible();

		// Hosting section
		const hosting = page.locator('.wppbr-app-home-hosting');
		await expect(hosting).toBeVisible();

		// Manage BigRock Account link
		const manageAccountLink = hosting.locator(
			'a.nfd-button.nfd-button--secondary',
			{ hasText: 'Manage BigRock Account' }
		);

		await expect(manageAccountLink).toBeVisible();

		await expect(manageAccountLink).toHaveAttribute(
			'href',
			/https:\/\/www\.bigrock/
		);
	});

});
