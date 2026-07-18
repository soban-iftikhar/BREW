import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { M as MenuSection } from "./MenuSection-tko0oZZa.js";
import { A as AboutSection } from "./AboutSection-B3SMI8Nz.js";
import { G as GallerySection } from "./GallerySection-CrLyWGB3.js";
import { V as VisitSection } from "./VisitSection-Bq6Ic9tI.js";
import "react";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen pt-24 md:pt-28 pb-12 px-5 md:px-8 overflow-hidden grain", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -left-20 w-96 h-96 rounded-full bg-rose/30 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-sage/30 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[calc(100vh-7rem)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-white/70 border border-espresso/10 text-espresso text-xs md:text-sm font-medium px-4 py-2 rounded-full", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-sage rounded-full animate-pulse" }),
          "Now Open in I-8 Islamabad"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] mt-6", children: [
          "Where Every Sip Feels Like a ",
          /* @__PURE__ */ jsx("em", { className: "text-sage not-italic", children: "Vibe." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg text-espresso/75 max-w-xl leading-relaxed", children: "Islamabad's coziest corner for coffee lovers, sweet tooths, and good conversations." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/menu",
              className: "inline-flex items-center gap-2 bg-espresso text-beige px-6 py-3.5 rounded-full font-medium hover:scale-105 hover:shadow-xl transition-all",
              children: [
                "Explore Menu ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/visit",
              className: "inline-flex items-center gap-2 border-2 border-espresso text-espresso px-6 py-3.5 rounded-full font-medium hover:bg-espresso hover:text-beige transition-all",
              children: "Find Us"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 flex gap-8 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl font-bold", children: "2K+" }),
            /* @__PURE__ */ jsx("p", { className: "text-espresso/60", children: "Happy Sippers" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl font-bold", children: "25+" }),
            /* @__PURE__ */ jsx("p", { className: "text-espresso/60", children: "Menu Items" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl font-bold", children: "4.9★" }),
            /* @__PURE__ */ jsx("p", { className: "text-espresso/60", children: "Avg. Rating" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative animate-fade-up delay-1", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1000&q=80",
            alt: "Aesthetic iced coffee at Brew cafe",
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 md:-top-6 md:-left-8 bg-rose text-espresso px-5 py-3 rounded-2xl shadow-xl font-display font-semibold animate-float", children: "Now Open in I-8 Islamabad ✦" }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-espresso text-beige items-center justify-center text-center font-display text-sm animate-spin-slow", children: "✦ Sip · Stay · Repeat ·" })
      ] })
    ] })
  ] });
}
function Marquee() {
  const items = [
    "Iced Teas",
    "Cold Brews",
    "Matcha Lattes",
    "Brownies",
    "Cheesecakes",
    "Loaded Fries",
    "Good Vibes Only"
  ];
  const row = [...items, ...items, ...items, ...items];
  return /* @__PURE__ */ jsx("div", { className: "bg-espresso text-beige py-5 overflow-hidden border-y border-espresso", children: /* @__PURE__ */ jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: row.map((t, i) => /* @__PURE__ */ jsxs("span", { className: "font-display text-2xl md:text-3xl mx-8 inline-flex items-center gap-8", children: [
    t,
    /* @__PURE__ */ jsx("span", { className: "text-sage", children: "✦" })
  ] }, i)) }) });
}
const reviews = [
  {
    name: "Maryam K.",
    handle: "@maryam.sips",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Brew has ruined every other cafe for me. The iced matcha alone is worth the drive from F-7."
  },
  {
    name: "Ahmed R.",
    handle: "@ahmedinislamabad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "Finally a cafe in I-8 that actually has aesthetic vibes AND good food. The lotus cake is unreal."
  },
  {
    name: "Zara T.",
    handle: "@zarabakes",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Came for the brownie, stayed for 3 hours. The staff is so warm and the cold brew is perfect."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 px-5 md:px-8 bg-sage/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-espresso/70 font-medium tracking-widest text-sm uppercase", children: "✦ Reviews" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl font-bold mt-3", children: "What People Are Saying" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: reviews.map((r, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-beige rounded-3xl p-7 hover-lift animate-fade-up",
        style: { animationDelay: `${i * 0.1}s` },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: r.avatar, alt: r.name, className: "w-14 h-14 rounded-full object-cover" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-display text-lg font-semibold leading-tight", children: r.name }),
              /* @__PURE__ */ jsx("p", { className: "text-rose text-sm", children: r.handle })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mt-4", children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsx(Star, { size: 16, className: "fill-espresso text-espresso" }, k)) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-espresso/80 italic leading-relaxed", children: [
            '"',
            r.text,
            '"'
          ] })
        ]
      },
      r.handle
    )) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsx(MenuSection, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(GallerySection, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(VisitSection, {})
  ] });
}
export {
  Index as component
};
