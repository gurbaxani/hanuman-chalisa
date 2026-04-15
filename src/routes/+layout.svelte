<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@phosphor-icons/web/duotone';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jai Shree Ram</title>
</svelte:head>
{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

<div class="dock dock-xl">
	<button>
		<i class="ph-duotone ph-book-open-text text-xl"></i>
		<span class="dock-label">Read</span>
	</button>

	<button class="dock-active">
		<i class="ph-duotone ph-translate text-xl"></i>
		<span class="dock-label">Translate</span>
	</button>

	<button>
		<i class="ph-duotone ph-gear-six text-xl"></i>
		<span class="dock-label">Settings</span>
	</button>
</div>
