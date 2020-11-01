import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'visitor'
	}
});

export default app;