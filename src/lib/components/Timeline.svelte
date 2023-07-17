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

<div class="w-full flex flex-col gap-20 p-2 bg-blue-300 overflow-hidden">
  <h1>{y} {height}</h1>
  {#each events as event, index (event.id)}
    <TimelineEvent {event} {y} direction={index % 2 === 0 ? "RIGHT" : "LEFT"} />
  {/each}
</div>
