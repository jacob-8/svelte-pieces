<script lang="ts">
  import { fly } from 'svelte/transition'
  import { portal } from '../actions/portal'
  import { clickoutside } from '$lib/actions/clickoutside'

  /** `body` or `#direction` for example */
  export let portalTarget: string = undefined
  export let onclickoutside: (e: CustomEvent<boolean>) => any = undefined
</script>

{#if portalTarget}
  <div
    use:portal={portalTarget}
    use:clickoutside
    on:clickoutside={onclickoutside}
    transition:fly={{ y: -10, duration: 150 }}
    class="{$$props.class} absolute z-30 mt-2 w-48 rounded-md
      shadow-lg">
    <div class="sv-menu">
      <slot />
    </div>
  </div>
{:else}
  <div
    use:clickoutside
    on:clickoutside={onclickoutside}
    transition:fly={{ y: -10, duration: 150 }}
    class="{$$props.class} absolute z-30 mt-2 w-48 rounded-md
      shadow-lg">
    <div class="sv-menu">
      <slot />
    </div>
  </div>
{/if}

<style>
  .sv-menu {
    --at-apply: py-1 rounded-md bg-white flex flex-col;
  }
  :global(.sv-menu a),
  :global(.sv-menu label),
  :global(.sv-menu button) {
    --at-apply: text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150;
  }
</style>
