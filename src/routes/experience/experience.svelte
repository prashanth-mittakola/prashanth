<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { data } from '$lib/db/data';
</script>

<div id="experience" class="experience-section">
	<h3 class="my-4 text-center text-2xl font-bold">Experiences</h3>
	<div class="my-4 flex flex-wrap gap-4">
		{#each data.work as work, i (i)}
			{#if work?.company || work?.title}
				<Card.Root class="w-full">
					<Card.Content>
						<div class="my-2 flex flex-wrap gap-2">
							<span class="font-semibold">{work?.company || work?.title}:</span>
							<span class="text-sm text-muted-foreground">{work.address} ({work.year})</span>
						</div>
						<div class="my-2 flex flex-wrap gap-2">
							<span class="font-semibold">Technologies:</span>
							<span class="text-sm text-muted-foreground">({work.technologies})</span>
						</div>
						<div class="my-2 flex flex-wrap gap-2">
							<span class="font-semibold">Role:</span>
							<span class="text-sm text-muted-foreground">({work.role})</span>
						</div>
						<Card.Description class="my-2">{@html work.description}</Card.Description>
					</Card.Content>
				</Card.Root>
			{/if}
		{/each}
	</div>
</div>
