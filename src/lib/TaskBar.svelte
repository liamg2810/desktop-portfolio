<script lang="ts">
	import { tick } from 'svelte';
	import type { App } from './types';

	let props: { apps: App[]; FocusApp: (ix: number) => void } = $props();
</script>

{#each props.apps as A, ix (A.id)}
	<button
		onclick={() => {
			props.FocusApp(ix);

			A.minimized = false;
		}}>{A.id}</button
	>
{/each}
