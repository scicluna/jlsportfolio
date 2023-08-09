<script>
  import Banner from "$lib/images/Banner5.webp"
  import coolLines from "$lib/video/coollines2.mp4"
  import snapshot from "$lib/images/snap2.webp"
</script>

<div
  class="sm:h-[100dvh] h-[75dvh] flex justify-center items-end relative bg-transparent z-10"
>
  <a
    class="absolute top-2 right-2 flex justify-center items-center text-white shadow-black shadow-md hover:shadow-lg font-bold text-xl bg-purple-600 hover:bg-purple-800 hover:scale-105 rounded-full z-30 h-20 w-56"
    href="/projects"
  >
    See my Projects!
  </a>
  <img alt="me!" src={Banner} class="z-20 object-cover h-full w-full" />
  <p class="absolute right-5 text-2xl text-slate-800 font-extrabold z-20">
    JLS
  </p>
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
