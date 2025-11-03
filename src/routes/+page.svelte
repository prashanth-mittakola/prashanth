<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Education from './education/education.svelte';
	import Experience from './experience/experience.svelte';
	import SkillCards from './skills/skillCards.svelte';
	import Projects from './projects/projects.svelte';

	import prashanthImage from '../public/images/prashanth.jpg';
	import certificatePythonImage from '../public/images/achievements/certificate-python.png';
	import certificateGoogleAdsFundamentalsImage from '/src/public/images/achievements/certificate-google-ads-fundamentals.png';
</script>

<svelte:head>
	<title>Prashanth Mittakola - Homepage</title>
	<meta name="description" content="Prashanth mittakola app" />

	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
</svelte:head>

<!-- Info -->
<div id="info-section" class="info-wrapper my-4 flex flex-col justify-around sm:flex-row">
	<div class="info-wrapper-text flex flex-col justify-center">
		<h1 class="title my-2 font-mono text-[clamp(2rem,2.5vw,3rem)] font-bold">
			Prashanth Mittakola
		</h1>

		<p class="my-2 text-lg">
			Hi, I'm a front-end developer passionate about building beautiful, accessible web experiences
			and performance optimization.
			<br />
			I transform ideas into elegant, functional web solutions.
		</p>
	</div>
	<div class="info-wrapper-image flex justify-center">
		<img
			src={prashanthImage}
			alt="Prashanth Mittakola"
			class="max-w-64 rounded-full border-5 border-cyan-600 transition-all hover:scale-110"
		/>
	</div>
</div>

<Separator class="my-4" />
<SkillCards enableCarousel={true} />

<Separator class="my-4" />
<Experience />

<Separator class="my-4" />
<Education />

<!-- I ♥️ -->
<Separator class="my-4" />
<div id="i-love" class="i-love-section">
	<h3 class="my-4 text-center text-2xl font-bold">I ♥️</h3>
	<Card.Root class="my-4 w-full">
		<Card.Description class="px-6"
			>Playing Chess, Music, Swimming, Learning new things...</Card.Description
		>
	</Card.Root>
</div>

<Separator class="my-4" />
<Projects />

<!-- contact -->
<Separator class="my-4" />
<div id="contact" class="contact-section">
	<h3 class="my-4 text-center text-2xl font-bold">Contact</h3>
	<Card.Root class="my-4 w-full">
		<Card.Header>
			<div class="flex flex-wrap gap-2">
				<Card.Title class="min-w-16">Email :</Card.Title>
				<Card.Description
					><a href="mailto:mittakolaprashanth@gmail.com" class=" hover:underline"
						>mittakolaprashanth@gmail.com</a
					></Card.Description
				>
			</div>
			<div class="flex flex-wrap gap-2">
				<Card.Title class="min-w-16">Mob &nbsp;&nbsp;:</Card.Title>
				<Card.Description
					><a href="tel:+918866238837" class=" hover:underline">+918866238837</a></Card.Description
				>
			</div>
		</Card.Header>
	</Card.Root>
</div>

<!-- achievements -->
<Separator class="my-4" />
<div id="achievements" class="achievements-section">
	<h3 class="my-4 text-center text-2xl font-bold">Achievements</h3>

	<Card.Root class="my-4 w-full px-8">
		<Card.Content class="flex flex-wrap justify-center gap-8">
			<div class="achivement-wrapper flex max-w-80 flex-col flex-wrap justify-around gap-4">
				<a target="_blank" href={certificatePythonImage}>
					<img src={certificatePythonImage} alt="certificate-python-prashanth-mittakola.png" />
				</a>
				<Card.Header class="text-center"><Card.Title>Python</Card.Title></Card.Header>
			</div>
			<div class="achivement-wrapper flex max-w-3xs flex-col flex-wrap justify-around gap-4">
				<a target="_blank" href={certificateGoogleAdsFundamentalsImage}>
					<img
						src={certificateGoogleAdsFundamentalsImage}
						alt="certificate-google-ads-fundamentals.png"
					/>
				</a>
				<Card.Header class="text-center"
					><Card.Title>Google Ads fundamentals</Card.Title></Card.Header
				>
			</div>
		</Card.Content>
	</Card.Root>
</div>
