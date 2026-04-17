<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import type { Pathname } from '$app/types';
	import '@phosphor-icons/web/duotone';

	const sections = [
		{
			title: m.privacy_collection_title,
			body: m.privacy_collection_body,
			icon: 'ph-duotone ph-database'
		},
		{
			title: m.privacy_third_party_title,
			body: m.privacy_third_party_body,
			icon: 'ph-duotone ph-shield-check'
		},
		{
			title: m.privacy_permissions_title,
			body: m.privacy_permissions_body,
			icon: 'ph-duotone ph-key'
		},
		{
			title: m.privacy_children_title,
			body: m.privacy_children_body,
			icon: 'ph-duotone ph-baby'
		},
		{
			title: m.privacy_contact_title,
			body: m.privacy_contact_body,
			icon: 'ph-duotone ph-envelope'
		}
	];
</script>

<svelte:head>
	<title>{m.privacy_policy()} | {m.jai_shri_ram()}</title>
</svelte:head>

<div class="min-h-screen bg-base-100 pb-24">
	<!-- Navbar -->
	<div class="sticky top-0 z-50 bg-base-100/80 backdrop-blur-xl border-b border-base-300/50">
		<div class="max-w-lg mx-auto flex items-center p-4">
			<a
				href={resolve(localizeHref('/settings') as Pathname)}
				class="btn btn-ghost btn-circle btn-sm bg-base-200"
				aria-label="Back to settings"
			>
				<i class="ph ph-caret-left"></i>
			</a>
			<span class="ml-4 font-black tracking-tight">{m.privacy_policy()}</span>
		</div>
	</div>

	<div class="px-4 py-8 max-w-lg mx-auto">
		<header class="mb-10 text-center">
			<div class="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
				<i class="ph-duotone ph-shield-star text-4xl"></i>
			</div>
			<h1 class="text-3xl font-black mb-3 tracking-tight">{m.privacy_content_title()}</h1>
			<p class="text-xs font-bold opacity-40 uppercase tracking-widest">{m.privacy_last_updated()}</p>
		</header>

		<div class="bg-base-200/50 rounded-3xl p-6 border border-base-300/50 mb-8">
			<p class="text-sm leading-relaxed opacity-70">
				{m.privacy_intro()}
			</p>
		</div>

		<div class="grid gap-6">
			{#each sections as section (section.icon)}
				<section class="flex gap-4">
					<div class="flex-none">
						<div class="w-10 h-10 rounded-xl bg-base-200 text-base-content/70 flex items-center justify-center">
							<i class="{section.icon} text-xl"></i>
						</div>
					</div>
					<div class="grow space-y-4">
						<h2 class="font-black mb-2 leading-tight">{section.title()}</h2>
						<p class="text-sm opacity-60 leading-relaxed">
							{section.body()}
						</p>
					</div>
				</section>
			{/each}
		</div>

		<footer class="mt-16 pt-8 border-t border-base-300/50 text-center">
			<p class="text-xs opacity-40">
				&copy; 2026 KH Systems Private Limited. All rights reserved.
			</p>
		</footer>
	</div>
</div>
