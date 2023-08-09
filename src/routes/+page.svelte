<script lang="ts">
  import Banner from "$lib/components/Banner.svelte"
  import About from "$lib/components/About.svelte"
  import Timeline from "$lib/components/Timeline.svelte"
  import type { PageData } from "./$types.js"

  export let data: PageData
</script>

<main class="bg-slate-300">
  <!-- banner -->
  <Banner />
  <!-- about me -->
  <About />
  <!-- timeline -->
  <Timeline events={data.events} />
</main>

<!-- throaway footer w/ links -->
<!-- seperate resume/contact form pages -->
