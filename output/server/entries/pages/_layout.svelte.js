import { c as create_ssr_component, b as compute_rest_props, g as getContext, d as spread, e as escape_attribute_value, f as escape_object, h as escape, v as validate_component, i as add_attribute, j as compute_slots } from "../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { b as base } from "../../chunks/paths.js";
import { I as Icon, g as github } from "../../chunks/github.js";
import { inject } from "@vercel/analytics";
const app = "";
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ml-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  let { activateClickOutside = true } = $$props;
  let { hidden = true } = $$props;
  let { position = "fixed" } = $$props;
  let { leftOffset = "inset-y-0 left-0" } = $$props;
  let { rightOffset = "inset-y-0 right-0" } = $$props;
  let { topOffset = "inset-x-0 top-0" } = $$props;
  let { bottomOffset = "inset-x-0 bottom-0" } = $$props;
  let { width = "w-80" } = $$props;
  let { backdrop = true } = $$props;
  let { bgColor = "bg-gray-900" } = $$props;
  let { bgOpacity = "bg-opacity-75" } = $$props;
  let { placement = "left" } = $$props;
  let { id = "drawer-example" } = $$props;
  let { divClass = "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800" } = $$props;
  let { transitionParams = {} } = $$props;
  let { transitionType = "fly" } = $$props;
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 left-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity);
  if ($$props.activateClickOutside === void 0 && $$bindings.activateClickOutside && activateClickOutside !== void 0)
    $$bindings.activateClickOutside(activateClickOutside);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.leftOffset === void 0 && $$bindings.leftOffset && leftOffset !== void 0)
    $$bindings.leftOffset(leftOffset);
  if ($$props.rightOffset === void 0 && $$bindings.rightOffset && rightOffset !== void 0)
    $$bindings.rightOffset(rightOffset);
  if ($$props.topOffset === void 0 && $$bindings.topOffset && topOffset !== void 0)
    $$bindings.topOffset(topOffset);
  if ($$props.bottomOffset === void 0 && $$bindings.bottomOffset && bottomOffset !== void 0)
    $$bindings.bottomOffset(bottomOffset);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgOpacity === void 0 && $$bindings.bgOpacity && bgOpacity !== void 0)
    $$bindings.bgOpacity(bgOpacity);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  return `${!hidden ? `${backdrop && activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : `${backdrop && !activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : ``}`} <div${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, width, position, placements[placement], $$props.class))
      },
      { tabindex: "-1" },
      {
        "aria-controls": escape_attribute_value(id)
      },
      {
        "aria-labelledby": escape_attribute_value(id)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ hidden }) : ``}</div>` : ``} `;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asideClass"]);
  let { asideClass = "w-64" } = $$props;
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(asideClass, $$props.class))
      },
      { "aria-label": "Sidebar" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside> `;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "spanClass", "activeClass", "active"]);
  let $$slots = compute_slots(slots);
  let { aClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass: spanClass2 = "ml-3" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``} <span${add_attribute("class", spanClass2, 0)}>${escape(label)}</span> ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li> `;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
let spanClass = "flex-1 ml-3 whitespace-nowrap";
const Drawer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hidden2 = true;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let currentPage = "";
  afterNavigate(() => {
    currentPage = window?.location?.href.split("/")[3] || "";
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="text-center"><button class="hover:scale-110" aria-label="Menu" data-svelte-h="svelte-cmfn8p"><svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" id="menu" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="3" y1="12" x2="21" y2="12" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary" d="M9,18H21M3,6H15" style="fill: none; stroke: rgb(204, 0, 204); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg></button></div> ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        class: "bg-purple-100",
        transitionType: "fly",
        transitionParams,
        id: "sidebar2",
        hidden: hidden2
      },
      {
        hidden: ($$value) => {
          hidden2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center"><h5 id="drawer-navigation-label-3" class="text-base font-bold text-purple-900 uppercase dark:text-purple-200" data-svelte-h="svelte-zoeaka">Take a look around!</h5> ${validate_component(CloseButton, "CloseButton").$$render(
            $$result,
            {
              class: "mb-4 text-purple-800 hover:text-purple-950 font-extrabold dark:text-white hover:bg-transparent"
            },
            {},
            {}
          )}</div> ${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render(
                $$result,
                {
                  divClass: "overflow-y-auto py-4 px-3 rounded dark:bg-purple-800"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: "Home",
                            class: "hover:text-purple-800 text-xl " + (currentPage == "" ? "text-purple-800 dark:hover:text-purple-200" : "text-purple-950 dark:text-purple-300") + " font-extrabold dark:text-purple-300 hover:bg-transparent",
                            href: base + "/",
                            "aria-label": "Return Home!"
                          },
                          {},
                          {
                            icon: () => {
                              return `<svg class="w-6 h-6 text-purple-950 dark:text-purple-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18"><path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"></path></svg>`;
                            }
                          }
                        )} ${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: "Resume",
                            spanClass,
                            class: "hover:text-purple-800 text-xl " + (currentPage == "resume" ? "text-purple-800 dark:hover:text-purple-200" : "text-purple-950 dark:text-purple-300") + " font-extrabold dark:text-purple-300 hover:bg-transparent",
                            href: base + "/resume",
                            "aria-label": "See my Resume!"
                          },
                          {},
                          {
                            icon: () => {
                              return `<svg class="w-6 h-6 text-purple-950 dark:text-purple-200 font-extrabold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2M5 5h8m-8 5h8m-8 4h8"></path></svg>`;
                            }
                          }
                        )} ${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: "Contact",
                            spanClass,
                            class: "hover:text-purple-800 text-xl " + (currentPage == "contact" ? "text-purple-800 dark:hover:text-purple-200" : "text-purple-950 dark:text-purple-300") + " font-extrabold dark:text-purple-300 hover:bg-transparent",
                            href: base + "/contact",
                            "aria-label": "Contact Me!"
                          },
                          {},
                          {
                            icon: () => {
                              return `<svg class="w-6 h-6 text-purple-950 dark:text-purple-200 font-extrabold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"><path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path><path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path></svg>`;
                            }
                          }
                        )} ${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: "Projects",
                            spanClass,
                            class: "hover:text-purple-800 text-xl " + (currentPage == "projects" ? "text-purple-800 dark:hover:text-purple-200" : "text-purple-950 dark:text-purple-300") + " font-extrabold dark:text-purple-300 hover:bg-transparent",
                            href: base + "/projects",
                            "aria-label": "See my Projects!"
                          },
                          {},
                          {
                            icon: () => {
                              return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4Z"></path></g></svg>`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const linkedinSquare = {
  "linkedin-square": {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M237 1414h231v-694h-231v694zM483 506q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zM1068 1414h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"
      }
    ]
  }
};
const envelopeO = {
  "envelope-o": {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: "M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-1-1q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zM1664 453v-11-13.5t-0.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h1 1q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zM1792 416v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
      }
    ]
  }
};
const Foot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage = "";
  afterNavigate(() => {
    currentPage = window?.location?.href.split("/")[3] || "";
  });
  return `<footer class="flex flex-col gap-2 items-center h-36 min-h-[20%] relative bg-indigo-950 text-slate-200 text-sm"><div class="border-t border-gray-700 h-24 flex sm:flex-row flex-col text-xs sm:justify-around items-center w-full p-5"><p class="text-xl whitespace-nowrap" data-svelte-h="svelte-ke3usg">JLS 2023. All rights reserved.</p> <div class="flex flex-col md:gap-0 gap-4 justify-center items-center"><div class="flex gap-1 w-1/5 justify-center"><div class="md:w-16 md:h-16 h-12 w-12 flex items-center hover:text-purple-300"><a${add_attribute("href", "https://github.com/scicluna/", 0)} target="_blank" aria-label="Check out my github!">${validate_component(Icon, "Icon").$$render($$result, { data: github, scale: 3 }, {}, {})}</a></div> <div class="md:w-16 md:h-16 h-12 w-12 flex items-center hover:text-purple-300"><a${add_attribute("href", "https://www.linkedin.com/in/john-scicluna-472291bb/", 0)} target="_blank" aria-label="Check out my linkedin!">${validate_component(Icon, "Icon").$$render($$result, { data: linkedinSquare, scale: 3 }, {}, {})}</a></div> <div class="md:w-16 md:h-16 h-12 w-12 flex items-center hover:text-purple-300"><a${add_attribute("href", "mailto:sciclunajl@gmail.com", 0)} target="_blank" aria-label="Email me!">${validate_component(Icon, "Icon").$$render($$result, { data: envelopeO, scale: 3 }, {}, {})}</a></div></div></div> <div class="flex gap-1 whitespace-nowrap"><a class="${"text-xl " + escape(currentPage == "" ? "text-purple-300" : "text-white", true) + " hover:text-purple-300"}" href="${escape(base, true) + "/"}" aria-label="Return to Home!">Home |</a> <a class="${"text-xl " + escape(
    currentPage == "resume" ? "text-purple-300" : "text-white",
    true
  ) + " hover:text-purple-300"}" href="${escape(base, true) + "/resume"}" aria-label="Check out my Resume!">Resume |</a> <a class="${"text-xl " + escape(
    currentPage == "contact" ? "text-purple-300" : "text-white",
    true
  ) + " hover:text-purple-300"}" href="${escape(base, true) + "/contact"}" aria-label="Contact Me!">Contact Me |</a> <a class="${"text-xl " + escape(
    currentPage == "projects" ? "text-purple-300" : "text-white",
    true
  ) + " hover:text-purple-300"}" href="${escape(base, true) + "/projects"}" aria-label="Check out my Projects!">Projects</a></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  return `<nav class="fixed top-5 left-5 z-50">${validate_component(Drawer_1, "Drawer").$$render($$result, {}, {}, {})}</nav> ${slots.default ? slots.default({}) : ``} <footer>${validate_component(Foot, "Foot").$$render($$result, {}, {}, {})}</footer>`;
});
export {
  Layout as default
};
