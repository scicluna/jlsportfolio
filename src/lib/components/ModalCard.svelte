<script lang="ts">
  import type { Event } from "$lib/data/eventlist.js"
  import Modal from "./Modal.svelte"
  export let timeEvent: Event
  export let showModal: Boolean = false
</script>

<button
  class="bg-slate-200 sm:p-10 p-5 h-full min-w-[20dvw] w-fit flex items-center justify-center hover:scale-105 hover:cursor-pointer transition-all duration-150 rounded-lg shadow-indigo-950 shadow-md"
  on:click={() => (showModal = true)}
>
  <p class="font-bold">
    {timeEvent.name}
  </p>
</button>

<Modal bind:showModal>
  <h2 slot="header" class="text-2xl font-extrabold">
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
