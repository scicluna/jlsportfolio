<script lang="ts">
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
  function smoothScroll(event: Event) {
    event.preventDefault()
    const link = event.currentTarget as HTMLAnchorElement
    const anchorId = new URL(link?.href).hash.replace("#", "")
    const anchor = document.getElementById(anchorId)
    window.scrollTo({
      top: anchor!.offsetTop,
      behavior: "smooth",
    })
  }
</script>

<div class="text-center">
  <button class="hover:scale-110" on:click={() => (hidden2 = false)}
    ><svg
      fill="#000000"
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      id="menu"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      class="icon line-color"
      ><line
        id="secondary"
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
      /><path
        id="primary"
        d="M9,18H21M3,6H15"
        style="fill: none; stroke: rgb(204, 0, 204); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
      /></svg
    ></button
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
        <SidebarItem
          label="About"
          class="hover:bg-slate-100"
          href="#about"
          on:click={smoothScroll}
        >
          <svelte:fragment slot="icon">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 18"
            >
              <path
                d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
              />
            </svg>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem
          label="My Journey"
          class="hover:bg-slate-100"
          href="#timeline"
          on:click={smoothScroll}
        >
          <svelte:fragment slot="icon">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 22"
            >
              <path
                d="M15.458 4a3 3 0 1 0-4.478 2.6A2.6 2.6 0 0 1 8.4 9H6.6a4.57 4.57 0 0 0-2.6.814v-3a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0V13.6A2.607 2.607 0 0 1 6.6 11h1.8a4.6 4.6 0 0 0 4.548-4.049A3 3 0 0 0 15.458 4Z"
              />
            </svg>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem
          label="Resume"
          {spanClass}
          class="hover:bg-slate-100"
          href="/resume"
        >
          <svelte:fragment slot="icon">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2M5 5h8m-8 5h8m-8 4h8"
              />
            </svg>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem
          label="Contact"
          {spanClass}
          class="hover:bg-slate-100"
          href="/contact"
        >
          <svelte:fragment slot="icon">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
