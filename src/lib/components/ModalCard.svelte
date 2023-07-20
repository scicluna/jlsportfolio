<script lang="ts">
  import type { Event } from "$lib/data/eventlist"
  import Modal from "./Modal.svelte"
  export let timeEvent: Event
  export let showModal: Boolean = false
</script>

<button
  class="bg-white p-10 w-fit h-full hover:scale-105 hover:cursor-pointer transition-all duration-200"
  on:click={() => (showModal = true)}
>
  <p>
    {timeEvent.name}
  </p>
</button>

<Modal bind:showModal>
  <h2 slot="header" class="sm:text-5xl text-xl font-extrabold">
    {timeEvent.name}
  </h2>
  <img src={timeEvent.img} alt="..." />
  <p class="text-base">{timeEvent.long}</p>
  <a class="text-base text-blue-500" href={timeEvent.link}>link</a>
</Modal>
