<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte"
  import type { Project } from "$lib/data/projects.js"
  export let data: { projects: Project[] }
</script>

<main
  class="grid sm:grid-cols-2 grid-cols-1 w-full min-h-[100dvh] gap-5 sm:p-20 p-12 bg-purple-500"
>
  {#each data.projects as project (project.id)}
    <ProjectCard {project} />
  {/each}
</main>
