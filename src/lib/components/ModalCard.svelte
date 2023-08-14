<script lang="ts">
  import type { Event } from "$lib/data/eventlist.js"
  import { draw } from "svelte/transition"
  import Modal from "./Modal.svelte"
  import { cubicIn, cubicOut } from "svelte/easing"
  export let timeEvent: Event
  export let showModal: Boolean = false
  export let direction: string
</script>

<button
  class="relative bg-slate-200 sm:p-10 p-5 h-full min-w-[20dvw] w-fit flex items-center justify-center hover:scale-105 hover:cursor-pointer transition-all duration-150 rounded-lg shadow-indigo-950 shadow-md"
  on:click={() => (showModal = true)}
>
  <p class="font-bold">
    {timeEvent.name}
  </p>

  <svg
    id="eDKaRdhnUZJ1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 500 300"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    class="absolute top-0 h-[35dvh] {direction === 'RIGHT'
      ? 'right-1/2'
      : 'left-1/2'} -z-20 pointer-events-none"
    ><path
      d="M0,-150v300"
      transform={direction === "RIGHT"
        ? "translate(500 150)"
        : "translate(0 150)"}
      fill="none"
      stroke="#3f5787"
      stroke-width="15"
      transition:draw={{ duration: 1000, easing: cubicIn, delay: 200 }}
    /><path
      d={direction === "RIGHT" ? "M250,0h-500" : "M-250,0h500"}
      transform="translate(250 300)"
      fill="none"
      stroke="#3f5787"
      stroke-width="15"
      transition:draw={{ duration: 1000, easing: cubicOut, delay: 1200 }}
    /></svg
  >
</button>
<Modal bind:showModal>
  <h2 slot="header" class="text-2xl font-bold">
    {timeEvent.name}
  </h2>
  <div class="flex gap-2 flex-col h-full">
    <div class="flex w-full justify-center">
      <img
        src={timeEvent.img}
        alt="..."
        class="object-contain object-center h-72 w-96"
      />
    </div>
    <div class="flex">
      <p class="text-base">{timeEvent.short}</p>
    </div>
  </div>
  <div slot="footer" class="flex justify-around">
    {#if timeEvent.link}
      <a class="text-base text-blue-500" href={timeEvent.link} target="_blank"
        >{timeEvent.link.includes("github")
          ? "github"
          : timeEvent.link.split(".")[1]}</a
      >
    {/if}
    {#if timeEvent.deploy}
      <a class="text-base text-blue-500" href={timeEvent.deploy} target="_blank"
        >app</a
      >
    {/if}
  </div>
</Modal>
