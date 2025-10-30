<script>
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="projects-page-wrapper">
	<h2 class="my-4 text-center text-2xl font-bold">Sample Projects</h2>
	<div class="proejects-wrapper text-center">
		<a href="/projects/bubble-sort" class="project">
			<Card.Root class="my-4 w-full">
				<p class="text-2xl font-bold text-cyan-600">1</p>
				<Card.Title class="text-center text-xl">Bubble sort</Card.Title>
				<Card.Content class="flex flex-col justify-center gap-4">
					Simple sorting algorithm that repeatedly swaps adjacent elements.
				</Card.Content>
			</Card.Root>
		</a>

		<a href="https://react-file-explorer-mp.vercel.app/" class="project">
			<Card.Root class="my-4 w-full">
				<p class="text-2xl font-bold text-cyan-600">2</p>
				<Card.Title class="text-center text-xl">File explorer</Card.Title>
				<Card.Content class="flex flex-col justify-center gap-4">
					A simple file explorer using react.js (custom hooks).
				</Card.Content>
			</Card.Root>
		</a>

		<a href="https://codepen.io/prashant-mittakola/full/XWjBvZq" class="project">
			<Card.Root class="my-4 w-full">
				<p class="text-2xl font-bold text-cyan-600">3</p>
				<Card.Title class="text-center text-xl">Apple earphones scroll effect</Card.Title>
				<Card.Content class="flex flex-col justify-center gap-4">
					Apple earphones scroll effect.
				</Card.Content>
			</Card.Root>
		</a>

		<a href="https://codepen.io/prashant-mittakola/full/abpRxLN" class="project">
			<Card.Root class="my-4 w-full">
				<p class="text-2xl font-bold text-cyan-600">4</p>
				<Card.Title class="text-center text-xl">Movies landing page</Card.Title>
				<Card.Content class="flex flex-col justify-center gap-4">Movies landing page.</Card.Content>
			</Card.Root>
		</a>

		<a href="https://next-js-13-movies-demo-app.vercel.app/" class="project">
			<Card.Root class="my-4 w-full">
				<p class="text-2xl font-bold text-cyan-600">5</p>
				<Card.Title class="text-center text-xl">Next.js + Framer Motion</Card.Title>
				<Card.Content class="flex flex-col justify-center gap-4">
					<div>
						Next.js V.13 +
						<a
							href="https://www.framer.com/motion/"
							target="_blank"
							style="text-decoration:underline; color:blue;"
						>
							Framer Motion
						</a>
						+
						<a
							href="https://www.themoviedb.org/"
							target="_blank"
							style="text-decoration:underline; color:blue;"
						>
							TheMovieDB API.
						</a>
					</div>
				</Card.Content>
			</Card.Root>
		</a>
	</div>
</div>
