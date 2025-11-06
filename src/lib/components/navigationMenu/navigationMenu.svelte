<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import {
		Box,
		BriefcaseBusiness,
		FileUser,
		GraduationCap,
		Menu,
		Shapes,
		SunMoon,
		House
	} from '@lucide/svelte';

	import { mode, toggleMode as _toggleMode } from 'mode-watcher';

	import resume from '../../../public/images/Mittakola-Prashanth-Resume.pdf';

	const toggleMode = () => {
		_toggleMode();
		document.documentElement.classList.toggle('dark');
	};

	const navBarData = {
		items: [
			{
				title: 'Home',
				icon: House,
				href: '/'
			},
			{
				title: 'Skills',
				icon: Shapes,
				href: '/skills'
			},
			{
				title: 'Experience',
				icon: BriefcaseBusiness,
				href: '/experience'
			},
			{
				title: 'Projects',
				icon: Box,
				href: '/projects'
			},
			{
				title: 'Education',
				icon: GraduationCap,
				href: '/education'
			},
			{
				title: 'Resume',
				icon: FileUser,
				href: resume,
				download: 'Mittakola-Prashanth-Resume.pdf',
				target: '_blank'
			}
		]
	};

	let open = $state(false);
	afterNavigate((e) => {
		open = false;
	});
</script>

<nav>
	{#snippet navItems()}
		{#each navBarData.items as { download, target, ...item }}
			<a href={item.href} {download} {target}>
				<Button class="flex flex-row items-center justify-center gap-2" variant="ghost">
					<span class="text-xl"><item.icon /></span>
					<span>{item.title}</span>
				</Button>
			</a>
		{/each}
	{/snippet}

	<div
		class="absolute top-0 right-0 left-0 z-10 flex h-[50px] w-full flex-row items-center border-1 border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8"
		style="--bg : hsl(var(--background) / 0.5)"
	>
		<!-- larger than sm -->
		<div class="hidden w-full flex-row items-center sm:hidden md:flex">
			<a href={'/'}>
				<h2 class="flex items-center justify-center font-mono text-[clamp(1rem,2vw,2rem)]">
					<span class="mr-2 text-xl">{`</>`}</span>
					<span>{'Prashanth Mittakola'}</span>
				</h2>
			</a>
			<div class="flex flex-[2] flex-row items-center justify-center gap-2">
				{@render navItems()}
			</div>
			<Button onclick={toggleMode} variant="ghost">
				<span class="text-xl">
					<SunMoon />
				</span>
			</Button>
		</div>

		<!-- sm -->
		<div class="flex w-full flex-row items-center sm:flex md:hidden">
			<a href={'/'} class="flex flex-[2] flex-row items-center justify-center">
				<h2 class="flex items-center justify-center font-mono text-[clamp(1rem,2vw,2rem)]">
					<span class="mr-2">{`</>`}</span>
					<span>{'Prashanth Mittakola'}</span>
				</h2>
			</a>
			<div class="flex flex-row items-center justify-end">
				<Sheet.Root bind:open onOpenChange={(val) => (open = val)}>
					<Sheet.Trigger>
						<Menu />
					</Sheet.Trigger>
					<Sheet.Content>
						<Sheet.Header class="p-2">
							<Sheet.Title class="hidden">Menu</Sheet.Title>
						</Sheet.Header>
						{@render navItems()}
						<Separator />
						<a href={'#'}>
							<Button
								onclick={toggleMode}
								class="flex flex-row items-center justify-center gap-2"
								variant="ghost"
							>
								<span class="text-xl"><SunMoon /></span>
								<span>{mode.current}</span>
							</Button>
						</a>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}
</style>
