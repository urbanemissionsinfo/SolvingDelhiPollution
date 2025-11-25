import "clsx";
/* empty css               */
import { w as attr, x as attr_style, y as ensure_array_like, z as stringify, F as bind_props, v as head, G as attr_class } from "../../chunks/index.js";
import * as d3 from "d3";
import { j as fallback } from "../../chunks/utils2.js";
import { e as escape_html } from "../../chunks/context.js";
const data = [
  {
    year: "2015-01-01",
    averagePM25: 125
  },
  {
    year: "2016-01-01",
    averagePM25: 133
  },
  {
    year: "2017-01-01",
    averagePM25: 117
  },
  {
    year: "2018-01-01",
    averagePM25: 120
  },
  {
    year: "2019-01-01",
    averagePM25: 105
  },
  {
    year: "2020-01-01",
    averagePM25: 93
  },
  {
    year: "2021-01-01",
    averagePM25: 106
  },
  {
    year: "2022-01-01",
    averagePM25: 100
  },
  {
    year: "2023-01-01",
    averagePM25: 103
  },
  {
    year: "2024-01-01",
    averagePM25: 102
  }
];
const futureyears = [
  {
    year: "2024-01-01",
    averagePM25: 102,
    drop: 0
  },
  {
    year: "2025-01-01",
    averagePM25: 102,
    drop: 0
  },
  {
    year: "2026-01-01",
    averagePM25: 102,
    drop: 3
  },
  {
    year: "2027-01-01",
    averagePM25: 102,
    drop: 3.8
  },
  {
    year: "2028-01-01",
    averagePM25: 102,
    drop: 6.2
  },
  {
    year: "2029-01-01",
    averagePM25: 102,
    drop: 10
  },
  {
    year: "2030-01-01",
    averagePM25: 102,
    drop: 15
  },
  {
    year: "2031-01-01",
    averagePM25: 102,
    drop: 21.2
  },
  {
    year: "2032-01-01",
    averagePM25: 102,
    drop: 28.3
  },
  {
    year: "2033-01-01",
    averagePM25: 102,
    drop: 36.3
  },
  {
    year: "2034-01-01",
    averagePM25: 102,
    drop: 45
  },
  {
    year: "2035-01-01",
    averagePM25: 102,
    drop: 54.3
  },
  {
    year: "2036-01-01",
    averagePM25: 102,
    drop: 64
  },
  {
    year: "2037-01-01",
    averagePM25: 102,
    drop: 74
  },
  {
    year: "2038-01-01",
    averagePM25: 102,
    drop: 84.1
  },
  {
    year: "2039-01-01",
    averagePM25: 102,
    drop: 94.2
  },
  {
    year: "2040-01-01",
    averagePM25: 102,
    drop: 104.1
  }
];
function LineChart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data2 = $$props["data"];
    let futureyears2 = $$props["futureyears"];
    let max_drop_covid = fallback($$props["max_drop_covid"], 40);
    let max_drop_heat = fallback($$props["max_drop_heat"], 75);
    let max_drop_stubble = fallback($$props["max_drop_stubble"], 0);
    const stubbleshare = 8;
    const remainingshare = 69;
    const heatshare = 22;
    var allData = data2.concat(futureyears2);
    let width = fallback($$props["width"], 928);
    let height = fallback($$props["height"], 500);
    let marginTop = fallback($$props["marginTop"], 20);
    let marginRight = fallback($$props["marginRight"], 30);
    let marginBottom = fallback($$props["marginBottom"], 30);
    let marginLeft = fallback($$props["marginLeft"], 40);
    const xScale = d3.scaleTime(d3.extent(allData, (d) => new Date(d.year)), [marginLeft + 30, width - marginRight]);
    const yScale = d3.scaleLinear([0, d3.max(allData, (d) => d.averagePM25) + 20], [height - marginBottom, marginTop]);
    const line = d3.line().x((d) => xScale(new Date(d.year))).y((d) => yScale(d.averagePM25));
    for (var i = 1; i < futureyears2.length; i++) {
      futureyears2[i].averagePM25 = futureyears2[1].averagePM25 - (stubbleshare * max_drop_stubble / 100 + heatshare * max_drop_heat / 100 + remainingshare * max_drop_covid / 100) * (futureyears2[i].drop / 100);
    }
    $$renderer2.push(`<svg${attr("width", width)}${attr("height", height)}${attr("viewBox", `0 0 ${stringify(
      // The chart dimensions and margins as optional props.
      // Create the x (horizontal position) scale.
      // Create the y (vertical position) scale.
      // Create the line generator. SVG Path Generator
      width
    )} ${stringify(height)}`)}${attr_style("", { "max-width": "100%", height: "auto" })}><g${attr("transform", `translate(0,${stringify(height - marginBottom)})`)}><line stroke="currentColor"${attr("x1", marginLeft - 6)}${attr("x2", width)}></line><!--[-->`);
    const each_array = ensure_array_like(xScale.ticks(d3.utcYear.every(5)));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tick = each_array[$$index];
      $$renderer2.push(`<line stroke="currentColor"${attr("x1", xScale(tick))}${attr("x2", xScale(tick))}${attr("y1", 0)}${attr("y2", 6)}></line><line stroke="currentColor" stroke-opacity="0.1"${attr("x1", xScale(tick))}${attr("x2", xScale(tick))}${attr("y1", 0)}${attr("y2", -height + marginBottom)}></line><text fill="currentColor" text-anchor="middle"${attr("x", xScale(tick))}${attr("y", 22)}>${escape_html(tick.getFullYear())}</text>`);
    }
    $$renderer2.push(`<!--]--></g><g${attr("transform", `translate(${stringify(marginLeft)},0)`)}><!--[-->`);
    const each_array_1 = ensure_array_like(yScale.ticks());
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tick = each_array_1[$$index_1];
      if (tick !== 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<line stroke="currentColor" stroke-opacity="0.1"${attr("x1", 0)}${attr("x2", width - marginLeft)}${attr("y1", yScale(tick))}${attr("y2", yScale(tick))}></line><line stroke="currentColor"${attr("x1", 0)}${attr("x2", -6)}${attr("y1", yScale(tick))}${attr("y2", yScale(tick))}></line>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--><text fill="currentColor" text-anchor="end" dominant-baseline="middle"${attr("x", -9)}${attr("y", yScale(tick))}>${escape_html(tick)}</text>`);
    }
    $$renderer2.push(`<!--]--><text fill="currentColor" text-anchor="start"${attr("x", -marginLeft)}${attr("y", 15)}>Average PM2.5 Concentration</text></g><path fill="none" stroke="steelblue" stroke-width="2.5"${attr("d", line(data2))}></path><g fill="steelblue"><!--[-->`);
    const each_array_2 = ensure_array_like(data2);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let d = each_array_2[$$index_2];
      $$renderer2.push(`<rect${attr("x", xScale(new Date(d.year)) - 4)}${attr("y", yScale(d.averagePM25) - 4)} width="8" height="8"></rect>`);
    }
    $$renderer2.push(`<!--]--></g><line stroke-dasharray="4" style="stroke:green;stroke-width:2"${attr("x1", marginLeft - 6)}${attr("x2", width)}${attr("y1", yScale(40))}${attr("y2", yScale(40))}></line><text${attr("x", xScale(/* @__PURE__ */ new Date("2015-01-01")))}${attr("y", yScale(41))} fill="black" font-size="1.5rem">National ambient standard</text><svg><polygon${attr("points", `${stringify(xScale(/* @__PURE__ */ new Date("2025-01-01")))},${stringify(yScale(102))} ${stringify(xScale(/* @__PURE__ */ new Date("2040-01-01")))},${stringify(yScale(120))} ${stringify(xScale(/* @__PURE__ */ new Date("2040-01-01")))},${stringify(yScale(80))}`)} style="fill:#e7c887;"></polygon></svg><path fill="none" stroke="purple" stroke-width="2.5"${attr("d", line(futureyears2))}></path><g fill="purple"><!--[-->`);
    const each_array_3 = ensure_array_like(futureyears2);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let d = each_array_3[$$index_3];
      $$renderer2.push(`<rect${attr("x", xScale(new Date(d.year)) - 4)}${attr("y", yScale(d.averagePM25) - 4)} width="8" height="8"></rect>`);
    }
    $$renderer2.push(`<!--]--></g><g${attr("transform", `translate(${width - marginRight - 210}, ${marginTop - 20})`)}><rect width="24" height="24" fill="steelblue"></rect><line stroke="steelblue" stroke-width="2" x1="-15" y1="12" x2="40" y2="12"></line><text x="40" y="20" fill="black" font-size="20">Historical data</text></g><g${attr("transform", `translate(${width - marginRight - 210}, ${marginTop + 10})`)}><rect width="24" height="24" fill="purple"></rect><line stroke="purple" stroke-width="2" x1="-15" y1="12" x2="40" y2="12"></line><text x="40" y="20" fill="black" font-size="20">Future projections</text></g><g${attr("transform", `translate(${width - marginRight - 210}, ${marginTop + 40})`)}><rect width="24" height="24" fill="#e7c887"></rect><text x="40" y="20" fill="black" font-size="20">Business-as-usual</text></g></svg>`);
    bind_props($$props, {
      data: data2,
      futureyears: futureyears2,
      max_drop_covid,
      max_drop_heat,
      max_drop_stubble,
      width,
      height,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    });
  });
}
function Range($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let min = fallback($$props["min"], 0);
    let max = fallback($$props["max"], 100);
    let initialValue = fallback($$props["initialValue"], 20);
    let id = fallback($$props["id"], null);
    let value = fallback($$props["value"], () => typeof initialValue === "string" ? parseInt(initialValue) : initialValue, true);
    let currentThumb = null;
    let holding = false;
    const mouseEventShield = document.createElement("div");
    mouseEventShield.setAttribute("class", "mouse-over-shield");
    mouseEventShield.addEventListener("mouseover", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    holding = Boolean(currentThumb);
    head("waf0kf", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<style>
    .mouse-over-shield {
      position: fixed;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-color: rgba(255, 0, 0, 0);
      z-index: 10000;
      cursor: grabbing;
    }
  </style>`);
    });
    $$renderer2.push(`<div class="range svelte-waf0kf"><div class="range__wrapper svelte-waf0kf" tabindex="0" role="slider"${attr("aria-valuemin", min)}${attr("aria-valuemax", max)}${attr("aria-valuenow", value)}${attr("id", id)}><div class="range__track svelte-waf0kf"><div class="range__track--highlighted svelte-waf0kf"></div> <div${attr_class("range__thumb svelte-waf0kf", void 0, { "range__thumb--holding": holding })}>`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="range__tooltip svelte-waf0kf">${escape_html(value)}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
    bind_props($$props, { min, max, initialValue, id, value });
  });
}
function App($$renderer) {
  let max_covid_drop = 40;
  let max_stubble_drop = 50;
  let max_heat_drop = 50;
  let theme = "default";
  $$renderer.push(`<h1>Emission changes required for Delhi's PM2.5 to reach 40 μg/m3 by 2040</h1> <div${attr_class("svelte-pqt1n5", void 0, { "purple-theme": theme === "purple" })}><label for="basic-range" class="svelte-pqt1n5">Maximum drop in COVID-like emissions by 2040 (%)</label> `);
  Range($$renderer, { id: "basic-slider", initialValue: max_covid_drop });
  $$renderer.push(`<!----></div> <div${attr_class("svelte-pqt1n5", void 0, { "purple-theme": theme === "purple" })}><label for="basic-range" class="svelte-pqt1n5">Maximum drop in stubble burning emissions by 2040 (%)</label> `);
  Range($$renderer, { id: "basic-slider", initialValue: max_stubble_drop });
  $$renderer.push(`<!----></div> <div${attr_class("svelte-pqt1n5", void 0, { "purple-theme": theme === "purple" })}><label for="basic-range" class="svelte-pqt1n5">Maximum drop in residential heating emissions by 2040 (%)</label> `);
  Range($$renderer, { id: "basic-slider", initialValue: max_heat_drop });
  $$renderer.push(`<!----></div> <div class="row svelte-pqt1n5">`);
  LineChart($$renderer, {
    data,
    futureyears,
    max_drop_covid: max_covid_drop,
    max_drop_stubble: max_stubble_drop,
    max_drop_heat: max_heat_drop
  });
  $$renderer.push(`<!----></div> <div id="footer" class="svelte-pqt1n5"><p class="svelte-pqt1n5"><a href="https://urbanemissions.info/" class="svelte-pqt1n5">© 2025 Urban Emissions Info LLP</a></p> <p class="svelte-pqt1n5">Say hello! <a href="mailto:saikrishnadammalapati@gmail.com" class="svelte-pqt1n5"><i class="fa fa-envelope"></i> Email</a> <a href="https://www.linkedin.com/in/sarath-guttikunda-3a01149" class="svelte-pqt1n5"><img src="https://d-saikrishna.github.io/assets/linkedin.png"/> LinkedIn</a> <a href="https://github.com/urbanemissionsinfo" target="_blank" class="svelte-pqt1n5"><img src="https://d-saikrishna.github.io/assets/github.png"/> GitHub</a></p></div>`);
}
function _page($$renderer) {
  App($$renderer);
}
export {
  _page as default
};
