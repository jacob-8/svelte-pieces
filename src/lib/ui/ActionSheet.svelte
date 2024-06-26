<script lang="ts">
  export let fullscreen = false
  export let open = false
  export let threshold = 0.3
  export let backdropOpacity = 0.5
  export let speed = 0.2

  let dialog
  let backdrop
  let startX
  let startY
  let direction
  const touch = e => (e.changedTouches ? e.changedTouches[0] : e)
  const deltaX = e => startX - touch(e).clientX
  const deltaY = e => startY - touch(e).clientY

  const touchStart = (e) => {
    startX = touch(e).clientX
    startY = touch(e).clientY
  }
  const touchMove = (e) => {
    if (!direction) {
      direction = Math.abs(deltaY(e)) > Math.abs(deltaX(e)) ? 'vertical' : 'horizontal'
    }
    if (deltaY(e) < 0 && direction === 'vertical') {
      dialog.style.setProperty('--b', `${deltaY(e)}px`)
      backdrop.style.setProperty('--o', (1 + deltaY(e) / dialog.clientHeight) * backdropOpacity)
    }
  }
  const touchEnd = (e) => {
    if (direction === 'vertical') {
      open = -deltaY(e) / dialog.clientHeight < threshold
    }
    startY = null
    direction = null
  }

  $: if (dialog && backdrop) {
    dialog.style.setProperty('--s', `${speed}s`)
    backdrop.style.setProperty('--s', `${speed}s`)
  }
  $: if (dialog && backdrop && !direction) {
    dialog.style.setProperty('--b', open ? '0px' : `${-dialog.clientHeight}px`)
    backdrop.style.setProperty('--o', open ? backdropOpacity : 0)
  }
</script>

<div
  bind:this={backdrop}
  class="backdrop"
  data-smooth={!startY}
  data-open={open}
  on:click={() => (open = false)} />

<div
  bind:this={dialog}
  class="root sheet-shadow pt-20"
  data-fullscreen={fullscreen}
  data-smooth={!startY}
  on:touchstart|self|preventDefault={touchStart}
  on:touchmove|self|preventDefault={touchMove}
  on:touchend|self|preventDefault={touchEnd}>
  <slot />
</div>

<style>
  .root {
    position: fixed;
    background-color: #ffffff;
    width: 100vw;
    overflow-x: auto;
    left: 0px;
    bottom: var(--b, -100%);
    z-index: 7;
  }
  .root[data-fullscreen='true'] {
    height: 100%;
  }
  .root[data-smooth='true'] {
    transition: bottom calc(var(--f, 1) * var(--s, 0s)) ease-in-out;
  }
  .backdrop {
    pointer-events: none;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100%;
    background-color: #212121;
    opacity: var(--o, 0);
    z-index: 6;
  }
  .backdrop[data-smooth='true'] {
    transition: opacity calc(var(--f, 1) * var(--s, 0s)) ease-in-out;
  }
  .backdrop[data-open='true'] {
    pointer-events: all;
  }
  .sheet-shadow {
    box-shadow: 0px -2px 8px #21212144, 0px 0px 2px #21212144;
  }
</style>
