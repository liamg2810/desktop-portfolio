<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<img src="background.png" alt="BG" class="absolute -z-1000 h-screen w-screen" />
