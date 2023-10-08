import { c as create_ssr_component, i as add_attribute, h as escape, v as validate_component, l as each } from "../../../chunks/ssr.js";
import { I as Icon, g as github } from "../../../chunks/github.js";
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<div class="flex justify-center items-center hover:scale-105 transition-all duration-200 relative sm:h-auto h-52"><div class="h-full w-full shadow-lg shadow-indigo-800"><a${add_attribute(
    "href",
    project.app === "Not Deployed" ? project.git : project.app,
    0
  )} target="_blank"><img${add_attribute("src", project.img, 0)} alt="project" class="w-full h-[80%] sm:h-[90%] object-cover object-left"></a> <div class="flex justify-around items-center bg-indigo-500 sm:h-[10%]"><p class="sm:text-3xl text-xl font-bold text-purple-100">${escape(project.name)}</p> <a${add_attribute("href", project.git, 0)} target="_blank">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      data: github,
      scale: 3,
      class: "text-purple-700 hover:text-purple-900"
    },
    {},
    {}
  )}</a></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-rem9dp_START -->${$$result.title = `<title>John Lucas Scicluna Portfolio</title>`, ""}<meta name="description" content="John Scicluna Portfolio Projects"><!-- HEAD_svelte-rem9dp_END -->`, ""} <main class="grid sm:grid-cols-2 grid-cols-1 w-full min-h-[100dvh] sm:gap-10 gap-20 sm:p-20 p-8 bg-purple-500">${each(data.projects, (project) => {
    return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}`;
  })}</main>`;
});
export {
  Page as default
};
