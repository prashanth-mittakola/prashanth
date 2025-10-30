<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	const barCount: number = 50;
	let numArr = $state(generateRandomNumbers(barCount));

	let isSortingInProcess = $state(false);
	let isResetInProcess = $state(false);

	function sleep(ms: number) {
		return new Promise((res) => setTimeout(res, ms));
	}

	function generateRandomNumbers(length: number) {
		return Array.from({ length }, () => Math.ceil(Math.random() * 100));
	}

	async function bubbleSort() {
		let n = barCount;
		let promiseArr = [];
		isSortingInProcess = true;
		while (n > 0) {
			let lastSwappedIndex = 0;
			for (let i = 1; i < n; i++) {
				if (isResetInProcess) n = 0;
				if (numArr[i - 1] > numArr[i]) {
					[numArr[i - 1], numArr[i]] = [numArr[i], numArr[i - 1]];
					lastSwappedIndex = i;
					await sleep(1);
				}
			}
			promiseArr.push(Promise.resolve);
			n = lastSwappedIndex;
		}
		await Promise.all(promiseArr);
		isSortingInProcess = false;
	}

	async function resetArray() {
		numArr = Array.from({ length: barCount }, () => Math.ceil(Math.random() * 100));
		if (isSortingInProcess) {
			isResetInProcess = true;
			await sleep(100);
			isResetInProcess = false;
		}
	}
</script>

<div class="bubble-sort-wrapper">
	<Card.Root class="w-full">
		<Card.Title class="text-center text-xl">Bubble sort :</Card.Title>
		<Card.Content class="flex flex-col justify-center gap-4">
			<div id="graph">
				{#each numArr as num, index (index)}
					<div class="graph-bar" style="width: 1%; height: {num}%;"></div>
					{#if index < numArr.length - 1}
						<div class="graph-divider" style="width: 0.5%;"></div>
					{/if}
				{/each}
			</div>

			<div class="buttons flex flex-wrap justify-center gap-4">
				<Button onclick={bubbleSort}>Start Sorting</Button>
				<Button onclick={resetArray}>Reset Array</Button>
			</div>
		</Card.Content>
	</Card.Root>
</div>

<style>
	.bubble-sort-wrapper {
		padding: 2%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.buttons {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;
	}

	.graph-bar {
		transition: height 0.2s ease;
		background-color: aqua;
	}

	#graph {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
		height: 60vh;
		/* width: 80vw; */
	}
</style>
