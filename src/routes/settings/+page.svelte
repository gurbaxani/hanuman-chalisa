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
		{
			id: 'system',
			label: m.theme_system,
			icon: 'ph-monitor',
			color: 'bg-blue-500/10 text-blue-500'
		},
		{
			id: 'light',
			label: m.theme_light,
			icon: 'ph-sun-dim',
			color: 'bg-orange-500/10 text-orange-500'
		},
		{
			id: 'dark',
			label: m.theme_dark,
			icon: 'ph-moon-stars',
			color: 'bg-indigo-500/10 text-indigo-500'
		}
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
	<div class="mx-auto max-w-lg px-4 py-8">
		<h1 class="mb-10 text-4xl font-black tracking-tight">{m.settings()}</h1>

		<div class="grid gap-6">
			<section>
				<h2 class="mb-3 px-2 text-xs font-bold tracking-widest uppercase opacity-50">
					{m.preference()}
				</h2>
				<div class="overflow-hidden rounded-3xl border border-base-300/50 bg-base-200/50">
					<a
						href="{resolve(localizeHref('/') as Pathname)}?changeLanguage=true"
						class="flex items-center justify-between border-b border-base-300/50 p-5 transition-all hover:bg-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
							>
								<i class="ph-duotone ph-translate text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold">{m.language()}</span>
								<span class="text-xs opacity-60" lang={currentLocale}
									>{languageNames[currentLocale] || currentLocale}</span
								>
							</div>
						</div>
						<i class="ph-duotone ph-caret-right text-xl opacity-30"></i>
					</a>

					<button
						onclick={() => (showThemeModal = true)}
						class="flex w-full items-center justify-between p-5 transition-all hover:bg-base-300/50"
					>
						<div class="flex items-center gap-4 text-left">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"
							>
								<i class="ph-duotone ph-palette text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold">{m.theme()}</span>
								<span class="text-xs opacity-60">{m.theme_desc()}</span>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<span
								class="badge badge-sm font-bold tracking-wider uppercase opacity-50 badge-neutral"
							>
								{themes.find((t) => t.id === themeState.current)?.label()}
							</span>
							<i class="ph-duotone ph-caret-right text-xl opacity-30"></i>
						</div>
					</button>
				</div>
			</section>

			<!-- <section>
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
			</section> -->

			<section>
				<h2 class="mb-3 px-2 text-xs font-bold tracking-widest uppercase opacity-50">
					{m.project()}
				</h2>
				<div class="overflow-hidden rounded-3xl border border-base-300/50 bg-base-200/50">
					<!-- <a
						href={resolve(localizeHref('/download') as Pathname)}
						class="flex w-full items-center justify-between border-b border-base-300/50 p-5 pt-5! pb-5! no-underline! transition-all hover:bg-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
							>
								<i class="ph-duotone ph-download-simple text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold text-base-content">{m.download_title()}</span>
								<span class="text-xs text-base-content/60 opacity-60">{m.download_desc()}</span>
							</div>
						</div>
						<i class="ph-duotone ph-caret-right text-xl text-base-content opacity-30"></i>
					</a> -->

					<button
						onclick={shareApp}
						class="flex w-full items-center justify-between border-b border-base-300/50 p-5 text-primary transition-all hover:bg-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
							>
								<i class="ph-duotone ph-share-network text-xl"></i>
							</div>
							<span class="font-bold">{m.share_title()}</span>
						</div>
						<i class="ph-duotone ph-arrow-square-out text-xl opacity-60"></i>
					</button>

					<a
						href="mailto:{email}"
						class="flex w-full items-center justify-between border-b border-base-300/50 p-5 pt-5! pb-5! no-underline! transition-all hover:bg-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-base-content/10 text-base-content"
							>
								<i class="ph-duotone ph-envelope text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold text-base-content">{m.contact_title()}</span>
								<span class="text-xs text-base-content/60 opacity-60">{m.contact_desc()}</span>
							</div>
						</div>
						<i class="ph-duotone ph-arrow-square-out text-xl text-base-content opacity-30"></i>
					</a>

					<a
						href={resolve(localizeHref('/privacy') as Pathname)}
						class="flex w-full items-center justify-between border-b border-base-300/50 p-5 pt-5! pb-5! no-underline! transition-all hover:bg-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-base-content/10 text-base-content"
							>
								<i class="ph-duotone ph-shield-check text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold text-base-content">{m.privacy_policy()}</span>
								<span class="text-xs text-base-content/60 opacity-60"
									>{m.privacy_policy_desc()}</span
								>
							</div>
						</div>
						<i class="ph-duotone ph-caret-right text-xl text-base-content opacity-30"></i>
					</a>

					<a
						href="https://github.com/gurbaxani/hanuman-chalisa"
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-between p-5 pt-5! pb-5! no-underline! transition-all hover:bg-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-base-content/10 text-base-content"
							>
								<i class="ph-duotone ph-github-logo text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold text-base-content">{m.source_code_title()}</span>
								<span class="text-xs text-base-content/60 opacity-60">{m.source_code_desc()}</span>
							</div>
						</div>
						<i class="ph-duotone ph-arrow-square-out text-xl text-base-content opacity-30"></i>
					</a>
				</div>
			</section>

			<div class="mt-16 flex flex-col items-center gap-2 px-6 text-center opacity-30">
				<i class="ph-duotone ph-warning-circle text-xl"></i>
				<p class="mx-auto max-w-xs text-xs leading-relaxed">
					{m.ai_disclaimer()}
				</p>
			</div>
		</div>
	</div>
</div>

{#if showCopiedToast}
	<div class="toast toast-center bottom-24 z-100">
		<div
			class="alert flex items-center gap-3 rounded-2xl border border-base-300 px-5 py-3 shadow-xl"
		>
			<i class="ph-bold ph-check text-lg text-primary"></i>
			<span class="text-sm font-bold">{m.link_copied()}</span>
		</div>
	</div>
{/if}

{#if showThemeModal}
	<dialog class="modal-open modal modal-bottom sm:modal-middle">
		<div class="modal-box rounded-[2.5rem] border border-base-300/50 bg-base-100 p-6 shadow-2xl">
			<div class="mb-6 flex items-center justify-between px-2">
				<h3 class="text-xl font-black">{m.choose_theme()}</h3>
				<button
					onclick={() => (showThemeModal = false)}
					class="btn btn-circle bg-base-200 btn-ghost btn-sm"
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
						class="group flex items-center justify-between rounded-3xl p-4 transition-all hover:bg-base-200
                        {themeState.current === theme.id
							? 'border border-primary/20 bg-primary/10'
							: 'bg-base-200/50'}"
					>
						<div class="flex items-center gap-4 text-left">
							<div
								class="h-12 w-12 rounded-2xl {theme.color} flex items-center justify-center transition-transform group-hover:rotate-12"
							>
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
