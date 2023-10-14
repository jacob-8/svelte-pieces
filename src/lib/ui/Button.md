<script lang="ts">
  import { Story } from 'kitbook';
  import Button from '$lib/ui/Button.svelte';
  const colors: ('red' | 'orange' | 'green' | 'black' | 'white' | 'primary')[] = [
    'primary',
    'red',
    'orange',
    'green',
    'black',
    'white',
  ];
</script>

<Story name="Stacked menu">
  <div class="flex flex-col p-2 w-96">
    <Button href="/" form="menu">Home</Button>
    <Button href="/" form="menu" active={true}>About</Button>
    <Button href="/" form="menu">Settings</Button>
    <Button href="/" form="link">Terms</Button>
  </div>
</Story>

<Story name="External link size">
  <Button href="/" size="sm" target="_blank">sm link</Button>
  <Button href="/" target="_blank">link</Button>
  <Button href="/" size="lg" target="_blank">lg link</Button>
</Story>

<Story name="Forms">
  <Button href="/">Outline link</Button>
  <Button form="filled" href="/">filled link</Button>
  <Button form="simple" href="/">Simple link</Button>
</Story>

<Story name="colors">
  {#each colors as color}
    <div class="my-1 flex justify-around">
      <Button onclick={() => alert('Clicked')} {color}>{color}</Button>
      &nbsp;
      <Button href="/" {color} form="filled">{color}</Button>
      &nbsp;
      <Button onclick={() => alert('Clicked')} {color} form="simple">{color}</Button>
    </div>
  {/each}
</Story>

<Story name="white">
  <div class="bg-gray-900 p-2 text-center">
    <Button onclick={() => {}} color="white" form="filled" size="lg">filled white</Button>
  </div>
</Story>

<Story name="Loading state">
  <Button
    onclick={async () =>
      await new Promise((resolve) => {
        console.log('Clicked');
        setTimeout(resolve, 1000);
      })}>1-second Log click</Button>
  <Button onclick={() => alert('Should never show')} loading>Save</Button>
</Story>

<Story name="disabled click">
  <Button disabled onclick={() => alert('Should never show')}>Disabled button</Button>
</Story>

<Story name="lg click">
  <Button onclick={() => alert('Clicked')} size="lg">Alert me</Button>
</Story>

<Story name="ctrl click">
  <Button onclick={({ ctrlKey }) => console.log({ ctrlKey })}>Log click with Ctrl</Button>
</Story>

<Story name="text">
  <Button form="text">Log In</Button>
</Story>
