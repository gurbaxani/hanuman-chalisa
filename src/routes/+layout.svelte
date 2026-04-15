<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state'; // In Svelte 5, this is a reactive object
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@phosphor-icons/web/duotone';
	import { goto } from '$app/navigation';

	let { children } = $props();

	const isActive = (path: string) => page.url.pathname === path;
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
	<button onclick={() => goto('/read')} class={isActive('/read') ? 'dock-active' : ''}>
		<i class="ph-duotone ph-book-open-text text-xl"></i>
		<span class="dock-label">Read</span>
	</button>

	<button onclick={() => goto('/learn')} class={isActive('/learn') ? 'dock-active' : ''}>
		<i class="ph-duotone ph-hands-praying text-xl"></i>
		<span class="dock-label">Learn</span>
	</button>

	<button onclick={() => goto('/settings')} class={isActive('/settings') ? 'dock-active' : ''}>
		<i class="ph-duotone ph-gear-six text-xl"></i>
		<span class="dock-label">Settings</span>
	</button>
</div>
