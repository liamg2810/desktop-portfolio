<script lang="ts">
	import { tick } from 'svelte';
	import type { App } from './types';

	let props: { apps: App[]; FocusApp: (ix: number) => void } = $props();
</script>

<div
	class="absolute bottom-0 left-1/2 z-100 flex w-1/2 -translate-x-1/2 -translate-y-1/2 gap-2 rounded-lg border-2 border-slate-100 bg-slate-800 px-4 py-2"
>
	{#each props.apps as A, ix (A.id)}
		<button
			class={`flex w-20 flex-col items-center rounded-lg border p-2 text-white ${A.minimized ? '' : 'after:block after:aspect-square after:h-2 after:rounded-full after:bg-slate-400'}`}
			onclick={() => {
				props.FocusApp(ix);

				A.minimized = false;
			}}>{A.id}</button
		>
	{/each}
</div>
