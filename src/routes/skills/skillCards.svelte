<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { data } from '$lib/db/data';
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<div id="skills" class="skills-section px-6">
	<h3 class="my-4 text-center text-2xl font-bold">Skills</h3>
	<div class="my-4 flex flex-wrap justify-center gap-2">
		{#each Object.entries(data.skillsWithDevIcons) as [title, src] (title)}
			<Card.Root class="flex w-full max-w-36 justify-center">
				<Card.Content class="flex justify-center gap-2">
					{#if src}
						<img class="max-w-16" {src} {title} />
					{:else}
						<p class="text-center">{title}</p>
					{/if}
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
