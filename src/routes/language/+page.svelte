<script lang="ts">
	import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import * as m from '$lib/paraglide/messages.js';

	const languageNames: Record<string, { native: string; english: string }> = {
		en: { native: 'English', english: 'English' },
		hi: { native: 'हिन्दी', english: 'Hindi' },
		mr: { native: 'मराठी', english: 'Marathi' },
		gu: { native: 'ગુજરાતી', english: 'Gujarati' },
		ta: { native: 'தமிழ்', english: 'Tamil' },
		te: { native: 'తెలుగు', english: 'Telugu' },
		kn: { native: 'ಕನ್ನಡ', english: 'Kannada' },
		bn: { native: 'বাংলা', english: 'Bengali' },
		bho: { native: 'भोजपुरी', english: 'Bhojpuri' }
	};

	const currentLocale = getLocale();
</script>

<svelte:head>
	<title>Choose Language | {m.jai_shri_ram()}</title>
	<meta name="description" content="Choose your preferred language for reading and learning Hanuman Chalisa." />
</svelte:head>

<div class="min-h-screen bg-base-100 pb-24">
	<div class="px-4 py-8 max-w-lg mx-auto">
		<div class="flex items-center gap-4 mb-10">
			<a
				href={resolve(localizeHref('/settings') as Pathname)}
				class="btn btn-ghost btn-circle bg-base-200/50 hover:bg-base-300 transition-all font-sans"
				aria-label="Back to settings"
			>
				<i class="ph-duotone ph-arrow-left text-2xl"></i>
			</a>
			<div>
				<h1 class="text-3xl font-black tracking-tight leading-none mb-1">Language</h1>
				<p class="text-[10px] opacity-50 uppercase tracking-[0.2em] font-bold">Select Preference</p>
			</div>
		</div>

		<div class="grid gap-3">
			{#each locales as locale (locale)}
				{@const isCurrent = currentLocale === locale}
				<a
					href={resolve(localizeHref('/', { locale }) as Pathname)}
					class="group flex items-center justify-between p-5 rounded-3xl transition-all duration-300 border-2 {isCurrent
						? 'bg-primary/10 border-primary shadow-lg shadow-primary/10'
						: 'bg-base-200/50 border-transparent hover:bg-base-200 hover:scale-[1.02]'}"
				>
					<div class="flex items-center gap-4">
						<div
							class="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-colors {isCurrent
								? 'bg-primary text-primary-content'
								: 'bg-base-300 text-base-content group-hover:bg-primary/20'}"
						>
							{locale.toUpperCase()}
						</div>
						<div class="flex flex-col">
							<span class="text-xl font-bold leading-tight">{languageNames[locale]?.native || locale}</span>
							<span class="text-xs opacity-60 font-bold uppercase tracking-wider">{languageNames[locale]?.english || ''}</span>
						</div>
					</div>
					{#if isCurrent}
						<div class="bg-primary text-primary-content w-8 h-8 rounded-full flex items-center justify-center">
							<i class="ph-duotone ph-check text-lg"></i>
						</div>
					{:else}
						<i class="ph-duotone ph-caret-right opacity-20 group-hover:opacity-100 transition-opacity text-xl"></i>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</div>
