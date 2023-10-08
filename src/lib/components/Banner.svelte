<script>
  import Banner from "$lib/images/Banner5.6.webp"
  import coolLines from "$lib/video/coollines3.webm"
  import snapshot from "$lib/images/snap2.webp"
  import { base } from "$app/paths"
</script>

<div
  class="sm:h-[100dvh] h-[75dvh] flex justify-center items-end relative bg-transparent z-10"
>
  <a
    class="absolute bottom-10 right-5 flex justify-center items-center text-white shadow-black shadow-md hover:shadow-lg font-bold text-2xl bg-purple-600 hover:bg-purple-800 hover:scale-105 transition-all duration-300 ease-in rounded-full z-30 h-20 w-56"
    href="{base}/projects"
  >
    See my Projects!
  </a>
  <img alt="me!" src={Banner} class="z-20 object-cover h-full w-full" />
  <h1 class="absolute right-5 text-2xl text-slate-800 font-extrabold z-20">
    John Lucas Scicluna
  </h1>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    src={coolLines}
    muted
    poster={snapshot}
    autoplay
    loop
    class="bg-white h-full w-full absolute object-cover"
  />
</div>
