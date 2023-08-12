<script lang="ts">
  import type { Project } from "$lib/data/projects.js"
  import Icon from "svelte-awesome"
  import github from "svelte-awesome/icons/github"
  export let project: Project
</script>

<div
  class="flex justify-center items-center object-cover hover:scale-105 transition-all duration-200 relative sm:h-auto h-40"
>
  <div class="h-full w-full shadow-lg shadow-indigo-800 object-fill">
    <a href={project.app} target="_blank">
      <img src={project.img} alt="project" class="h-full w-full" />
    </a>
  </div>
  <div class="md:w-16 md:h-16 h-12 w-12 flex items-center absolute bottom-0">
    <a href={project.git} target="_blank">
      <Icon
        data={github}
        scale={3}
        class="text-purple-700 hover:text-purple-900"
      />
    </a>
  </div>
</div>
