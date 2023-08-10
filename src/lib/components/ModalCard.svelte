<script lang="ts">
  import type { Event } from "$lib/data/eventlist.js"
  import Modal from "./Modal.svelte"
  export let timeEvent: Event
  export let showModal: Boolean = false
</script>

<button
  class="bg-slate-200 p-10 h-full min-w-[25dvw] hover:scale-105 hover:cursor-pointer transition-all duration-200"
  on:click={() => (showModal = true)}
>
  <p>
    {timeEvent.name}
  </p>
</button>

<Modal bind:showModal>
  <h2 slot="header" class="text-2xl font-extrabold">
    {timeEvent.name}
  </h2>
  <div class="flex gap-2 flex-col sm:flex-row">
    <img
      src={timeEvent.img}
      alt="..."
      class="object-contain object-center h-36 w-32"
    />
    <div>
      <p class="text-base">{timeEvent.short}</p>
    </div>
  </div>
  <div slot="footer" class="flex justify-around">
    {#if timeEvent.link}
      <a class="text-base text-blue-500" href={timeEvent.link} target="_blank"
        >{timeEvent.link.includes("github") ? "github" : "link"}</a
      >
    {/if}
    {#if timeEvent.deploy}
      <a class="text-base text-blue-500" href={timeEvent.deploy} target="_blank"
        >app</a
      >
    {/if}
  </div>
</Modal>
