import { c as create_ssr_component, b as compute_rest_props, d as spread, h as escape, e as escape_attribute_value, f as escape_object, v as validate_component, l as each } from "./ssr.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw = "";
  let { data } = $$props;
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return "";
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  raw = getRaw(data);
  return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const Svg_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fa-icon.svelte-1mc5hvj{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1mc5hvj{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1mc5hvj{transform:scale(1, -1)}.fa-spin.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1mc5hvj{color:#fff}.fa-pulse.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s infinite steps(8)}@keyframes svelte-1mc5hvj-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "width", "height", "box", "spin", "inverse", "pulse", "flip", "style", "label"]);
  let { class: className = "" } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { box = "0 0 0 0" } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = "none" } = $$props;
  let { style = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.box === void 0 && $$bindings.box && box !== void 0)
    $$bindings.box(box);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  return `<svg${spread(
    [
      { version: "1.1" },
      {
        class: "fa-icon " + escape(className, true)
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      {
        "aria-label": escape_attribute_value(label)
      },
      {
        role: escape_attribute_value(label ? "img" : "presentation")
      },
      { viewBox: escape_attribute_value(box) },
      { style: escape_attribute_value(style) },
      escape_object($$restProps)
    ],
    {
      classes: (spin ? "fa-spin" : "") + " " + (pulse ? "fa-pulse" : "") + " " + (inverse ? "fa-inverse" : "") + " " + (flip === "horizontal" ? "fa-flip-horizontal" : "") + " " + (flip === "vertical" ? "fa-flip-vertical" : "") + " svelte-1mc5hvj"
    }
  )}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
let outerScale = 1;
function normaliseData(data) {
  let name;
  let iconData;
  if (!data) {
    return void 0;
  } else if ("definition" in data) {
    console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
    return void 0;
  } else if ("iconName" in data && "icon" in data) {
    name = data.iconName;
    let paths = [];
    const [width, height, , , path] = data.icon;
    if (Array.isArray(path)) {
      paths = path;
    } else {
      paths = [path];
    }
    iconData = {
      width,
      height,
      paths: paths.map((path2) => {
        return { d: path2 };
      })
    };
  } else {
    name = Object.keys(data)[0];
    iconData = data[name];
  }
  return iconData;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "data", "scale", "spin", "inverse", "pulse", "flip", "label", "style"]);
  let { class: className = "" } = $$props;
  let { data } = $$props;
  let iconData;
  let { scale = 1 } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = void 0 } = $$props;
  let { label = "" } = $$props;
  let { style = "" } = $$props;
  let width = 10;
  let height = 10;
  let combinedStyle;
  let box;
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }
  function calculateWidth() {
    if (iconData) {
      return iconData.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (iconData) {
      return iconData.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return "";
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        iconData = normaliseData(data);
        width = calculateWidth();
        height = calculateHeight();
        combinedStyle = calculateStyle();
        box = calculateBox();
      }
    }
    $$rendered = `${validate_component(Svg, "Svg").$$render($$result, Object_1.assign({}, { label }, { width }, { height }, { box }, { style: combinedStyle }, { spin }, { flip }, { inverse }, { pulse }, { class: className }, $$restProps), {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ` ${iconData ? `${iconData.paths ? `${each(iconData.paths, (path) => {
          return `<path${spread([escape_object(path)], {})}></path>`;
        })}` : ``} ${iconData.polygons ? `${each(iconData.polygons, (polygon) => {
          return `<polygon${spread([escape_object(polygon)], {})}></polygon>`;
        })}` : ``} ${iconData.raw ? `${validate_component(Raw, "Raw").$$render(
          $$result,
          { data: iconData },
          {
            data: ($$value) => {
              iconData = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}` : ``} `}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const github = {
  github: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M768 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 0.5-76.5t0.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 88.5t0.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zM291 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zM322 1265q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zM352 1310q9-7 0-19-8-13-17-6-9 5 0 18t17 7zM394 1352q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zM451 1377q3-11-13-16-15-4-19 7t13 15q15 6 19-6zM514 1382q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zM572 1372q-2-11-18-9-16 3-14 15t18 8 14-14z"
      }
    ]
  }
};
export {
  Icon as I,
  github as g
};
