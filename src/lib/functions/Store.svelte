<script lang="ts">
  import { writable } from 'svelte/store'

  type T = $$Generic
  export let startWith: T = undefined
  const store = writable(startWith || null)
</script>

<!-- @component Example of how to document a component -->
<slot set={store.set} store={$store} />
