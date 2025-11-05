<script lang="ts">
	import type { Component, SvelteComponent } from 'svelte';

	let props: {
		App: Component;
		position: { x: number; y: number };
		onFocus: (ix: number) => void;
		ix: number;
	} = $props();

	let offset: { x: number; y: number } = $state({ x: 0, y: 0 });
	let size: { x: number; y: number } = $state({ x: 500, y: 500 });
	let position = $state(props.position);

	let dragging = $state(false);
</script>

<!-- Dragging area -->
<div
	class="absolute z-1000 h-screen w-screen bg-transparent"
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
	class="absolute flex flex-col"
	style={`transform: translate(${position.x}px, ${position.y}px); height: ${size.y}px; width: ${size.x}px`}
>
	<div
		role="none"
		class="h-8 w-full bg-blue-800"
		onmousedown={(ev) => {
			dragging = true;
			offset = { x: position.x - ev.clientX, y: position.y - ev.clientY };
			props.onFocus(props.ix);
		}}
		onmouseup={() => {
			dragging = false;
		}}
	></div>

	<props.App />
</div>
