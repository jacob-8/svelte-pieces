# Query Param Store

- server/client side query params based store
- Must be initialized from within a `.svelte` file and not a `.ts` file (see https://github.com/sveltejs/kit/issues/2381) because only components can access the `$page` store. Listening to the URL won't work because we want this to work server-side as well.
- Only works with SvelteKit as it relies on kit imports. Feel to copy the code and create your own that works with other Svelte frameworks. If needed, refer to the inspiration repos for this tool: [svelte-pathfinder](https://github.com/sveltetools/svelte-pathfinder) and [svelte-store-router](https://github.com/zyxd/svelte-store-router)

## Props
- `key`: the key of the query param, defaults to `queryParam` if not set
- `log`: whether to log the query param value
- `replaceState`: defaults to `true`, set to `false` to update the window history on changes, thereby allowing the back button to cycle through states
- `persist`: whether to persist the query param value to localStorage or sessionStorage. The store will first check the URL, then look in storage
- `startWith`: initialValue if none in URL or local/sessionStorage - provides type intellisense for the store

## Usage

```svelte
<script lang="ts">
  import { createQueryParamStore } from 'svelte-pieces'

  const item = createQueryParamStore({ key: 'item' })
</script>
<pre>{JSON.stringify($item, null, 2)}</pre>
<a href="/stores/0-query-param?item=123">Change store by navigating to 123</a>
<button type="button" on:click={() => ($item = '12345')}>Set to 12345</button>
```

- If desiring to use this sitewide, you can create a store in your layout file module context and export it from there, or set a contextual store that you can then get in child components.

## Priority

1. URL Query Param
2. Local Storage
3. Start With

## Notes

If you set query params via an input, make sure to not turn off `replaceState` as that will break input focus on every keystroke.
