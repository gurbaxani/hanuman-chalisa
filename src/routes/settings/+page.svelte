<script lang="ts">
	import { resolve } from '$app/paths';
	import { localizeHref, getLocale } from '$lib/paraglide/runtime';
	import type { Pathname } from '$app/types';
	import * as m from '$lib/paraglide/messages.js';
	import { themeState, type Theme } from '$lib/theme.svelte';
	import '@phosphor-icons/web/regular';
	import { onMount } from 'svelte';
	let email: string = $state('');

	onMount(() => {
		const handle = 'namaskar';
		const domain = 'ashwinig.com';
		email = `${handle}@${domain}`;
	});

	const languageNames: Record<string, string> = {
		en: 'English',
		hi: 'हिन्दी',
		mr: 'मराठी',
		gu: 'ગુજરાતી',
		ta: 'தமிழ்',
		te: 'తెలుగు',
		kn: 'ಕನ್ನಡ',
		bn: 'বাংলা',
		bho: 'भोजपुरी'
	};

	const currentLocale = getLocale();

	let showThemeModal = $state(false);
	let showCopiedToast = $state(false);

	const themes: { id: Theme; label: () => string; icon: string; color: string }[] = [
		{ id: 'system', label: m.theme_system, icon: 'ph-monitor', color: 'bg-blue-500/10 text-blue-500' },
		{ id: 'light', label: m.theme_light, icon: 'ph-sun-dim', color: 'bg-orange-500/10 text-orange-500' },
		{ id: 'dark', label: m.theme_dark, icon: 'ph-moon-stars', color: 'bg-indigo-500/10 text-indigo-500' }
	];

	async function shareApp() {
		const shareData = {
			title: 'Hanuman Chalisa',
			text: 'Read and learn Hanuman Chalisa with this beautiful app.',
			url: 'https://hanumanji.ashwinig.com/'
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);
			} else {
				await navigator.clipboard.writeText(shareData.url);
				showCopiedToast = true;
				setTimeout(() => (showCopiedToast = false), 2000);
			}
		} catch (err) {
			console.error('Error sharing:', err);
		}
	}
</script>

<svelte:head>
	<title>{m.settings()} | {m.jai_shri_ram()}</title>
</svelte:head>

<div class="min-h-screen bg-base-100 pb-24">
	<div class="px-4 py-8 max-w-lg mx-auto">
		<h1 class="text-4xl font-black mb-10 tracking-tight">{m.settings()}</h1>

		<div class="grid gap-6">
			<section>
				<h2 class="text-xs opacity-50 uppercase tracking-widest font-bold mb-3 px-2">{m.preference()}</h2>
				<div class="bg-base-200/50 rounded-3xl overflow-hidden border border-base-300/50">
					<a
						href={resolve(localizeHref('/') as Pathname)}
						class="flex items-center justify-between p-5 hover:bg-base-300/50 transition-all border-b border-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
								<i class="ph-duotone ph-translate text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold">{m.language()}</span>
								<span class="text-xs opacity-60">{languageNames[currentLocale] || currentLocale}</span>
							</div>
						</div>
						<i class="ph-duotone ph-caret-right opacity-30 text-xl"></i>
					</a>

					<button
						onclick={() => (showThemeModal = true)}
						class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all"
					>
						<div class="flex items-center gap-4 text-left">
							<div class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
								<i class="ph-duotone ph-palette text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold">{m.theme()}</span>
								<span class="text-xs opacity-60">{m.theme_desc()}</span>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<span class="badge badge-neutral badge-sm font-bold opacity-50 uppercase tracking-wider">
								{themes.find((t) => t.id === themeState.current)?.label()}
							</span>
							<i class="ph-duotone ph-caret-right opacity-30 text-xl"></i>
						</div>
					</button>

				</div>
			</section>

			<section>
				<h2 class="text-xs opacity-50 uppercase tracking-widest font-bold mb-3 px-2">{m.support()}</h2>
				<div class="bg-base-200/50 rounded-3xl overflow-hidden border border-base-300/50">
					<button class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all border-b border-base-300/50">
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
								<i class="ph-duotone ph-heart text-xl"></i>
							</div>
							<div class="flex flex-col items-start">
								<span class="font-bold text-left">{m.donate_small_title()}</span>
								<span class="text-xs opacity-60">{m.donate_small_desc()}</span>
							</div>
						</div>
						<i class="ph-duotone ph-arrow-square-out opacity-30 text-xl"></i>
					</button>

					<button class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all">
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
								<i class="ph-duotone ph-hand-coins text-xl"></i>
							</div>
							<div class="flex flex-col items-start">
								<span class="font-bold text-left">{m.donate_large_title()}</span>
								<span class="text-xs opacity-60">{m.donate_large_desc()}</span>
							</div>
						</div>
						<i class="ph-duotone ph-arrow-square-out opacity-30 text-xl"></i>
					</button>
				</div>
			</section>

			<section>
				<h2 class="text-xs opacity-50 uppercase tracking-widest font-bold mb-3 px-2">{m.project()}</h2>
				<div class="bg-base-200/50 rounded-3xl overflow-hidden border border-base-300/50">
					<button
						onclick={shareApp}
						class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all border-b border-base-300/50 text-primary"
					>
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
								<i class="ph-duotone ph-share-network text-xl"></i>
							</div>
							<span class="font-bold">{m.share_title()}</span>
						</div>
						<i class="ph-duotone ph-arrow-square-out opacity-60 text-xl"></i>
					</button>

					<a
						href="mailto:{email}"
						class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all no-underline! pt-5! pb-5! border-b border-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-base-content/10 text-base-content flex items-center justify-center">
								<i class="ph-duotone ph-envelope text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold text-base-content">{m.contact_title()}</span>
								<span class="text-xs opacity-60 text-base-content/60">{m.contact_desc()}</span>
							</div>
						</div>
						<i class="ph-duotone ph-arrow-square-out opacity-30 text-xl text-base-content"></i>
					</a>

					<a
						href="https://github.com/gurbaxani/hanuman-chalisa"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all no-underline! pt-5! pb-5!"
					>
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-base-content/10 text-base-content flex items-center justify-center">
								<i class="ph-duotone ph-github-logo text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold text-base-content">{m.source_code_title()}</span>
								<span class="text-xs opacity-60 text-base-content/60">{m.source_code_desc()}</span>
							</div>
						</div>
						<i class="ph-duotone ph-arrow-square-out opacity-30 text-xl text-base-content"></i>
					</a>
				</div>
			</section>
		</div>
	</div>
