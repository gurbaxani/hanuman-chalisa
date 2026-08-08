<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime.js';
	import { fade } from 'svelte/transition';

	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import '@phosphor-icons/web/duotone';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	let { children } = $props();

	/**
	 * Purpose: Ensures correct active state across localized routes.
	 * Using route.id is stable regardless of language prefix.
	 */
	const isActive = (routeId: string | null) => 
		page.route.id === routeId || page.route.id?.startsWith(routeId + '/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m.jai_shri_ram()}</title>
	<script defer data-domain="hanumanji.ashwinig.com" src="https://plausible.ashwinig.com/js/script.js"></script>
</svelte:head>

<!-- Purpose: Gentle fade transition to maintain meditative focus during page changes -->
{#key page.url.pathname}
	<div in:fade={{ duration: 300, delay: 100 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</div>
{/key}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

<!-- Purpose: Navigation dock with solid visibility and clear hierarchy -->
{#if page.route.id && !['/', '/welcome', '/download'].includes(page.route.id)}
	<nav class="dock dock-xl border-t border-base-content/10 bg-base-100">
		<button
			onclick={() => goto(resolve(localizeHref('/read') as Pathname))}
			class={isActive('/read') ? 'dock-active text-primary' : 'opacity-50'}
			aria-current={isActive('/read') ? 'page' : undefined}
		>
			<i class="ph-duotone ph-book-open-text text-2xl"></i>
			<span class="dock-label font-bold tracking-tight">{m.read()}</span>
		</button>

		<button
			onclick={() => goto(resolve(localizeHref('/learn') as Pathname))}
			class={isActive('/learn') ? 'dock-active text-primary' : 'opacity-50'}
			aria-current={isActive('/learn') ? 'page' : undefined}
		>
			<i class="ph-duotone ph-hands-praying text-2xl"></i>
			<span class="dock-label font-bold tracking-tight">{m.learn()}</span>
		</button>

		<button
			onclick={() => goto(resolve(localizeHref('/settings') as Pathname))}
			class={isActive('/settings') ? 'dock-active text-primary' : 'opacity-50'}
			aria-current={isActive('/settings') ? 'page' : undefined}
		>
			<i class="ph-duotone ph-gear-six text-2xl"></i>
			<span class="dock-label font-bold tracking-tight">{m.settings()}</span>
		</button>
	</nav>
{/if}

