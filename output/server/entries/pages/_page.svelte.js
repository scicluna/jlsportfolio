import { c as create_ssr_component, h as escape, i as add_attribute, v as validate_component, l as each } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Banner = "/svelteportfolio/_app/immutable/assets/Banner5.6.941e4593.webp";
const coolLines = "/svelteportfolio/_app/immutable/assets/coollines3.d3ea8552.webm";
const snapshot = "/svelteportfolio/_app/immutable/assets/snap2.25387152.webp";
const Banner_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="sm:h-[100dvh] h-[75dvh] flex justify-center items-end relative bg-transparent z-10"><a class="absolute bottom-10 right-5 flex justify-center items-center text-white shadow-black shadow-md hover:shadow-lg font-bold text-xl bg-purple-600 hover:bg-purple-800 hover:scale-105 rounded-full z-30 h-20 w-56" href="${escape(base, true) + "/projects"}">See my Projects!</a> <img alt="me!"${add_attribute("src", Banner, 0)} class="z-20 object-cover h-full w-full"> <h1 class="absolute right-5 text-2xl text-slate-800 font-extrabold z-20" data-svelte-h="svelte-1274wuf">John Lucas Scicluna</h1>  <video${add_attribute("src", coolLines, 0)} muted${add_attribute("poster", snapshot, 0)} autoplay loop class="bg-white h-full w-full absolute object-cover"></video></div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-justify w-full p-4 bg-indigo-950 text-slate-200" id="about" data-svelte-h="svelte-16ndnjr"><h1 class="font-extralight text-5xl">Who am I?</h1> <p class="sm:text-2xl font-bold sm:leading-loose">I&#39;m an engineer with a solid foundation in web development from my bootcamp
    training, eager to apply my skills in a practical environment. I consider
    myself a visionary - always looking for innovative solutions and constantly
    driven by my thirst for knowledge. My dedication to learning something new
    each day is a core tenet of my work ethic. It&#39;s not just about gaining
    knowledge, but also about understanding how to apply that knowledge
    effectively in real-world scenarios. I&#39;m seeking an opportunity where I can
    further develop these skills and contribute meaningfully to a team. I&#39;m
    confident that given the chance, I can exceed expectations and bring a
    unique perspective to your organization. In me, you&#39;ll find a programmer who
    is dedicated, proactive, and continually striving for excellence. I invite
    you to join me on this journey as I take my first steps into the
    professional world, and I&#39;m confident that together, we can achieve great
    things.</p></div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: "dialog.svelte-gphgbp.svelte-gphgbp{max-width:32em;border-radius:0.2em;border:none;padding:0}dialog.svelte-gphgbp.svelte-gphgbp::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-gphgbp>div.svelte-gphgbp{padding:0.5em}dialog[open].svelte-gphgbp.svelte-gphgbp{animation:svelte-gphgbp-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-gphgbp-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-gphgbp.svelte-gphgbp::backdrop{animation:svelte-gphgbp-fade 0.2s ease-out}@keyframes svelte-gphgbp-fade{from{opacity:0}to{opacity:1}}button.svelte-gphgbp.svelte-gphgbp{display:block}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css);
  return ` <dialog class="sm:w-1/3 w-[95%] svelte-gphgbp"${add_attribute("this", dialog, 0)}> <div class="relative h-1/2 svelte-gphgbp"><button class="absolute top-4 right-4 svelte-gphgbp" data-svelte-h="svelte-1m7v2vx"><svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
       c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
       c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
       c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
       l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
       c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path></svg></button> ${slots.header ? slots.header({}) : ``} <hr> ${slots.default ? slots.default({}) : ``} <hr> ${slots.footer ? slots.footer({}) : ``}</div> </dialog>`;
});
const ModalCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { timeEvent } = $$props;
  let { showModal = false } = $$props;
  let { direction } = $$props;
  let { last } = $$props;
  if ($$props.timeEvent === void 0 && $$bindings.timeEvent && timeEvent !== void 0)
    $$bindings.timeEvent(timeEvent);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<button class="relative bg-purple-100 hover:bg-purple-300 sm:p-10 p-5 h-full min-w-[20dvw] w-fit flex items-center justify-center hover:cursor-pointer transition-all duration-150 rounded-lg shadow-indigo-950 shadow-md"><p class="font-bold">${escape(timeEvent.name)}</p> <svg id="eDKaRdhnUZJ1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" class="${"absolute top-0 h-[35dvh] " + escape(direction === "RIGHT" ? "right-1/2" : "left-1/2", true) + " -z-20 pointer-events-none"}"><path${add_attribute("d", last ? "" : "M0,-150v300", 0)}${add_attribute(
      "transform",
      direction === "RIGHT" ? "translate(500 150)" : "translate(0 150)",
      0
    )} fill="none" stroke="rgb(44, 169, 188)" stroke-width="15"></path><path${add_attribute(
      "d",
      last ? "" : direction === "RIGHT" ? "M250,0h-500" : "M-250,0h500",
      0
    )} transform="translate(250 300)" fill="none" stroke="rgb(44, 169, 188)" stroke-width="15"></path></svg> <div class="${"absolute right-0 w-screen h-full -z-50 bg-blue-950 " + escape(direction === "RIGHT" ? "translate-x-full" : "", true)}"></div></button> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<div slot="footer" class="flex justify-around items-center h-auto">${timeEvent.link ? `<a class="text-base text-blue-500 font-bold hover:text-blue-700"${add_attribute("href", timeEvent.link, 0)} target="_blank">${escape(timeEvent.link.includes("github") ? "github" : timeEvent.link.split(".")[1])}</a>` : ``} ${timeEvent.deploy ? `<a class="text-base text-blue-500 font-bold hover:text-blue-700"${add_attribute("href", timeEvent.deploy, 0)} target="_blank">app</a>` : ``}</div>`;
        },
        header: () => {
          return `<h2 slot="header" class="sm:text-4xl text-2xl font-extrabold">${escape(timeEvent.name)}</h2>`;
        },
        default: () => {
          return `<div class="flex gap-2 flex-col h-full mt-2"><div class="flex w-full justify-center"><img${add_attribute("src", timeEvent.img, 0)} alt="..." class="object-fill object-center h-72 w-fit"></div> <hr> <div class="flex"><p class="text-base text-left mb-2">${escape(timeEvent.short)}</p></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const TimelineEvent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { timeEvent } = $$props;
  let { y } = $$props;
  let { direction } = $$props;
  let { last } = $$props;
  let myElement;
  let elementTop;
  let viewportHeight;
  let randomPadding;
  if ($$props.timeEvent === void 0 && $$bindings.timeEvent && timeEvent !== void 0)
    $$bindings.timeEvent(timeEvent);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  randomPadding = 20 + Math.random() * 8;
  return ` <div class="w-full h-[10dvh] relative z-10"${add_attribute("this", myElement, 0)}>${y + viewportHeight >= elementTop ? `<div class="${"md:text-5xl sm:text-3xl text-xl h-full text-center items-center flex transition-opacity relative " + escape(direction === "LEFT" ? "justify-start" : "justify-end", true)}"${add_attribute(
    "style",
    direction === "LEFT" ? `padding-left: ${randomPadding}dvw;` : `padding-right: ${randomPadding}dvw`,
    0
  )}>${validate_component(ModalCard, "ModalCard").$$render($$result, { timeEvent, direction, last }, {}, {})}</div>` : ``}</div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { events } = $$props;
  let y;
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  return ` <div class="w-full flex flex-col gap-10 p-4 bg-blue-950 text-slate-200 overflow-hidden pb-40" id="timeline"><h1 class="md:text-5xl sm:text-4xl text-3xl font-extrabold h-full" data-svelte-h="svelte-sjtqrg">TIMELINE</h1> <div class="flex flex-col gap-[20dvh] w-full text-black">${each(events, (timeEvent, index) => {
    return `${validate_component(TimelineEvent, "TimelineEvent").$$render(
      $$result,
      {
        timeEvent,
        y,
        direction: index % 2 === 0 ? "RIGHT" : "LEFT",
        last: index === events.length - 1
      },
      {},
      {}
    )}`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-h046sn_START -->${$$result.title = `<title>John Lucas Scicluna Portfolio</title>`, ""}<meta name="description" content="John Scicluna Portfolio"><!-- HEAD_svelte-h046sn_END -->`, ""} <main> ${validate_component(Banner_1, "Banner").$$render($$result, {}, {}, {})}  ${validate_component(About, "About").$$render($$result, {}, {}, {})}  ${validate_component(Timeline, "Timeline").$$render($$result, { events: data.events }, {}, {})}</main>`;
});
export {
  Page as default
};
