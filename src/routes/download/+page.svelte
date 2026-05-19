<script lang="ts">
	const APP_URL = 'https://play.google.com/store/apps/details?id=com.ashwinig.hanumanji';
	const GITHUB_URL = 'https://github.com/gurbaxani/hanuman-chalisa';
	const WEB_APP_URL = 'https://hanumanji.ashwinig.com';
</script>

<svelte:head>
	<title>Download | Jai Shri Ram</title>
	<meta
		name="description"
		content="A simple, ad-free, and respectful way to engage with the Hanuman Chalisa. Designed for the modern devotee."
	/>
</svelte:head>

<main
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-base-100 px-4 py-20"
>
	<!-- Background Decorative Elements -->
	<div class="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden opacity-50">
		<div
			class="absolute -top-24 -left-24 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl"
		></div>
		<div
			class="absolute -right-24 -bottom-24 h-96 w-96 animate-pulse rounded-full bg-secondary/10 blur-3xl"
			style="animation-delay: 2s;"
		></div>
	</div>

	<div class="relative z-10 w-full max-w-3xl space-y-12 text-center">
		<!-- Hero Section -->
		<div class="space-y-6">
			<div class="group relative inline-block">
				<div
					class="absolute inset-0 scale-90 rounded-[2.5rem] bg-primary/20 blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:bg-primary/30"
				></div>
				<img
					src="/app-icon.png"
					alt="Hanuman Chalisa Icon"
					class="relative h-32 w-32 rounded-4xl border-4 border-base-100 shadow-2xl shadow-primary/20 transition-transform duration-500 group-hover:scale-105 md:h-40 md:w-40"
					fetchpriority="high"
				/>
			</div>

			<div class="space-y-4">
				<h1 class="text-4xl font-bold tracking-tight text-base-content md:text-6xl">
					Your <span class="text-primary italic">Spiritual</span> Journey, Reimagined.
				</h1>
				<p class="mx-auto max-w-xl text-lg leading-relaxed text-base-content/70 md:text-xl">
					A simple, ad-free, and respectful way to engage with the Hanuman Chalisa. Designed for the
					modern devotee.
				</p>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="flex flex-col items-center justify-center gap-6">
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row w-full max-w-xl">
				<a
					href={WEB_APP_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="group btn h-auto w-full sm:w-auto rounded-full px-8 py-4 shadow-xl shadow-secondary/20 transition-all btn-lg btn-secondary hover:shadow-secondary/30"
				>
					<div class="flex items-center gap-3 text-secondary-content">
						<i class="ph-duotone ph-globe text-3xl" aria-hidden="true"></i>
						<div class="text-left">
							<div class="mb-1 text-[10px] leading-none tracking-wider uppercase opacity-80">
								Launch the
							</div>
							<div class="text-xl leading-none font-bold">Web App</div>
						</div>
					</div>
					<i
						class="ph-duotone ph-arrow-right text-secondary-content transition-transform group-hover:translate-x-1"
						aria-hidden="true"
					></i>
				</a>

				<a
					href={APP_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="group btn h-auto w-full sm:w-auto rounded-full px-8 py-4 shadow-xl shadow-primary/20 transition-all btn-lg btn-primary hover:shadow-primary/30"
				>
					<div class="flex items-center gap-3 text-primary-content">
						<i class="ph-duotone ph-google-play-logo text-3xl" aria-hidden="true"></i>
						<div class="text-left">
							<div class="mb-1 text-[10px] leading-none tracking-wider uppercase opacity-80">
								Get it on
							</div>
							<div class="text-xl leading-none font-bold">Google Play</div>
						</div>
					</div>
					<i
						class="ph-duotone ph-arrow-right text-primary-content transition-transform group-hover:translate-x-1"
						aria-hidden="true"
					></i>
				</a>
			</div>

			<a
				href={GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="group btn rounded-full border border-base-content/10 bg-base-200/50 px-8 btn-ghost backdrop-blur-sm btn-lg hover:border-base-content/20"
			>
				<i class="ph-duotone ph-github-logo text-2xl" aria-hidden="true"></i>
				<span>Source Code</span>
				<i
					class="ph-duotone ph-arrow-up-right opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					aria-hidden="true"
				></i>
			</a>
		</div>

		<!-- Feature Grid -->
		<div class="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3">
			<div
				class="group space-y-4 rounded-3xl border border-base-300/50 bg-base-200/40 p-6 text-left backdrop-blur-sm transition-colors hover:border-primary/20"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-content"
				>
					<i class="ph-duotone ph-airplane-tilt text-2xl" aria-hidden="true"></i>
				</div>
				<h3 class="text-lg font-bold">Offline Only</h3>
				<p class="text-sm text-base-content/60">
					Read and listen anywhere, anytime. No internet required once downloaded.
				</p>
			</div>

			<div
				class="group space-y-4 rounded-3xl border border-base-300/50 bg-base-200/40 p-6 text-left backdrop-blur-sm transition-colors hover:border-primary/20"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-content"
				>
					<i class="ph-duotone ph-eye-slash text-2xl" aria-hidden="true"></i>
				</div>
				<h3 class="text-lg font-bold">Zero Distractions</h3>
				<p class="text-sm text-base-content/60">
					No ads, no trackers. Your devotion in a clean, focused interface.
				</p>
			</div>

			<div
				class="group space-y-4 rounded-3xl border border-base-300/50 bg-base-200/40 p-6 text-left backdrop-blur-sm transition-colors hover:border-primary/20"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-all duration-500 group-hover:bg-secondary group-hover:text-secondary-content"
				>
					<i class="ph-duotone ph-translate text-2xl" aria-hidden="true"></i>
				</div>
				<h3 class="text-lg font-bold">Multilingual Support</h3>
				<p class="text-sm text-base-content/60">
					Beautiful typography for Devanagari, Telugu, Tamil, Kannada, and more scripts.
				</p>
			</div>
		</div>

		<!-- Trust Footer -->
		<div class="border-t border-base-content/5 pt-12">
			<p class="flex items-center justify-center gap-2 text-sm text-base-content/40">
				Built with <i class="ph-duotone ph-heart text-secondary" aria-hidden="true"></i> in Bharat, using tech developed across the world.
			</p>
		</div>
	</div>
</main>

<style>
	/* Custom animations for the background blobs */
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1) translate(0, 0);
		}
		50% {
			transform: scale(1.1) translate(20px, -20px);
		}
	}

	:global(body) {
		background-color: var(--color-base-100);
	}
</style>
