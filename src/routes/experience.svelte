<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { data } from '$lib/db/data';
</script>

<div id="experience" class="experience-section px-6">
	<h3 class="my-4 text-center text-2xl font-bold">Experiences</h3>
	<div class="my-4 flex flex-wrap gap-4">
		{#each data.work as work, i (i)}
			{#if work?.company || work?.title}
				<Card.Root class="w-full">
					<Card.Header>
						<div class="flex flex-wrap gap-2">
							<Card.Title>{work?.company || work?.title}:</Card.Title>
							<Card.Description>{work.address} ({work.year})</Card.Description>
						</div>
						<Card.Description class="role-wrapper flex flex-wrap gap-2"
							><b>Technologies:</b> ({work.technologies})</Card.Description
						>
						<Card.Description class="role-wrapper flex flex-wrap gap-2"
							><b>Role:</b> {work.role}</Card.Description
						>
					</Card.Header>
					<Card.Content class="ml-4">{@html work.description}</Card.Content>
				</Card.Root>
			{/if}
		{/each}
	</div>
</div>
