<script lang="ts">
	import type { Component } from 'svelte';
	import BlueApp from './BlueApp.svelte';
	import RedApp from './RedApp.svelte';
	import Window from './Window.svelte';

	type App = Component<{}>;

	let apps: App[] = $state([BlueApp, RedApp]);
</script>

{#each apps as A}
	<Window App={A} position={{ x: Math.random() * 500, y: 50 }} />
{/each}
