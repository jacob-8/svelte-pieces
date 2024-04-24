<script lang="ts">
  import Button from '../ui/Button.svelte'
  import ShowHide from '../functions/ShowHide.svelte'

  export let obj: Record<string, any>

  function string_and_colorize(obj: Record<string, any>): string {
    return JSON.stringify(obj, null, 2)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
        (match) => {
          let color = 'darkorange' // number'
          if (match.startsWith('"')) {
            if (match.endsWith(':'))
              color = 'red' // key
            else
              color = 'green' // string
          } else if (/true|false/.test(match)) {
            color = 'blue' // boolean
          } else if (/null/.test(match)) {
            color = 'magenta' // null
          }
          return `<span style="color:${color}">${match}</span>`
        },
      )
  }
</script>

<ShowHide let:show let:toggle>
  <Button onclick={toggle} form="simple" color="black">
    <span class="i-fa-solid-code" />
  </Button>
  {#if show}
    <div class="fixed inset-0 bg-white z-100 overflow-y-auto">
      <button type="button" class="px-3 py-2 bg-gray-100 text-gray-700" on:click={toggle}>Hide</button>
      <pre class="whitespace-pre-wrap text-xs">{@html string_and_colorize(obj)}</pre>
    </div>
  {/if}
</ShowHide>
