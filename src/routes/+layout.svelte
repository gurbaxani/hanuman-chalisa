<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state'; // In Svelte 5, this is a reactive object
	import { locales, localizeHref } from '$lib/paraglide/runtime.js';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	// @ts-expect-error - Phosphor icons side-effect import
	import '@phosphor-icons/web/duotone';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	let { children } = $props();

	const isActive = (path: string) => page.url.pathname === path;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m.jai_shri_ram()}</title>
</svelte:head>

{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

{#if page.url.pathname !== '/'}
	<div class="dock dock-xl">
		<button
			onclick={() => goto(resolve(localizeHref('/read') as Pathname))}
			class={isActive(resolve(localizeHref('/read') as Pathname)) ? 'dock-active' : ''}
		>
			<i class="ph-duotone ph-book-open-text text-xl"></i>
			<span class="dock-label">{m.read()}</span>
		</button>

		<button
			onclick={() => goto(resolve(localizeHref('/learn') as Pathname))}
			class={isActive(resolve(localizeHref('/learn') as Pathname)) ? 'dock-active' : ''}
		>
			<i class="ph-duotone ph-hands-praying text-xl"></i>
			<span class="dock-label">{m.learn()}</span>
		</button>

		<button
			onclick={() => goto(resolve(localizeHref('/settings') as Pathname))}
			class={isActive(resolve(localizeHref('/settings') as Pathname)) ? 'dock-active' : ''}
		>
			<i class="ph-duotone ph-gear-six text-xl"></i>
			<span class="dock-label">{m.settings()}</span>
		</button>
	</div>
{/if}
