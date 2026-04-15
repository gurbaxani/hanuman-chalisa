<script lang="ts">
	import { resolve } from '$app/paths';
	import { localizeHref, getLocale } from '$lib/paraglide/runtime';
	import type { Pathname } from '$app/types';
	import * as m from '$lib/paraglide/messages.js';

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
</script>

<svelte:head>
	<title>Settings | {m.jai_shri_ram()}</title>
</svelte:head>

<div class="min-h-screen bg-base-100 pb-24">
	<div class="px-4 py-8 max-w-lg mx-auto">
		<h1 class="text-4xl font-black mb-10 tracking-tight">Settings</h1>

		<div class="grid gap-6">
			<section>
				<h2 class="text-xs opacity-50 uppercase tracking-widest font-bold mb-3 px-2">Preference</h2>
				<div class="bg-base-200/50 rounded-3xl overflow-hidden border border-base-300/50">
					<a
						href={resolve(localizeHref('/language') as Pathname)}
						class="flex items-center justify-between p-5 hover:bg-base-300/50 transition-all border-b border-base-300/50"
					>
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
								<i class="ph-duotone ph-translate text-xl"></i>
							</div>
							<div class="flex flex-col">
								<span class="font-bold">Language</span>
								<span class="text-xs opacity-60">{languageNames[currentLocale] || currentLocale}</span>
							</div>
						</div>
						<i class="ph-duotone ph-caret-right opacity-30 text-xl"></i>
					</a>

					<div class="flex items-center justify-between p-5 hover:bg-base-300/50 transition-all">
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
								<i class="ph-duotone ph-palette text-xl"></i>
							</div>
							<span class="font-bold">Theme</span>
						</div>
						<span class="badge badge-neutral badge-sm font-bold opacity-50 uppercase tracking-wider">System</span>
					</div>
				</div>
			</section>

			<section>
				<h2 class="text-xs opacity-50 uppercase tracking-widest font-bold mb-3 px-2">Support</h2>
				<div class="bg-base-200/50 rounded-3xl overflow-hidden border border-base-300/50">
					<button class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all border-b border-base-300/50">
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
								<i class="ph-duotone ph-heart text-xl"></i>
							</div>
							<div class="flex flex-col items-start">
								<span class="font-bold text-left">Donate Rs. 11 monthly</span>
								<span class="text-xs opacity-60">Small contributions help us grow</span>
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
								<span class="font-bold text-left">Donate Rs. 101 once</span>
								<span class="text-xs opacity-60">One-time support for the mission</span>
							</div>
						</div>
						<i class="ph-duotone ph-arrow-square-out opacity-30 text-xl"></i>
					</button>
				</div>
			</section>

			<section>
				<div class="bg-base-200/50 rounded-3xl overflow-hidden border border-base-300/50">
					<button class="w-full flex items-center justify-between p-5 hover:bg-base-300/50 transition-all text-primary">
						<div class="flex items-center gap-4">
							<div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
								<i class="ph-duotone ph-share-network text-xl"></i>
							</div>
							<span class="font-bold">Share Hanuman Chalisa</span>
						</div>
						<i class="ph-duotone ph-arrow-square-out opacity-60 text-xl"></i>
					</button>
				</div>
			</section>
		</div>
	</div>
</div>
