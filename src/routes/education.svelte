<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div id="education" class="education-section px-6">
	<h3 class="my-4 text-center text-2xl font-bold">Education</h3>
	<div class="my-4 flex flex-wrap gap-4">
		<Card.Root class="w-full">
			<Card.Header>
				<div class="flex flex-wrap gap-2">
					<Card.Title>College :</Card.Title>
					<Card.Description
						>S.R.K Institute Of Computer Science. Surat, Gujarat, India.</Card.Description
					>
				</div>
				<Card.Description><p>B.Sc Computer Science</p></Card.Description>
			</Card.Header>
		</Card.Root>
		<Card.Root class="w-full">
			<Card.Header>
				<div class="flex flex-wrap gap-2">
					<Card.Title>Secondary :</Card.Title>
					<Card.Description>Samrat Vidyala. Surat, Gujarat, India.</Card.Description>
				</div>
			</Card.Header>
		</Card.Root>
		<Card.Root class="w-full">
			<Card.Header>
				<div class="flex flex-wrap gap-2">
					<Card.Title>Primary :</Card.Title>
					<Card.Description
						>S.V.V High School. Kesamudram, Warangal, Telangana India.</Card.Description
					>
				</div>
			</Card.Header>
		</Card.Root>
	</div>
</div>
