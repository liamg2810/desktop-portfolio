<script lang="ts">
	import type { Component } from 'svelte';
	import Window from './AppWindow.svelte';
	import BlueApp from './BlueApp.svelte';
	import RedApp from './RedApp.svelte';

	type App = { app: Component; id: string };

	let apps: App[] = $state([
		{ app: BlueApp, id: 'blue' },
		{ app: RedApp, id: 'red' }
	]);

	function FocusApp(ix: number) {
		apps = [...apps.slice(0, ix), ...apps.slice(ix + 1), apps[ix]];
		apps = apps;
	}
</script>

{#each apps as A, ix (A.id)}
	<Window {ix} onFocus={FocusApp} App={A.app} position={{ x: Math.random() * 500, y: 50 }} />
{/each}
