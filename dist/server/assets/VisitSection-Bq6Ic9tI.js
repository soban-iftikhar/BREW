import { jsx, jsxs } from "react/jsx-runtime";
import { MapPin, Phone, MessageCircle, Instagram, Clock } from "lucide-react";
function VisitSection() {
  return /* @__PURE__ */ jsx("section", { id: "visit", className: "py-20 md:py-28 px-5 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-rose font-medium tracking-widest text-sm uppercase", children: "✦ Come Through" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl font-bold mt-3", children: "Visit Us" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-[520px]", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "Brew location on Google Maps",
          src: "https://www.google.com/maps?q=I-8+Markaz,+Islamabad,+Pakistan&output=embed",
          className: "w-full h-full border-0",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 md:p-10 shadow-md flex flex-col justify-between gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
          { icon: MapPin, label: "Address", value: "Shop 5, I-8 Markaz, Islamabad" },
          { icon: Phone, label: "Phone", value: "051-1234567" },
          { icon: MessageCircle, label: "WhatsApp", value: "0311-1234567" },
          { icon: Instagram, label: "Instagram", value: "@brew.isb" },
          { icon: Clock, label: "Hours", value: "Mon–Thu 11am–11pm · Fri–Sun 10am–12am" }
        ].map((row) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-11 h-11 shrink-0 rounded-full bg-sage/30 flex items-center justify-center text-espresso", children: /* @__PURE__ */ jsx(row.icon, { size: 18 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-espresso/60", children: row.label }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg mt-0.5", children: row.value })
          ] })
        ] }, row.label)) }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/923111234567",
            target: "_blank",
            rel: "noopener",
            className: "inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-medium px-6 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { size: 20 }),
              " Chat to Order on WhatsApp"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  VisitSection as V
};
