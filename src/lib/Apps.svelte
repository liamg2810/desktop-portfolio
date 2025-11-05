<script lang="ts">
	import type { Component } from 'svelte';
	import BlueApp from './BlueApp.svelte';
	import RedApp from './RedApp.svelte';

	type App = Component<{}>;

	let apps: App[] = $state([BlueApp, RedApp]);
</script>

{#each apps as app}
	{@const Component = app}
	<Component />
{/each}
