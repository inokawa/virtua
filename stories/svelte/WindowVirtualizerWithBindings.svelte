<script lang="ts">
	import { WindowVirtualizer } from '../../src/svelte';
	import { type VirtualStore, type WindowScroller } from '../../src/core';

	const sizes = [20, 40, 180, 77];

	const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 5]!);

	let store: VirtualStore | undefined = $state();
	let scroller: WindowScroller | undefined = $state();

	let index: number = $state(0);
</script>

<div
	style="display: flex; position: fixed; z-index: 500; font-family: sans-serif; left: 0px; right: 0px; top: 0px; padding: 10px; gap: 10px; background: white;"
>
	<button
		onclick={(e) => {
			const itemSize = store?.$getItemsLength();
			alert(`Items count: ${itemSize}`);
		}}
	>
		Get Items Count
	</button>
	<button
		style="margin-right: auto;"
		onclick={(e) => {
			const cache = store?.$getCacheSnapshot();
			console.log('Cache', cache);
			alert('Cache printed to console');
		}}
	>
		Print Cache to Console
	</button>

	<input type="number" bind:value={index} min={0} />
	<button
		onclick={(e) => {
			const itemSize = scroller?.$scrollToIndex(index);
			console.log(itemSize);
		}}
	>
		Scroll to {index}
	</button>
</div>

<div style="padding: 200px 100px;">
	<div style="border: solid 1px gray;">
		<WindowVirtualizer {data} getKey={(_, i) => i} bind:store bind:scroller>
			{#snippet children(item, index)}
				<div
					style="
						padding: 10px;
						display: flex;
						align-items: center;
						justify-content: space-between;
            height: {item}px;
            background: white;
            border-bottom: solid 1px #ccc;
          "
				>
					{index}
					<button
						onclick={(e) => {
							const itemSize = store?.$getItemSize(index);
							alert(`Item size: ${itemSize}px`);
						}}
					>
						Get Item Size
					</button>
				</div>
			{/snippet}
		</WindowVirtualizer>
	</div>
</div>
