<script lang="ts">
	import NavigationMenu from '$lib/components/navigationMenu/navigationMenu.svelte';
</script>

<header>
	<NavigationMenu />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 50px;
		position: sticky;
		top: 0;
		z-index: 9;
	}
</style>
