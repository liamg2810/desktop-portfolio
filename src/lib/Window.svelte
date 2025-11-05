<script lang="ts">
	import type { Component } from 'svelte';

	let props: { App: Component } = $props();
	let position: { x: number; y: number } = $state({ x: 100, y: 100 });
	let offset: { x: number; y: number } = $state({ x: 0, y: 0 });

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
	class="absolute flex h-24 w-24 resize flex-col"
	style={`transform: translate(${position.x}px, ${position.y}px)`}
>
	<div
		role="none"
		class="h-4 w-full bg-blue-800"
		onmousedown={(ev) => {
			dragging = true;
			offset = { x: position.x - ev.clientX, y: position.y - ev.clientY };
		}}
		onmouseup={() => {
			dragging = false;
		}}
	></div>

	<props.App />
</div>
