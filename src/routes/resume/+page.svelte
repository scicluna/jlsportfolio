<script lang="ts">
  export let data: { resume: string }
</script>

<main class="h-[100dvh] bg-indigo-700 dark:bg-indigo-900 relative">
  <a
    class="absolute left-[5%] top-1/2 text-xl sm:text-3xl text-blue-500 dark:text-slate-100 font-extrabold hover:scale-110 cursor-pointer"
    href={data.resume}
    download={data.resume}
  >
    Check it out~!
  </a>
  <section class="flex h-full w-full justify-center items-center p-10">
    <!-- svelte-ignore a11y-missing-attribute -->
    <object
      data={data.resume}
      type="application/pdf"
      class="h-full w-3/5 shadow-md shadow-indigo-950"
    >
      <p>
        It appears you don't have a PDF plugin for this browser. You can <a
          href="$lib/resume/resume.pdf">download the PDF file</a
        > instead.
      </p>
    </object>
  </section>
</main>
