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
  let svgBoxWidth: number
  let randomPadding: number

  const vector = direction === "LEFT" ? -200 : 200

  $: svgBoxWidth = viewportWidth * 0.75 - randomPadding
  $: randomPadding = Math.random() * (viewportWidth / 8)
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
    svgBoxWidth = viewportWidth * 0.75
  }
</script>

<svelte:window
  bind:innerWidth={viewportWidth}
  bind:innerHeight={viewportHeight}
  on:resize={handleResize}
/>

<div bind:this={myElement} class="h-20 w-full relative z-10">
  {#if y + viewportHeight >= elementTop}
    <div
      in:fly={{ x: vector, duration: 1500, opacity: 1, easing: quintOut }}
      out:fly={{ x: vector, duration: 1500, opacity: 1 }}
      class="sm:text-5xl text-xl flex transition-opacity relative {direction ===
      'LEFT'
        ? 'justify-start'
        : 'justify-end'}"
      style={direction === "LEFT"
        ? `padding-left: ${randomPadding}px;`
        : `padding-right: ${randomPadding}px`}
    >
      <svg
        class="absolute h-[245%] -z-10"
        viewBox="0 0 {last ? '0' : svgBoxWidth - 20} {last ? '0' : 290}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M {direction === 'RIGHT'
            ? `${svgBoxWidth * 0.825}`
            : `${svgBoxWidth * 0.175}`} 0 V 290"
          fill="none"
          stroke="rgb(44, 169, 188)"
          stroke-width="15"
          transition:draw={{ duration: 1000, easing: cubicIn, delay: 200 }}
        />
        <path
          d="M {direction === 'RIGHT'
            ? `${svgBoxWidth * 0.825}`
            : `${svgBoxWidth * 0.175}`} 290 H {direction === 'RIGHT'
            ? `${-svgBoxWidth + randomPadding}`
            : `${svgBoxWidth - randomPadding}`}"
          fill="none"
          stroke="rgb(44, 169, 188)"
          stroke-width="30"
          transition:draw={{ duration: 1000, easing: cubicOut, delay: 1200 }}
        />
      </svg>
      <ModalCard {timeEvent} />
    </div>
  {/if}
</div>
