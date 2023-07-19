<script>
  import Banner from "$lib/images/Banner4.5.webp"
  import coolLines from "$lib/video/coollines2.mp4"
  import snap from "$lib/images/snap2.webp"
</script>

<div
  class="h-[100vh] flex justify-center items-end relative bg-transparent z-10"
>
  <img alt="me!" src={Banner} class="z-20 object-cover h-full w-full" />
  <p class="absolute right-5 text-2xl text-slate-800 font-extrabold z-20">
    JLS
  </p>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    src={coolLines}
    muted
    poster={snap}
    autoplay
    loop
    class="bg-white h-full w-full absolute object-cover"
  />
</div>
