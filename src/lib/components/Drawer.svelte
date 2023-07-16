<script>
  import {
    Drawer,
    Button,
    CloseButton,
    Sidebar,
    SidebarBrand,
    SidebarCta,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte"
  import { sineIn } from "svelte/easing"
  let hidden2 = true
  let spanClass = "flex-1 ml-3 whitespace-nowrap"
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }
</script>

<div class="text-center">
  <Button color="none" on:click={() => (hidden2 = false)}
    ><svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7L4 7"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        opacity="0.5"
        d="M20 12L4 12"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M20 17L4 17"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg></Button
  >
</div>
<Drawer
  class="bg-slate-300"
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden2}
  id="sidebar2"
>
  <div class="flex items-center">
    <h5
      id="drawer-navigation-label-3"
      class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Take a look around!
    </h5>
    <CloseButton
      on:click={() => (hidden2 = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <Sidebar>
    <SidebarWrapper
      divClass="overflow-y-auto py-4 px-3 rounded dark:bg-slate-800"
    >
      <SidebarGroup>
        <SidebarItem label="About" class="hover:bg-slate-100">
          <svelte:fragment slot="icon" />
        </SidebarItem>
        <SidebarItem label="My Journey" class="hover:bg-slate-100">
          <svelte:fragment slot="icon" />
        </SidebarItem>
        <SidebarItem label="Resume" {spanClass} class="hover:bg-slate-100">
          <svelte:fragment slot="icon" />
        </SidebarItem>
        <SidebarItem label="Contact" {spanClass} class="hover:bg-slate-100">
          <svelte:fragment slot="icon" />
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
