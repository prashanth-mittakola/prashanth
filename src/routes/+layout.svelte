<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer class="flex flex-row items-center justify-center">
		<p class="hidden">©Footer</p>

		<div class="space-x-2 text-sm">
			<a href="mailto:mittakolaprashanth@gmail.com" class="text-blue-600 hover:underline">Email</a>
			<span class="text-gray-400">|</span>
			<a
				href="https://linkedin.com/in/yourprofile"
				target="_blank"
				class="text-blue-600 hover:underline">LinkedIn</a
			>
			<span class="text-gray-400">|</span>
			<a href="https://github.com/yourgithub" target="_blank" class="text-blue-600 hover:underline"
				>GitHub</a
			>
			<span class="text-gray-400">|</span>
			<a href="tel:+918866238837" target="_blank" class="text-blue-600 hover:underline">Phone</a>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
