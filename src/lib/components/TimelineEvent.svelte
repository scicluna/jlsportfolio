<script lang="ts">
  import { onMount, afterUpdate } from "svelte"
  import { fly } from "svelte/transition"
  import type { Event } from "$lib/data/eventlist"
  import Modal from "./Modal.svelte"

  export let event: Event
  export let y: number
  export let direction: string
  let showModal: Boolean = false

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

<div bind:this={myElement} class="h-20">
  {#if y + viewportHeight >= elementTop}
    <div
      in:fly={{ x: vector, duration: 2000 }}
      out:fly={{ x: vector, duration: 2000 }}
      class="text-5xl w-full flex {direction === 'LEFT'
        ? 'justify-start'
        : 'justify-end'}"
      style={direction === "LEFT"
        ? `padding-left: ${Math.random() * 12}vw;`
        : `padding-right: ${Math.random() * 12}vw`}
    >
      <button
        class="bg-white p-5 w-fit hover:p-10 hover:cursor-pointer transition-all duration-200"
        on:click={() => (showModal = true)}
      >
        <p>
          {event.name}
        </p>

        <Modal bind:showModal>
          <h2 slot="header">
            {event.name}
          </h2>
          <img src={event.img} alt="..." />
          <p>{event.long}</p>
          <a href={event.link}>link</a>
        </Modal>
      </button>
    </div>
  {/if}
</div>
