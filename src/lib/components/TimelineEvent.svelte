<script lang="ts">
  import { onMount, afterUpdate } from "svelte"
  import { fly } from "svelte/transition"
  import type { Event } from "$lib/data/eventlist"

  export let event: Event
  export let y: number
  export let direction: string

  let myElement: Element
  let elementTop: any
  let viewportHeight: number

  const vector = direction === "LEFT" ? -200 : 200

  const isBrowser = typeof window !== "undefined"

  onMount(() => {
    if (isBrowser) {
      elementTop = myElement.getBoundingClientRect().top + window.scrollY
      viewportHeight = window.innerHeight
    }
  })

  afterUpdate(() => {
    if (isBrowser) {
      elementTop = myElement.getBoundingClientRect().top + window.scrollY
    }
  })
</script>

<h1 bind:this={myElement}>
  {#if y + viewportHeight >= elementTop}
    <p
      in:fly={{ x: vector, duration: 2000 }}
      out:fly={{ x: vector, duration: 2000 }}
      class="text-5xl {direction === 'LEFT'
        ? 'text-start pl-20'
        : 'text-end pr-20'}"
    >
      {event.name}
    </p>
  {/if}
</h1>
