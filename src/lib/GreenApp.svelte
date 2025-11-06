<script lang="ts">
	let count: number = $state(0);
</script>

<div class="h-full w-full bg-green-500">
	<button
		class=" hover:cursor-pointer"
		onclick={() => {
			count++;
		}}>Click Me</button
	>
	<p>{count}</p>
</div>
