<script lang="ts">
	import type { Component } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { App } from './types';

	let props: {
		app: App;
		onFocus: (ix: number) => void;
		ix: number;
	} = $props();

	let offset: { x: number; y: number } = $state({ x: 0, y: 0 });
	let size: { x: number; y: number } = $state({ x: 500, y: 500 });
	let position: { x: number; y: number } = $state(props.app.position);

	let dragging = $state(false);
</script>

<!-- Dragging area -->
<div
	class="absolute inset-0 z-1000 bg-transparent"
	style={dragging ? '' : 'pointer-events: none;'}
	role="none"
	onmousemove={(ev) => {
		if (!dragging) return;
		position = { x: ev.clientX + offset.x, y: ev.clientY + offset.y };
	}}
	onmouseup={() => {
		dragging = false;
	}}
></div>

<!-- App -->
<div
	role="none"
	class="absolute flex flex-col overflow-hidden rounded-lg border border-stone-500 shadow-xl shadow-stone-600 transition-opacity"
	style={`transform: translate(${position.x}px, ${position.y}px);
			height: ${size.y}px; width: ${size.x}px;
			opacity: ${props.app.minimized ? '0; pointer-events: none' : '1'};
			`}
	onclick={() => {
		props.onFocus(props.ix);
	}}
	in:fade
	out:fade
>
	<div
		role="none"
		class="flex h-8 w-full justify-end gap-4 bg-stone-200 px-4"
		onmousedown={(ev) => {
			dragging = true;
			offset = { x: position.x - ev.clientX, y: position.y - ev.clientY };
			props.onFocus(props.ix);
		}}
		onmouseup={() => {
			dragging = false;
		}}
	></div>

	<div class="absolute right-0 z-10 mt-1 mr-4 flex gap-4">
		<button
			onclick={() => {
				props.app.minimized = !props.app.minimized;
				console.log('click');
			}}
			aria-label="minimize"
			class="my-auto h-5 w-5 rounded-full bg-yellow-300 align-middle hover:cursor-pointer"
		></button>
		<span class="my-auto h-5 w-5 rounded-full bg-green-500 align-middle"></span>
		<span class="my-auto h-5 w-5 rounded-full bg-red-700 align-middle"></span>
	</div>
	<props.app.app />
</div>
