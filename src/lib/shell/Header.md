<script>
  import { Story } from 'kitbook';
  import Button from '$lib/ui/Button.svelte';
  import Header from '$lib/shell/Header.svelte';
</script>

<Story name="signed in | Home | menu">
  <div style="margin-bottom: 150px;">
    <Header user={{ uid: '123', displayName: 'John', email: 'john1234@gmail.com' }} />
  </div>
</Story>

<Story name="signed out | non-home long name">
  <Header>About page that has a Really Quite Ridiculously Long Page Name</Header>
</Story>

<Story name="signed out | has menu">
  <Header>
    <div slot="left" class="overflow-x-auto md:overflow-hidden md:overflow-ellipsis">
      <Button form="text" onclick={() => console.log('menu opened')} class="!text-lg !font-semibold"
        >= Bahasa Lani</Button>
    </div>
  </Header>
</Story>
