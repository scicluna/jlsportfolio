<script lang="ts">
  import type { Project } from "$lib/data/projects.js"
  import Icon from "svelte-awesome"
  import github from "svelte-awesome/icons/github"
  export let project: Project
</script>

<div
  class="flex justify-center items-center hover:scale-105 transition-all duration-200 relative sm:h-auto h-52"
>
  <div class="h-full w-full shadow-lg shadow-indigo-800">
    <a href={project.app} target="_blank">
      <img
        src={project.img}
        alt="project"
        class="w-full h-[80%] sm:h-[90%] object-cover object-left"
      />
    </a>
    <div class="flex justify-around items-center bg-indigo-500 sm:h-[10%]">
      <p class="sm:text-3xl text-xl font-bold text-purple-100">
        {project.name}
      </p>
      <a href={project.git} target="_blank">
        <Icon
          data={github}
          scale={3}
          class="text-purple-700 hover:text-purple-900"
        />
      </a>
    </div>
  </div>
</div>
