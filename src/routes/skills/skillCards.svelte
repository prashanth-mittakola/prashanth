<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { data } from '$lib/db/data';

	const { enableCarousel } = $props();
</script>

{#snippet item(title, src)}
	<Card.Root class="flex w-full max-w-36 justify-center">
		<Card.Content class="flex min-h-[60px] items-center justify-center gap-2">
			{#if src}
				<img class="max-w-16" {src} {title} alt={title} />
			{:else}
				<p class="text-center">{title}</p>
			{/if}
		</Card.Content>
	</Card.Root>
{/snippet}

<!-- svelte-ignore a11y_missing_attribute -->
<div id="skills" class="skills-section">
	<h3 class="my-4 text-center text-2xl font-bold">Skills</h3>
	<div class="my-4 flex flex-wrap justify-center gap-2">
		{#if enableCarousel}
			<Carousel.Root
				opts={{
					align: 'center'
				}}
				class="w-[80%]"
			>
				<Carousel.Content>
					{#each Object.entries(data.skillsWithDevIcons) as [title, src] (title)}
						<Carousel.Item
							class="flex basis-1/2 items-center justify-center sm:basis-1/3 md:basis-1/3 lg:basis-1/5"
						>
							{@render item(title, src)}
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		{:else}
			{#each Object.entries(data.skillsWithDevIcons) as [title, src] (title)}
				{@render item(title, src)}
			{/each}
		{/if}
	</div>
</div>
