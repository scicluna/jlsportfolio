import { c as create_ssr_component, i as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-3ug4xi_START -->${$$result.title = `<title>John Lucas Scicluna Portfolio</title>`, ""}<meta name="description" content="John Scicluna Portfolio Resume"><!-- HEAD_svelte-3ug4xi_END -->`, ""} <main class="h-[100dvh] bg-indigo-700 dark:bg-indigo-900 relative"><a class="absolute left-[5%] top-1/2 text-xl sm:text-3xl text-blue-500 dark:text-slate-100 font-extrabold hover:scale-110 cursor-pointer sm:flex hidden"${add_attribute("href", data.resume, 0)}${add_attribute("download", data.resume, 0)}>Check it out~!</a> <section class="flex h-full w-full justify-center items-center p-5 sm:p-10"> <object${add_attribute("data", data.resume, 0)} type="application/pdf" class="h-full sm:w-3/5 shadow-md shadow-indigo-950"><a${add_attribute("href", data.resume, 0)}${add_attribute("download", data.resume, 0)} class="flex justify-center items-center h-full w-full p-10 text-blue-500 text-xl font-bold">It appears you don&#39;t have a PDF plugin for this browser. You can
        download it instead by clicking on this box!</a></object></section></main>`;
});
export {
  Page as default
};
