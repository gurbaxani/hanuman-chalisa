<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
</script>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>

<div>
	<button onclick={() => setLocale('en')}>en</button>
	<button onclick={() => setLocale('hi')}>hi</button>
	<button onclick={() => setLocale('mr')}>mr</button>
	<button onclick={() => setLocale('gu')}>gu</button>
	<button onclick={() => setLocale('ta')}>ta</button>
	<button onclick={() => setLocale('te')}>te</button>
	<button onclick={() => setLocale('kn')}>kn</button>
	<button onclick={() => setLocale('bn')}>bn</button>
	<button onclick={() => setLocale('bho')}>bho</button>
</div>

<p>
	If you use VSCode, install the

	<a
		href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension"
		target="_blank">Sherlock i18n extension</a
	>

	for a better i18n experience.
</p>
