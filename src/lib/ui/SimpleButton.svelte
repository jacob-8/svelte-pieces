<script lang="ts">
  export let onclick: (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLButtonElement;
    },
  ) => any = undefined;
  export let type: "button" | "submit" = "button";
  export let loading = false;
  export let active = false;
  export let disabled = false;
  export let title: string = undefined;

  $: disable = disabled || loading;

  async function runWithSpinner(event) {
    if (onclick) {
      loading = true;
      try {
        await onclick(event);
      } catch (err) {
        console.error(err);
        alert(err);
      }
      loading = false;
    }
  }
</script>

<button
  class:active
  class:disabled={disable}
  class={$$props.class}
  {type}
  {title}
  on:click={runWithSpinner}
  disabled={disable}
>
  <slot />
  {#if loading}
    <span
      class="i-gg-spinner animate-spin ml-1 -mr-1"
      style="vertical-align: -2px;"
    />
  {/if}
</button>
