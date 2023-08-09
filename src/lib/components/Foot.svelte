<script lang="ts">
  // we want to show our socials, as to contact and resume
  import Icon from "svelte-awesome"
  import linkedinSquare from "svelte-awesome/icons/linkedinSquare"
  import github from "svelte-awesome/icons/github"
  import envelopeO from "svelte-awesome/icons/envelopeO"
  import { afterNavigate } from "$app/navigation"

  let currentPage = ""

  afterNavigate(() => {
    currentPage = window?.location?.href.split("/")[3] || ""
  })
</script>

<footer
  class="flex flex-col gap-2 items-center h-36 min-h-[20%] relative bg-slate-800 text-slate-100 text-sm"
>
  <div
    class="border-t border-gray-700 h-24 flex md:flex-row flex-col text-xs justify-around items-center w-full p-5"
  >
    <p class="text-xl whitespace-nowrap">JLS 2023.All rights reserved.</p>
    <div class="flex flex-col md:gap-0 gap-4 justify-center items-center">
      <div class="flex gap-1 w-1/5">
        <div class="md:w-16 md:h-16 h-12 w-12 flex items-center">
          <a href={"https://github.com/scicluna/"}>
            <Icon data={github} scale={3} />
          </a>
        </div>
        <div class="md:w-16 md:h-16 h-12 w-12 flex items-center">
          <a href={"https://www.linkedin.com/in/john-scicluna-472291bb/"}>
            <Icon data={linkedinSquare} scale={3} />
          </a>
        </div>
        <div class="md:w-16 md:h-16 h-12 w-12 flex items-center">
          <a href={"mailto:sciclunajl@gmail.com"}>
            <Icon data={envelopeO} scale={3} />
          </a>
        </div>
      </div>
    </div>
    <div class="flex gap-1 whitespace-nowrap">
      <a
        class="text-xl {currentPage == '' ? 'text-purple-300' : 'text-white'}"
        href={"/"}>Home |</a
      >
      <a
        class="text-xl {currentPage == 'resume'
          ? 'text-purple-300'
          : 'text-white'}"
        href={"/resume"}>Resume |</a
      >
      <a
        class="text-xl {currentPage == 'contact'
          ? 'text-purple-300'
          : 'text-white'}"
        href={"/contact"}>Contact Me |</a
      >
      <a
        class="text-xl {currentPage == 'projects'
          ? 'text-purple-300'
          : 'text-white'}"
        href={"/projects"}>Projects</a
      >
    </div>
  </div>
</footer>
