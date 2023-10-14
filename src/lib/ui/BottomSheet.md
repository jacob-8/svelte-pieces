<script lang="ts">
  import { Button } from '$lib';
  import ShowHide from '$lib/functions/ShowHide.svelte';
  import BottomSheet from '$lib/ui/BottomSheet.svelte';
  import { Story } from 'kitbook';
</script>

<!-- prettier-ignore -->
# Bottom Sheet

- draggable only by touch
- `max`, `start`, and `min` are percentages from the top, so a max of 10 will let the sheet be dragged up to a height of 90%.

<Story
  knobs={{ max: 10, start: 40, contentHeight: 500, duration: 150 }}
  let:knobs={{ max, start, contentHeight, duration }}
  let:set
>
  <ShowHide let:show let:toggle>
    <Button size="sm" onclick={toggle} form="filled">Toggle Show</Button>
    <Button size="sm" onclick={() => set('max', 10)} active={max === 10}>Top max</Button>
    <Button size="sm" onclick={() => set('max', 40)} active={max === 40}>Middle max</Button>
    <Button size="sm" onclick={() => set('max', 85)} active={max === 85}>Bottom max</Button>
    <Button size="sm" onclick={() => set('start', 10)} active={start === 10}>Top Start</Button>
    <Button size="sm" onclick={() => set('start', 40)} active={start === 40}>Middle Start</Button>
    <Button size="sm" onclick={() => set('start', 85)} active={start === 85}>Bottom Start</Button>
    <Button size="sm" onclick={() => set('contentHeight', 500)} active={contentHeight === 500}
      >Tall Content</Button
    >
    <Button size="sm" onclick={() => set('contentHeight', 250)} active={contentHeight === 250}
      >Med Content</Button
    >
    <Button size="sm" onclick={() => set('contentHeight', 100)} active={contentHeight === 100}
      >Short Content</Button
    >
    {#if show}
      <BottomSheet on:close={toggle} {max} {start} {duration}>
        <div slot="header">
          Title
          <Button
            size="sm"
            form="simple"
            onclick={() => set('contentHeight', 250)}
            active={contentHeight === 250}>Med Content</Button
          >
          <Button
            size="sm"
            form="simple"
            onclick={() => set('contentHeight', 100)}
            active={contentHeight === 100}>Short Content</Button
          >
        </div>
        <p class="bg-gray-100" style="height: {contentHeight}px">Content</p>
      </BottomSheet>
    {/if}
  </ShowHide>
</Story>

<Story name="no header">
  <ShowHide let:show let:toggle>
    <Button size="sm" onclick={toggle} form="filled">Toggle Show</Button>
    {#if show}
      <BottomSheet on:close={toggle}>
        <p class="bg-gray-100" style="height: 250px">Content</p>
      </BottomSheet>
    {/if}
  </ShowHide>
</Story>

<Story name="set pixels">
  <ShowHide let:show let:toggle>
    <Button size="sm" onclick={toggle} form="filled">Toggle Show</Button>
    {#if show}
      <BottomSheet startType="pixels" start={400} on:close={toggle}>
        <p class="bg-gray-100" style="height: 250px">Content</p>
      </BottomSheet>
    {/if}
  </ShowHide>
</Story>

<!-- prettier-ignore -->

## Notes
- ~~auto-resizes to fit content, up until max or start value (whichever is the larger restriction in terms of percentage distance from top)~~ (janky on mobile, but see BottomSheet.svelte file history if ever wanting to look at the code)
- It doesn't make sense to set the start to a greater value than max.
- Press escape to close

## Inspiration 
- native apps (e.g. Chrome word definition lookup when holding down on a word) 
- [cupertino-pane](https://github.com/roman-rr/cupertino-pane) 
- [react-spring-bottom-sheet](https://github.com/stipsan/react-spring-bottom-sheet) 
- splitpane 
- hammerJS 
- [interact.js](https://github.com/taye/interact.js)
