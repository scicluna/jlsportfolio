<script lang="ts">
  import type { PageData } from "./$types.js"
  export let data: PageData
</script>

<main class="h-[100dvh] bg-indigo-700 dark:bg-indigo-900 relative">
  <a
    class="absolute left-[5%] top-1/2 text-xl sm:text-3xl text-blue-500 dark:text-slate-100 font-extrabold hover:scale-110 cursor-pointer sm:flex hidden"
    href={data.resume}
    download={data.resume}
  >
    Check it out~!
  </a>
  <section class="flex h-full w-full justify-center items-center p-5 sm:p-10">
    <!-- svelte-ignore a11y-missing-attribute -->
    <object
      data={data.resume}
      type="application/pdf"
      class="h-full sm:w-3/5 shadow-md shadow-indigo-950"
    >
      <a
        href={data.resume}
        download={data.resume}
        class="flex justify-center items-center h-full w-full p-10 text-blue-500 text-xl font-bold"
        >It appears you don't have a PDF plugin for this browser. You can
        download it instead by clicking on this box!
      </a>
    </object>
  </section>
</main>
