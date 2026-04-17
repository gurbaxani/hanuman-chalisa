<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { onMount } from 'svelte';

	let activeVerse: number | null = $state(null);

	const verses = $derived([
		[m.verse_1_1(), m.verse_1_2()],
		[m.verse_2_1(), m.verse_2_2()],
		[m.verse_3_1(), m.verse_3_2()],
		[m.verse_4_1(), m.verse_4_2()],
		[m.verse_5_1(), m.verse_5_2()],
		[m.verse_6_1(), m.verse_6_2()],
		[m.verse_7_1(), m.verse_7_2()],
		[m.verse_8_1(), m.verse_8_2()],
		[m.verse_9_1(), m.verse_9_2()],
		[m.verse_10_1(), m.verse_10_2()],
		[m.verse_11_1(), m.verse_11_2()],
		[m.verse_12_1(), m.verse_12_2()],
		[m.verse_13_1(), m.verse_13_2()],
		[m.verse_14_1(), m.verse_14_2()],
		[m.verse_15_1(), m.verse_15_2()],
		[m.verse_16_1(), m.verse_16_2()],
		[m.verse_17_1(), m.verse_17_2()],
		[m.verse_18_1(), m.verse_18_2()],
		[m.verse_19_1(), m.verse_19_2()],
		[m.verse_20_1(), m.verse_20_2()],
		[m.verse_21_1(), m.verse_21_2()],
		[m.verse_22_1(), m.verse_22_2()],
		[m.verse_23_1(), m.verse_23_2()],
		[m.verse_24_1(), m.verse_24_2()],
		[m.verse_25_1(), m.verse_25_2()],
		[m.verse_26_1(), m.verse_26_2()],
		[m.verse_27_1(), m.verse_27_2()],
		[m.verse_28_1(), m.verse_28_2()],
		[m.verse_29_1(), m.verse_29_2()],
		[m.verse_30_1(), m.verse_30_2()],
		[m.verse_31_1(), m.verse_31_2()],
		[m.verse_32_1(), m.verse_32_2()],
		[m.verse_33_1(), m.verse_33_2()],
		[m.verse_34_1(), m.verse_34_2()],
		[m.verse_35_1(), m.verse_35_2()],
		[m.verse_36_1(), m.verse_36_2()],
		[m.verse_37_1(), m.verse_37_2()],
		[m.verse_38_1(), m.verse_38_2()],
		[m.verse_39_1(), m.verse_39_2()],
		[m.verse_40_1(), m.verse_40_2()]
	]);

	function toggleVerse(index: number) {
		activeVerse = activeVerse === index ? null : index;
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = entry.target.getAttribute('data-index');
						if (index !== null) {
							activeVerse = parseInt(index);
						}
					}
				});
			},
			{
				// This creates a detection window in the center of the screen
				rootMargin: '-40% 0px -40% 0px',
				threshold: 0
			}
		);

		const elements = document.querySelectorAll('.verse-card');
		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<main class="min-h-screen bg-base-100 font-sans text-base-content antialiased">
	<div class="mx-auto max-w-2xl px-4 py-12 lg:py-24">
		<header class="mb-16 text-center lg:mb-24">
			<p class="mb-2 text-xs font-bold tracking-[0.3em] text-primary uppercase">{m.shree()}</p>
			<h1 class="text-5xl font-black tracking-tighter lg:text-7xl">{m.title()}</h1>
			<div class="divider mx-auto w-24 divider-primary opacity-20"></div>
		</header>

		<section class="card mb-20 bg-base-200 shadow-sm lg:mb-32">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-xs font-bold tracking-widest uppercase opacity-50">
					{m.opening_doha_title()}
				</h2>
				<div class="space-y-6 text-xl leading-relaxed italic md:text-2xl">
					<div class="space-y-1">
						<p>{m.opening_doha_1()}</p>
						<p>{m.opening_doha_2()}</p>
						<p>{m.opening_doha_3()}</p>
						<p>{m.opening_doha_4()}</p>
					</div>
					<div class="divider mx-auto w-12"></div>
					<div class="space-y-1">
						<p>{m.opening_doha_5()}</p>
						<p>{m.opening_doha_6()}</p>
						<p>{m.opening_doha_7()}</p>
						<p>{m.opening_doha_8()}</p>
					</div>
				</div>
			</div>
		</section>

		<div class="flex flex-col">
			{#each verses as line, i (i)}
				<button
					onclick={() => toggleVerse(i)}
					data-index={i}
					class="verse-card group relative flex flex-col items-center py-8 transition-all duration-500 focus:outline-none active:scale-95
                    {activeVerse === i ? 'rounded-3xl bg-base-200 shadow-sm' : 'bg-transparent'}"
				>
					<div
						class="absolute inset-y-8 inset-s-4 w-1 rounded-full transition-all duration-500
                        {activeVerse === i
							? 'bg-secondary opacity-100'
							: 'bg-transparent opacity-0'}"
					></div>

					<span
						class="mb-4 badge badge-sm transition-all duration-300
                        {activeVerse === i
							? 'badge-secondary'
							: 'badge-ghost opacity-30 group-hover:opacity-100'}"
					>
						{(i + 1).toString().padStart(2, '0')}
					</span>

					<div class="max-w-md space-y-1 text-lg leading-relaxed font-medium md:text-xl">
						<p>{line[0]}</p>
						<p>{line[1]}</p>
					</div>
				</button>
			{/each}
		</div>

		<section class="card mt-32 bg-neutral text-neutral-content shadow-xl lg:mt-48">
			<div class="card-body items-center p-10 text-center">
				<h2 class="text-xs font-bold tracking-widest uppercase opacity-60">{m.concluding_doha_title()}</h2>
				<div class="mt-4 space-y-4 text-xl leading-relaxed font-bold italic md:text-2xl">
					<p>{m.concluding_doha_1()}</p>
					<p>{m.concluding_doha_2()}</p>
					<p>{m.concluding_doha_3()}</p>
					<p>{m.concluding_doha_4()}</p>
				</div>
				<div class="mt-10 flex gap-2 opacity-30">
					<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
					<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
					<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
				</div>
				<p class="mt-6 text-xs font-medium tracking-[0.4em] uppercase opacity-60">{m.jai_shri_ram()}</p>
			</div>
		</section>
	</div>
</main>
