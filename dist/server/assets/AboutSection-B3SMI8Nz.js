import { jsx, jsxs } from "react/jsx-runtime";
import { Sparkles, Leaf, Heart } from "lucide-react";
function AboutSection() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 md:py-28 px-5 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1000&q=80",
          alt: "Cozy aesthetic cafe interior at Brew",
          className: "w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex absolute -bottom-6 -right-6 bg-sage text-espresso w-32 h-32 rounded-full items-center justify-center font-display text-center text-sm font-semibold shadow-xl animate-spin-slow", children: [
        "✦ Since",
        /* @__PURE__ */ jsx("br", {}),
        "2023 ✦"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-rose font-medium tracking-widest text-sm uppercase", children: "✦ Our Story" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl font-bold mt-3 leading-[1.05]", children: "Brew wasn't built to be just a cafe." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-espresso/75 leading-relaxed", children: "We started Brew in 2023 with one idea — Islamabad needed a place that felt like home, but better. No rush, no noise. Just good coffee, better food, and the kind of atmosphere that makes you stay longer than you planned." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-espresso/75 leading-relaxed", children: "Every item on our menu is made fresh daily. Every corner of our space was designed to make you feel something." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid sm:grid-cols-3 gap-4", children: [
        { icon: Sparkles, title: "Always Fresh", text: "Baked & brewed every morning." },
        { icon: Leaf, title: "Locally Sourced", text: "Pakistani beans, Pakistani roots." },
        { icon: Heart, title: "Made with Love", text: "From our hands to your hands." }
      ].map((v) => /* @__PURE__ */ jsxs("div", { className: "bg-white/70 rounded-2xl p-5 hover-lift", children: [
        /* @__PURE__ */ jsx(v.icon, { className: "text-sage", size: 26 }),
        /* @__PURE__ */ jsx("h4", { className: "font-display text-lg font-semibold mt-2", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-espresso/65 mt-1", children: v.text })
      ] }, v.title)) })
    ] })
  ] }) });
}
export {
  AboutSection as A
};
