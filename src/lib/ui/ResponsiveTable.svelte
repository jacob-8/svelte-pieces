<script lang="ts">
  export let stickyHeading = false;
  export let stickyColumn = false;
</script>

<div class:stickyHeading class:stickyColumn class="responsive-wrapper {$$props.class}">
  <table class="responsive-table">
    <slot />
  </table>
</div>

<style>
  .responsive-wrapper {
    --at-apply: overflow-auto border rounded w-full h-full;
  }
  .responsive-table {
    min-width: 100%;
  }
  :global(.responsive-table thead th) {
    text-align: start;
    /* text-align: start to accomodate RTL languages */
    --at-apply: px-3 py-3 border-b-2 border-gray-200 bg-gray-100;
  }
  :global(.responsive-table tr:hover td) {
    --at-apply: bg-gray-100;
  }
  :global(.responsive-table tr:focus-within td) {
    --at-apply: bg-gray-200;
  }
  :global(.responsive-table td) {
    --at-apply: px-3 py-2 border-b border-gray-200 text-sm;
  }

  /* Sticky */
  :global(.stickyHeading thead th) {
    --at-apply: sticky top-0 z-1;
  }
  :global(.stickyColumn thead th:first-child) {
    --at-apply: sticky left-0 z-2;
  }
  :global(.stickyColumn td:first-child) {
    --at-apply: sticky left-0 z-1 bg-white;
  }
</style>
