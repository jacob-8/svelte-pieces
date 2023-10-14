<script lang="ts">
  import ResponsiveTable from '$lib/ui/ResponsiveTable.svelte';
  import { Story } from 'kitbook';
</script>

<!-- prettier-ignore -->
# Responsive Table

- Use `stickyHeading` or `stickyColumn` props if you want to make the header sticky and/or your first column.

<Story
  height={400}
  knobs={{ stickyHeading: true, stickyColumn: true, width: '20-100;60' }}
  let:knobs={{ stickyHeading, stickyColumn, width }}
>
  <div style="width: {width}%;">
    <ResponsiveTable {stickyHeading} {stickyColumn}>
      <thead>
        <th>Item</th>
        <th>
          <div style="width: 600px;" />
          Description
        </th>
        <th>Public</th>
      </thead>
      {#each [...Array(100)] as item, index}
        <tr>
          <td>Item #{index}</td>
          <td
            >Here's quite a big description that has a lot of content that we would like to be able
            to define a width for. We can do this by adding a div with a width style.
            <input type="text" placeholder="focus to see darker gray" />
          </td>
          <td>{index % 2 ? 'yes' : 'no'}</td>
        </tr>
      {/each}
    </ResponsiveTable>
  </div>
</Story>

<!-- prettier-ignore -->
- will darken if an element inside the row is focused on
- add a `div` with `style="width: 500px;"` to any header cell you want to force wider 
- adapted from https://css-tricks.com/a-table-with-both-a-sticky-header-and-a-sticky-first-column/
- The example above has `text-xs font-semibold text-gray-600 uppercase tracking-wider` classes added
to the table header `th` elements
- The following wrapper element makes for a full screen sticky table on page where the header element also has an z-index of 2.

```svelte

<div class="sticky top-0 relative z-2 h-screen flex flex-col bg-white">
  <ResponsiveTable>
    <thead>
      <th>Foo</th>
      <th>Bar</th>
    </thead>
    <td>1</td>
    <td>2</td>
  </ResponsiveTable>
</div>
```

<style>
  thead th {
    --at-apply: text-xs font-semibold text-gray-600 uppercase tracking-wider;
  }
</style>
