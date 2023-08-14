<script lang="ts">
  import { onMount, afterUpdate } from "svelte"
  import { fly } from "svelte/transition"
  import { draw } from "svelte/transition"
  import { cubicIn, cubicOut, quintOut } from "svelte/easing"
  import type { Event } from "$lib/data/eventlist.js"
  import ModalCard from "./ModalCard.svelte"

  export let timeEvent: Event
  export let y: number
  export let direction: string
  export let last: boolean

  let myElement: Element
  let elementTop: any
  let viewportHeight: number
  let viewportWidth: number
  let randomPadding: number

  const vector = direction === "LEFT" ? -200 : 200

  $: randomPadding = 20 + Math.random() * 10
  const isBrowser = typeof window !== "undefined"

  onMount(() => {
    if (isBrowser) {
      elementTop = myElement.getBoundingClientRect().top + window.scrollY
    }
  })

  afterUpdate(() => {
    if (isBrowser) {
      elementTop = myElement.getBoundingClientRect().top + window.scrollY
    }
  })

  function handleResize() {
    viewportWidth = window.innerWidth
    viewportHeight = window.innerHeight
  }
</script>

<svelte:window
  bind:innerWidth={viewportWidth}
  bind:innerHeight={viewportHeight}
  on:resize={handleResize}
/>

<div bind:this={myElement} class="w-full h-[10dvh] relative z-10">
  {#if y + viewportHeight >= elementTop}
    <div
      in:fly={{ x: vector, duration: 1500, opacity: 1, easing: quintOut }}
      out:fly={{ x: vector, duration: 1500, opacity: 1 }}
      class="md:text-5xl sm:text-3xl text-xl h-full text-center items-center flex transition-opacity relative {direction ===
      'LEFT'
        ? 'justify-start'
        : 'justify-end'}"
      style={direction === "LEFT"
        ? `padding-left: ${randomPadding}dvw;`
        : `padding-right: ${randomPadding}dvw`}
    >
      <ModalCard {timeEvent} {direction} />
    </div>
  {/if}
</div>
