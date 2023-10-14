<script lang="ts">
  import { Story } from 'kitbook';
	import Badge from '$lib/ui/Badge.svelte';
  const colors: ('red' | 'orange' | 'green' | 'black' | 'white' | 'primary')[] = [
    'primary',
    'red',
    'orange',
    'green',
    'black',
  ];</script>

<Story name="links">
	<Badge href="/">Link</Badge>
	<Badge href="/" onx={() => alert('x')}>link w/ action</Badge>
	<Badge href="/" target="_blank">External Link</Badge>
	<Badge href="https://livingdictionaries.app" onx={() => alert('x')} target="_blank"
		>livingdictionaries.app w/ action
	</Badge>
	<Badge href="https://livingdictionaries.app" onx={() => alert('x')} target="_blank"
		>livingdictionaries-really-long-url-to-see-how-wrapping-works-for-the-badge-in-the.applivingdictionaries-really-long-url-to-see-how-wrapping-works-for-the-badge-in-the.app
		w/ action
	</Badge>
</Story>

<Story name="button">
	<Badge onclick={() => alert('clicked')}>Clothes</Badge>
	<Badge onclick={() => alert('clicked')} onx={() => alert('x')}>Animals</Badge>
</Story>

<Story name="colors">
  <div class="text-center">
    <div>
      <Badge>primary</Badge>
      {#each colors as color}
			<Badge {color}>{color}</Badge>
			&nbsp;
      {/each}
    </div>
    <div>
      <Badge onx={() => alert('x')}>primary</Badge>
      {#each colors as color}
			<Badge {color} onx={() => alert('x')}>{color}</Badge>
			&nbsp;
      {/each}
    </div>
  </div>
</Story>
