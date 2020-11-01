<script>
	import { fade, fly } from 'svelte/transition';

	import EmojiDisplay from './EmojiDisplay.svelte';
	import EmojiDescription from './EmojiDescription.svelte';
	import Button from './Button.svelte';

	let isLoaded = false;

	let currentEmoji = '😀';
	const emojis = ['🤣', '😋', '🤗', '👽'];
	let mouse = {x: 0, y: 0};

	function randomizeEmoji() {
		return emojis[Math.floor(Math.random() * emojis.length)];
	}

	function handleRandomButton() {
		currentEmoji = randomizeEmoji();
	}

	setTimeout(function () {
		isLoaded = true;
	}, 2500);

	function handleMouseMove(event) {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
	}
</script>

<style>
	/* button {
		background-color: #8bd3dd;
		padding: 0.75em;
		border-radius: 0.25em;
		border: 2px solid #000;
		box-shadow: 0.4rem 0.4rem 0 #222;
	}
	button:hover {
		box-shadow: 0.25rem 0.25rem 0 #222;
		transition: all 0.4s ease 0s;
		background-color: #8bd;
	} */
	div {
		margin: 2em;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="/assets/css/terminal.min.css">
</svelte:head>

<div class="container" on:mousemove={handleMouseMove}>
	<p>The mouse position: {mouse.x} x {mouse.y}</p>
	<h1>Randomize Emoji</h1>
	<ul>
		{#each emojis as emoji}
		<li>{emoji}</li>
		{/each}
	</ul>
	{#if isLoaded === true}
		<div in:fly={{y:200, duration: 2000}} out:fade>
			<EmojiDisplay {currentEmoji}/>
			<!-- <EmojiDisplay currentEmoji={currentEmoji}/> -->
			<EmojiDescription />
			<!-- <div>Emoji Randomizer</div> -->
			<Button on:click|once={handleRandomButton} title={'🔁 Randomize'} />
		</div>
	{:else}
		<h2>Loading...</h2>
	{/if}

	<Button title={'Toggle'} on:click={() => (isLoaded = !isLoaded)} />

</div>
