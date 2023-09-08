<script>
  import "../app.css"
  import Drawer from "$lib/components/Drawer.svelte"
  import Foot from "$lib/components/Foot.svelte"
  import { dev } from "$app/environment"
  import { inject } from "@vercel/analytics"
  inject({ mode: dev ? "development" : "production" })
</script>

<nav class="fixed top-5 left-5 z-50">
  <Drawer />
</nav>

<slot />

<footer>
  <Foot />
</footer>
