<script lang="ts">
  import { clickoutside } from '../actions/clickoutside'
  import ShowHide from '../functions/ShowHide.svelte'
  import Button from '../ui/Button.svelte'
  import Avatar from './Avatar.svelte'
  import Menu from './Menu.svelte'
  import type { IUser } from './user.interface'

  export let user: IUser = undefined
</script>

<header>
  {#if $$slots.default}
    <Button form="text" href="/" class="!text-lg !font-semibold">H</Button>
    <div class="text-lg font-semibold p-3 overflow-x-auto md:overflow-hidden md:overflow-ellipsis">
      <slot />
    </div>
  {:else if $$slots.left}
    <slot name="left" />
  {:else}
    <Button form="text" href="/" class="!text-lg !font-semibold">Company</Button>
  {/if}
  <div class="w-1 flex-grow" />
  <Button form="text" href="/">About</Button>
  <Button form="text" href="/">Contact</Button>
  {#if user}
    <ShowHide let:show let:toggle let:set>
      <div id="userMenu" class="relative" use:clickoutside on:clickoutside={() => set(false)}>
        <button class="px-3 py-1" type="button" on:click={toggle}>
          <Avatar {user} />
        </button>
        {#if show}
          <Menu portalTarget="#userMenu" class="top-8 right-2">
            <div class="px-4 py-2 text-xs font-semibold text-gray-600">{user.displayName}</div>
            <div class="px-4 py-2 -mt-3 text-xs text-gray-600 border-b">{user.email}</div>
            <a href="/admin">
              Admin Panel
              <span class="i-fa-solid-key" />
            </a>
            <a href="/account"> Settings </a>
            <button type="button"> Log out </button>
          </Menu>
        {/if}
      </div>
    </ShowHide>
  {:else}
    <ShowHide let:show let:toggle>
      <Button form="text" onclick={toggle}>
        <span class="i-fa-solid-sign-in-alt" />
        <span class="ml-1 hidden sm:inline"> Log In </span>
      </Button>
      {#if show}
        {#await import('../ui/Modal.svelte') then { default: Modal }}
          <Modal on:close={toggle}>
            <div slot="heading">Log In</div>
            Place component here
          </Modal>
        {/await}
      {/if}
    </ShowHide>
  {/if}
</header>

<style>
  header {
    --at-apply: top-0 left-0 right-0 flex items-center bg-white h-[50px] z-2 whitespace-nowrap;
  }
</style>
