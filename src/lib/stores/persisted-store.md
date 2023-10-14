<script lang="ts">
  import { createPersistedStore } from '$lib';
  import Button from '$lib/ui/Button.svelte';
  import { Story } from 'kitbook';

  const showSomething = createPersistedStore<boolean>('myCustomKeyName', true, true);
  const showSomethingElse = createPersistedStore<boolean>('myCustomKeyName2', true, true);
</script>

<!-- prettier-ignore -->
# Persisted Store

Useful for user settings that don't need saved in a database. First argument is the key, second is the value, and add an optional true third argument to sync across tabs.

`const showSomething = createPersistedStore<boolean>('myCustomKeyName', true, true);`

The type definition will be automatically inferred from the value passed in, though you can explicitly type it as seen in the example here to enforce a desired type.

<Story name="tab synced">
  {$showSomething}
  <Button onclick={() => ($showSomething = !$showSomething)}>Toggle showSomething</Button>,
  {$showSomethingElse}
  <Button onclick={() => ($showSomethingElse = !$showSomethingElse)}>Toggle showSomethingElse</Button>
</Story>

Tab syncing can be seen if you open this page in two tabs and toggle the value.