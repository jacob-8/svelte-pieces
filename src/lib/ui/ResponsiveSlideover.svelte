<script lang="ts">
  import Slideover from './Slideover.svelte';

  // Slideover props
  export let zIndex = 60;
  export let duration = 200;
  export let side: 'left' | 'right' = 'right';
  export let widthRem = 16;
  export let maxWidthPercentage = 70;

  export let showWidth: 'sm' | 'md' | 'lg' | 'xl';
  export let desktopClasses = '';
  export let mobileClasses = '';

  export let open = false;
  export let on_close: () => void = undefined
</script>

<div
  class:sm:block={showWidth === 'sm'}
  class:md:block={showWidth === 'md'}
  class:lg:block={showWidth === 'lg'}
  class:xl:block={showWidth === 'xl'}
  class="hidden {desktopClasses}"
>
  {#if $$slots.desktopTitle}
    <h3 class="text-lg font-medium text-gray-900 p-3 border-b border-gray-300">
      <slot name="desktopTitle" />
    </h3>
  {/if}
  <slot name="desktopHeading" />
  <slot name="heading" />
  <slot />
  <!-- <slot name="desktop" /> -->
</div>

{#if open}
  <div
    class:lt-sm:block={showWidth === 'sm'}
    class:lt-md:block={showWidth === 'md'}
    class:lt-lg:block={showWidth === 'lg'}
    class:lt-xl:block={showWidth === 'xl'}
    class="hidden {mobileClasses}"
  >
    <Slideover
      {duration}
      {zIndex}
      {side}
      {widthRem}
      {maxWidthPercentage}
      on:close={on_close}
    >
      <svelte:fragment slot="heading">
        {#if $$slots.mobileTitle}
          <div class="flex items-start justify-between border-b border-gray-300">
            <h3 class="text-lg font-medium text-gray-900 p-3" id="modal-headline">
              <slot name="mobileTitle" />
            </h3>
            <button
              on:click={on_close}
              type="button"
              class="text-gray-400 px-3 py-4 flex hover:text-gray-500 focus:outline-none
    focus:text-gray-500 transition ease-in-out duration-150"
              aria-label="Close"
            >
              <span class="i-fa-solid-times text-lg" /></button
            >
          </div>
        {/if}
        <slot name="mobileHeading" />
        <slot name="heading" />
      </svelte:fragment>
      <slot />
      <!-- <slot name="mobile" /> -->
    </Slideover>
  </div>
{/if}
