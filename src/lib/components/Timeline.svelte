<script lang="ts">
  import { onMount } from "svelte"
  import TimelineEvent from "./TimelineEvent.svelte"
  import type { Event } from "$lib/data/eventlist.js"

  export let events: Event[]
  let y: number
  let height: number

  onMount(() => {
    height = window.screenTop
  })
</script>

<svelte:window bind:scrollY={y} />

<div
  class="w-full flex flex-col gap-10 p-4 bg-blue-950 text-slate-200 overflow-hidden pb-40"
  id="timeline"
>
  <h1 class="md:text-5xl sm:text-4xl text-3xl font-extrabold h-full">
    TIMELINE
  </h1>
  <div class="flex flex-col gap-[20dvh] w-full text-black">
    {#each events as timeEvent, index (timeEvent.id)}
      <TimelineEvent
        {timeEvent}
        {y}
        direction={index % 2 === 0 ? "RIGHT" : "LEFT"}
        last={index === events.length - 1}
      />
    {/each}
  </div>
</div>
