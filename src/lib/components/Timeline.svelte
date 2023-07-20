<script lang="ts">
  import { onMount } from "svelte"
  import TimelineEvent from "./TimelineEvent.svelte"
  import type { Event } from "$lib/data/eventlist"

  export let events: Event[]
  let y: number
  let height: number

  onMount(() => {
    height = window.screenTop
  })
</script>

<svelte:window bind:scrollY={y} />

<h1 class="sm:text-5xl text-3xl font-extrabold">TIMELINE</h1>

<div class="w-full flex flex-col gap-40 p-2 bg-blue-300 overflow-hidden pt-20">
  {#each events as timeEvent, index (timeEvent.id)}
    <TimelineEvent
      {timeEvent}
      {y}
      direction={index % 2 === 0 ? "RIGHT" : "LEFT"}
    />
  {/each}
</div>
