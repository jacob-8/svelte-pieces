<script lang="ts">
  import { Story } from 'kitbook';
	import Switcher from '$lib/ui/Switcher.svelte';

	const items = [
		{
			title: 'Apps',
			key: 'APPS'
		},
		{
			title: 'Deploy',
			key: 'DEPLOY'
		},
		{
			title: 'Integrations',
			key: 'INTEGRATIONS'
		},
		{
			title: 'Settings',
			key: 'SETTINGS'
		}
	];

	let value = 'SETTINGS';
</script>

<Story>
	<Switcher headings={items} bind:value on:change={(e) => console.log('selected', e.detail.value)}>
		{value}
	</Switcher>
</Story>


<Story name="Scroll Into View">
	<div class="m-3 p-1 border" style="max-width: 300px;">
		<Switcher headings={items} bind:value on:change={(e) => console.log('selected', e.detail.value)}>
			{value}
		</Switcher>
	</div>
</Story>
