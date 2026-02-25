/**
 * Handle active state for WordPress admin submenu items
 * based on React Router hash-based navigation
 */

if (typeof window !== 'undefined') {
	window.addEventListener('DOMContentLoaded', () => {
		function updateActiveMenuItem() {
			const hash = window.location.hash.replace('#', '') || '/home';
			
			// Remove all current classes from submenu items
			const submenuItems = document.querySelectorAll('#toplevel_page_bigrock_in .wp-submenu li');
			submenuItems.forEach(item => item.classList.remove('current'));
			
			// Map hash to menu item
			const menuMap = {
				'/home': 'bigrock_in#/home',
				'/marketplace': 'bigrock_in#/marketplace',
				'marketplace/services': 'bigrock_in#/marketplace',
				'marketplace/featured': 'bigrock_in#/marketplace',
				'marketplace/ecommerce': 'bigrock_in#/marketplace',
				'marketplace/seo': 'bigrock_in#/marketplace',
				'marketplace/themes': 'bigrock_in#/marketplace',
				'marketplace/all': 'bigrock_in#/marketplace',
				'/settings': 'bigrock_in#/settings',
				'/settings/performance': 'bigrock_in#/settings',
				'/help': 'bigrock_in#/help'
			};
			
			// Find the matching menu item and add current class
			const menuSlug = menuMap[hash] || menuMap['/home'];
			const targetLink = document.querySelector(`#toplevel_page_bigrock_in .wp-submenu li a[href*="${menuSlug}"]`);
			
			if (targetLink && targetLink.parentElement) {
				targetLink.parentElement.classList.add('current');
			}
		}
		
		// Update on page load
		updateActiveMenuItem();
		
		// Update on hash change (for React Router navigation)
		window.addEventListener('hashchange', updateActiveMenuItem);
		
		// Update when clicking submenu items
		const submenuLinks = document.querySelectorAll(`#toplevel_page_bigrock_in .wp-submenu a`);
		submenuLinks.forEach(link => {
			link.addEventListener('click', () => {
				setTimeout(updateActiveMenuItem, 100);
			});
		});
	});
}

