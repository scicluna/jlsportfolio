<svelte:head>
  <title>John Lucas Scicluna Portfolio</title>
  <meta name="description" content="John Scicluna Portfolio Contact" />
</svelte:head>

<main
  class="h-[100dvh] bg-indigo-700 dark:bg-indigo-900 relative flex flex-col justify-center items-center p-5 sm:p-10"
>
  <a
    class="absolute top-1/2 md:left-[5%] left-0.5 text-2xl text-white font-extrabold hover:scale-110 cursor-pointer sm:flex hidden w-1/4"
    href={"mailto:sciclunajl@gmail.com"}
  >
    I'm available any time!
  </a>
  <form
    class="flex flex-col justify-center border sm:w-1/2 w-full h-fit border-indigo-200 p-5 rounded-lg bg-indigo-800 dark:bg-indigo-950 gap-4 text-indigo-300 dark:text-indigo-400"
    action="https://formsubmit.co/sciclunajl@gmail.com"
    method="POST"
  >
    <input
      type="hidden"
      name="_next"
      value="https://scicluna.github.io/portfolio/"
    />
    <div class="flex flex-col">
      <label for="name">Name*</label>
      <input
        name="name"
        type="text"
        id="name"
        required
        class="p-1 shadow-sm shadow-indigo-950 righteous text-indigo-950 h-8"
      />
    </div>
    <div class="flex flex-col">
      <label for="email">Email*</label>
      <input
        name="email"
        type="email"
        id="email"
        required
        class="p-1 shadow-sm shadow-indigo-950 righteous text-indigo-950 h-8"
      />
    </div>
    <div class="flex flex-col">
      <label for="message">Message*</label>
      <textarea
        name="message"
        id="message"
        rows="5"
        required
        class="p-1 shadow-sm shadow-indigo-950 righteous resize-none text-indigo-950 sm:h-52 md:h-80"
      />
    </div>
    <button
      type="submit"
      class="text-indigo-900 bg-white w-1/2 self-center mt-2 rounded-md shadow-sm shadow-indigo-950 hover:bg-indigo-500 transition-all duration-200 ease-in dark:hover:bg-indigo-300"
      >Send</button
    >
  </form>
  <div>
    <p class="mt-2 sm:text-xl text-white font-bold">
      or give me a call at 248-331-6379
    </p>
  </div>
</main>
