<script lang="ts">
  import { fly } from 'svelte/transition'
  import { spring } from 'svelte/motion'
  import { createEventDispatcher, onMount } from 'svelte'
  import IntersectionObserver from '../functions/IntersectionObserver.svelte'

  const dispatch = createEventDispatcher<{ close: boolean }>()
  const close = () => dispatch('close')

  export let zIndex = 1
  export let width = 600
  export let duration = 200
  export let max = 10 // top: __% value so 0 is top of window, 100 is bottom.
  export let min = 85
  export let start = 40
  export let startType: 'percentage' | 'pixels' = 'percentage'
  let top = spring(start)
  let innerHeight = 500

  onMount(() => {
    if (startType === 'pixels') {
      const _top = 100 - (start / innerHeight) * 100
      top = spring(Math.max(max, _top))
    }
  })

  let firstTouchY: number
  let previousY: number
  let draggedTo: number
  let contentScrolledTop = true
  let contentScrolledBottom = false
  let ignoreContentDrag = false

  function touchStart(e: TouchEvent) {
    firstTouchY = e.touches[0].clientY
    previousY = firstTouchY
  }
  function touchMove(e: TouchEvent, fromContent = false) {
    if (ignoreContentDrag) return // don't resize sheet if user is scrolling content that still needs scrolled
    if (!draggedTo) draggedTo = $top
    const currentY = e.touches[0].clientY
    const movementY = currentY - previousY // touch equivalent to top += e.movementY mouse option
    previousY = currentY

    // determine if scrolling content that needs scrolled
    if (fromContent) {
      const direction = currentY - firstTouchY > 0 ? 'down' : 'up'
      if (direction === 'down' && !contentScrolledTop) return (ignoreContentDrag = true)
      if (direction === 'up' && !contentScrolledBottom) return (ignoreContentDrag = true)
    }
    e.preventDefault()

    const percentageChange = (100 * movementY) / innerHeight
    draggedTo += percentageChange
  }
  function touchEnd() {
    if (draggedTo > min) close()
    previousY = null
    draggedTo = Math.max(max, draggedTo)
    ignoreContentDrag = false
  }

  $: opacity = draggedTo > min ? (100 - draggedTo) / (100 - min) : 1
</script>

<svelte:window bind:innerHeight on:keydown={e => e.key === 'Escape' && close()} />

<div
  transition:fly={{ y: 500, duration }}
  style="top: {draggedTo
    ? Math.max(max - 1, draggedTo)
    : $top}%; opacity: {opacity}; z-index: {zIndex}"
  class="fixed inset-x-0 bottom-0 flex justify-center pointer-events-none">
  <div
    class="bg-white rounded-t-2xl flex flex-col relative pointer-events-auto"
    style="box-shadow: rgba(0, 0, 0, 0.12) 0px -1px 8px;  width: {width}px; max-width: 100%;"
    on:touchstart={touchStart}
    on:touchmove|preventDefault={touchMove}
    on:touchend={touchEnd}>
    <div class="absolute top-0 text-center w-full md:hidden pointer-events-none">
      <span class="i-ph-minus-bold text-5xl text-gray-300 -mt-4" />
    </div>

    <div class="font-semibold flex">
      {#if $$slots.header}
        <div class="p-2">
          <slot name="header" />
        </div>
      {/if}
    </div>
    <button
      type="button"
      on:click={close}
      class="ml-auto px-3 py-2 text-gray-500 hover:text-gray-800 rounded-xl absolute top-0 right-0 z-1">
      <span class="i-fa-solid-times mb-1" />
    </button>

    <div class="overflow-y-auto" on:touchmove|stopPropagation={e => touchMove(e, true)}>
      <div class="p-2">
        <IntersectionObserver
          on:intersected={() => (contentScrolledTop = true)}
          on:hidden={() => (contentScrolledTop = false)} />
        <slot />
        <IntersectionObserver
          on:intersected={() => (contentScrolledBottom = true)}
          on:hidden={() => (contentScrolledBottom = false)} />
      </div>
    </div>
  </div>
</div>