</div>

{#if showCopiedToast}
	<div class="toast toast-center bottom-24 z-100">
		<div class="alert border border-base-300 shadow-xl rounded-2xl py-3 px-5 flex items-center gap-3">
			<i class="ph-bold ph-check text-primary text-lg"></i>
			<span class="font-bold text-sm">{m.link_copied()}</span>
		</div>
	</div>
{/if}

{#if showThemeModal}
	<dialog class="modal modal-bottom sm:modal-middle modal-open">
		<div class="modal-box p-6 bg-base-100 rounded-[2.5rem] border border-base-300/50 shadow-2xl">
			<div class="flex items-center justify-between mb-6 px-2">
				<h3 class="text-xl font-black">{m.choose_theme()}</h3>
				<button
					onclick={() => (showThemeModal = false)}
					class="btn btn-ghost btn-circle btn-sm bg-base-200"
					aria-label="Close"
				>
					<i class="ph ph-x"></i>
				</button>
			</div>

			<div class="grid gap-3">
				{#each themes as theme (theme.id)}
					<button
						onclick={() => {
							themeState.set(theme.id);
							showThemeModal = false;
						}}
						class="flex items-center justify-between p-4 rounded-3xl hover:bg-base-200 transition-all group
                        {themeState.current === theme.id ? 'bg-primary/10 border border-primary/20' : 'bg-base-200/50'}"
					>
						<div class="flex items-center gap-4 text-left">
							<div class="w-12 h-12 rounded-2xl {theme.color} flex items-center justify-center group-hover:rotate-12 transition-transform">
								<i class="ph-duotone {theme.icon} text-2xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold">{theme.label()}</span>
								<span class="text-xs opacity-50">
									{#if theme.id === 'system'}
										{m.theme_system_desc()}
									{:else if theme.id === 'light'}
										{m.theme_light_desc()}
									{:else}
										{m.theme_dark_desc()}
									{/if}
								</span>
							</div>
						</div>
						{#if themeState.current === theme.id}
							<i class="ph ph-check-circle text-lg text-primary"></i>
						{/if}
					</button>
				{/each}
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button onclick={() => (showThemeModal = false)} aria-label="Close backdrop">close</button>
		</form>
	</dialog>
{/if}

