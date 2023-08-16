<script lang="ts">
  import Banner from "$lib/components/Banner.svelte"
  import About from "$lib/components/About.svelte"
  import Timeline from "$lib/components/Timeline.svelte"
  import type { PageData } from "./$types.js"

  export let data: PageData
</script>

<svelte:head>
  <title>John Lucas Scicluna Portfolio</title>
  <meta name="description" content="John Scicluna Portfolio" />
</svelte:head>

<main>
  <!-- banner -->
  <Banner />
  <!-- about me -->
  <About />
  <!-- timeline -->
  <Timeline events={data.events} />
</main>
