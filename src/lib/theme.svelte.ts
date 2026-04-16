import { browser } from '$app/environment';

export type Theme = 'system' | 'light' | 'dark';

function createThemeState() {
	let current = $state<Theme>('system');

	if (browser) {
		const saved = localStorage.getItem('theme') as Theme;
		if (saved) {
			current = saved;
		}

		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', () => {
			if (current === 'system') {
				applyTheme('system');
			}
		});
	}

	function applyTheme(value: Theme) {
		if (!browser) return;

		const html = document.documentElement;
		if (value === 'system') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			html.setAttribute('data-theme', prefersDark ? 'dim' : 'cupcake');
		} else {
			html.setAttribute('data-theme', value === 'dark' ? 'dim' : 'cupcake');
		}
	}

	return {
		get current() {
			return current;
		},
		set(value: Theme) {
			current = value;
			if (browser) {
				localStorage.setItem('theme', value);
				applyTheme(value);
			}
		}
	};
}

export const themeState = createThemeState();
