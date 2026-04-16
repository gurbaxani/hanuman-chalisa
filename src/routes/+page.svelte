<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { locales, localizeHref, setLocale, getLocale } from '$lib/paraglide/runtime.js';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import type { Locale } from '$lib/paraglide/runtime.js';
	import { m } from '$lib/paraglide/messages';

	let step = $state(0);
	let selectedLocale = $state(getLocale());

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

	function handleLocaleSelect(locale: Locale) {
		selectedLocale = locale;
		// Update the cookie and runtime locale
		document.cookie = `PARAGLIDE_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
		setLocale(locale, { reload: false });
		step = 1;
	}

	async function finishSetup() {
		const targetUrl = resolve(localizeHref('/read', { locale: selectedLocale }) as Pathname);
		window.location.href = targetUrl;
	}

	let greetingIndex = $state(0);
	const greetings = [
    { title: 'Jai Shree Ram', subtitle: 'Please select your language' }, // English
    { title: 'जय श्री राम', subtitle: 'अपनी भाषा चुनें' }, // Hindi
    { title: 'जय श्री राम', subtitle: 'तुमची भाषा निवडा' }, // Marathi
    { title: 'જય શ્રી રામ', subtitle: 'તમારી ભાષા પસંદ કરો' }, // Gujarati
    { title: 'ஜெய் ஸ்ரீ ராம்', subtitle: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்' }, // Tamil
    { title: 'జై శ్రీ రామ్', subtitle: 'మీ భాషను ఎంచుకోండి' }, // Telugu
    { title: 'ಜೈ ಶ್ರೀ ರಾಮ್', subtitle: 'ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ' }, // Kannada
    { title: 'জয় শ্রী রাম', subtitle: 'আপনার ভাষা নির্বাচন করুন' }, // Bengali
    { title: 'जय श्री राम', subtitle: 'आपन भाषा चुनीं' } // Bhojpuri
	];

	onMount(() => {
		const interval = setInterval(() => {
			greetingIndex = (greetingIndex + 1) % greetings.length;
		}, 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="setup-container">
	<div class="content-wrapper">
		{#if step === 0}
			<div in:fade={{ duration: 400 }} class="step-card">
				<header class="setup-header">
					{#key greetingIndex}
						<div in:fade={{ duration: 600 }}>
							<h1 class="setup-title">{greetings[greetingIndex].title}</h1>
							<p class="setup-subtitle">{greetings[greetingIndex].subtitle}</p>
						</div>
					{/key}
				</header>

				<div class="language-grid">
					{#each locales as locale (locale)}
						<button
							class="language-button {selectedLocale === locale ? 'active' : ''}"
							onclick={() => handleLocaleSelect(locale)}
						>
							<div class="lang-tag">{locale.toUpperCase()}</div>
							<div class="lang-info">
								<span class="lang-native">{languageNames[locale]?.native || locale}</span>
								<span class="lang-english">{languageNames[locale]?.english || ''}</span>
							</div>
							{#if selectedLocale === locale}
								<div class="check-icon">
									<i class="ph-duotone ph-check-circle"></i>
								</div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		{:else if step === 1}
			<div in:fly={{ y: 20, duration: 500 }} class="step-card centered">
				<header class="setup-header">
					<div class="app-icon-wrapper">
						<i class="ph-duotone ph-hands-praying"></i>
					</div>
					<h1 class="setup-title">{m.title()}</h1>
					<p class="setup-subtitle">{m.setup_subtitle()}</p>
				</header>

				<div class="features-list">
					<div class="feature-item">
						<div class="feature-icon bg-primary/10 text-primary">
							<i class="ph-duotone ph-book-open-text"></i>
						</div>
						<div class="feature-text">
							<h3>{m.read()}</h3>
							<p>{m.feature_read_desc()}</p>
						</div>
					</div>

					<div class="feature-item">
						<div class="feature-icon bg-secondary/10 text-secondary">
							<i class="ph-duotone ph-lightbulb"></i>
						</div>
						<div class="feature-text">
							<h3>{m.learn()}</h3>
							<p>{m.feature_learn_desc()}</p>
						</div>
					</div>

					<div class="feature-item">
						<div class="feature-icon bg-accent/10 text-accent">
							<i class="ph-duotone ph-heart"></i>
						</div>
						<div class="feature-text">
							<h3>{m.feature_free_title()}</h3>
							<p>{m.feature_free_desc()}</p>
						</div>
					</div>
				</div>

				<button class="btn btn-primary btn-lg rounded-2xl w-full mt-8" onclick={finishSetup}>
					{m.get_started()}
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.setup-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(circle at top right, oklch(var(--p) / 0.05), transparent),
			radial-gradient(circle at bottom left, oklch(var(--s) / 0.05), transparent);
		padding: 1.5rem;
		font-family: var(--font-sans);
	}

	.content-wrapper {
		width: 100%;
		max-width: 480px;
	}

	.step-card {
		background: oklch(var(--b1) / 0.8);
		backdrop-filter: blur(20px);
		border-radius: 2.5rem;
		padding: 2.5rem;
		border: 1px solid oklch(var(--bc) / 0.1);
		box-shadow: 0 25px 50px -12px oklch(var(--bc) / 0.1);
	}

	.step-card.centered {
		text-align: center;
	}

	.setup-header {
		margin-bottom: 2.5rem;
		min-height: 5rem;
	}

	.app-icon-wrapper {
		font-size: 4rem;
		color: oklch(var(--p));
		margin-bottom: 1rem;
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}

	.setup-title {
		font-size: 2.5rem;
		font-weight: 900;
		letter-spacing: -0.05em;
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.setup-subtitle {
		font-size: 1.125rem;
		opacity: 0.6;
		font-weight: 500;
	}

	.language-grid {
		display: grid;
		gap: 0.75rem;
	}

	.language-button {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.25rem;
		background: oklch(var(--b2) / 0.5);
		border-radius: 1.25rem;
		border: 2px solid transparent;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		text-align: left;
		cursor: pointer;
		position: relative;
	}

	.language-button:hover {
		background: oklch(var(--b2));
		transform: scale(1.02);
	}

	.language-button.active {
		background: oklch(var(--p) / 0.1);
		border-color: oklch(var(--p));
	}

	.lang-tag {
		width: 2.5rem;
		height: 2.5rem;
		background: oklch(var(--b3));
		border-radius: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: 900;
		color: oklch(var(--bc) / 0.5);
	}

	.active .lang-tag {
		background: oklch(var(--p));
		color: oklch(var(--pc));
	}

	.lang-info {
		display: flex;
		flex-direction: column;
	}

	.lang-native {
		font-size: 1.125rem;
		font-weight: 700;
	}

	.lang-english {
		font-size: 0.75rem;
		opacity: 0.5;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.check-icon {
		margin-left: auto;
		font-size: 1.5rem;
		color: oklch(var(--p));
	}

	.features-list {
		display: grid;
		gap: 1.5rem;
		text-align: left;
	}

	.feature-item {
		display: flex;
		gap: 1.25rem;
	}

	.feature-icon {
		width: 3.5rem;
		height: 3.5rem;
		min-width: 3.5rem;
		border-radius: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.75rem;
	}

	.feature-text h3 {
		font-size: 1.25rem;
		font-weight: 800;
		margin-bottom: 0.25rem;
	}

	.feature-text p {
		font-size: 0.875rem;
		opacity: 0.7;
		line-height: 1.5;
	}
</style>
