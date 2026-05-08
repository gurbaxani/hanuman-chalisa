<script lang="ts">
	import { fly } from 'svelte/transition';
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { m } from '$lib/paraglide/messages';

	import { goto } from '$app/navigation';

	async function finishSetup() {
		const targetUrl = resolve(localizeHref('/read') as Pathname);
		goto(targetUrl);
	}
</script>

<div class="setup-container">
	<div class="content-wrapper">
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

			<button class="btn mt-8 w-full rounded-2xl btn-lg btn-primary" onclick={finishSetup}>
				{m.get_started()}
			</button>
		</div>
	</div>
</div>

<style>
	.setup-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background:
			radial-gradient(circle at top right, oklch(var(--p) / 0.05), transparent),
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
		min-height: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.app-icon-wrapper {
		font-size: 4rem;
		color: oklch(var(--p));
		margin-bottom: 1rem;
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.setup-title {
		font-size: 2.25rem;
		font-weight: 900;
		letter-spacing: -0.05em;
		line-height: 1.2;
		margin-bottom: 0.5rem;
		text-wrap: balance;
	}

	.setup-subtitle {
		font-size: 1.125rem;
		opacity: 0.6;
		font-weight: 500;
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
