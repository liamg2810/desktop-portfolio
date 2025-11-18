<script lang="ts">
	import AppWindow from './AppWindow.svelte';
	import BlueApp from './BlueApp.svelte';
	import GreenApp from './GreenApp.svelte';
	import RedApp from './RedApp.svelte';
	import TaskBar from './TaskBar.svelte';
	import { type App } from './types';

	let apps: App[] = $state([
		{ app: BlueApp, id: 'blue', minimized: false, position: { x: 250, y: 250 } },
		{ app: RedApp, id: 'red', minimized: true, position: { x: 250, y: 300 } },
		{ app: GreenApp, id: 'green', minimized: false, position: { x: 250, y: 350 } }
	]);

	let ordererdApps: App[] = $state(apps);

	function FocusApp(ix: number) {
		const i = ordererdApps.findIndex((a) => a.id === apps[ix].id);
		ordererdApps = [...ordererdApps.slice(0, i), ...ordererdApps.slice(i + 1), ordererdApps[i]];
	}
</script>

{#each ordererdApps as A, oix (A.id)}
	{@const ix = apps.findIndex((a) => a.id === A.id)}
	<AppWindow {ix} onFocus={FocusApp} focusedApp={oix === ordererdApps.length - 1} app={apps[ix]} />
{/each}

<TaskBar {apps} {FocusApp} />
