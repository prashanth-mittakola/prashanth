<script>
	import BubbleSort from '$lib/components/projects/bubbleSort/bubbleSort.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div id="projects" class="projects-section">
	<h3 class="my-4 text-center text-2xl font-bold">Sample Projects</h3>
	<div class="flex flex-col gap-2">
		<BubbleSort />
	</div>
	<div class="see-more-wrapper my-6 flex items-center justify-center">
		<a href="/projects">
			<Button variant="destructive">{'See More >'}</Button>
		</a>
	</div>
</div>
