import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, Instagram, MessageCircle, Facebook } from "lucide-react";
const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit Us" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur shadow-[0_4px_30px_-10px_rgba(44,24,16,0.15)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "font-display text-3xl md:text-4xl font-bold text-espresso tracking-tight", children: "Brew" }),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-9", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: l.to,
              className: "text-espresso/80 hover:text-espresso text-sm font-medium relative group transition-colors",
              activeProps: { className: "text-espresso" },
              children: [
                l.label,
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-[2px] bg-espresso transition-all duration-300 group-hover:w-full" })
              ]
            }
          ) }, l.to)) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/menu",
              className: "hidden md:inline-flex items-center bg-espresso text-beige px-5 py-2.5 rounded-full text-sm font-medium hover:bg-espresso/90 hover:scale-105 transition-all",
              children: "Order Now"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Menu",
              className: "md:hidden text-espresso",
              onClick: () => setOpen(!open),
              children: open ? /* @__PURE__ */ jsx(X, { size: 26 }) : /* @__PURE__ */ jsx(Menu, { size: 26 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-white/98 backdrop-blur border-t border-espresso/10 animate-fade-up", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col px-6 py-5 gap-4", children: [
          links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "block text-espresso text-lg font-medium py-1",
              children: l.label
            }
          ) }, l.to)),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/menu",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex justify-center bg-espresso text-beige px-5 py-3 rounded-full font-medium",
              children: "Order Now"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-espresso text-beige", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-5xl font-bold", children: "Brew" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-beige/70 italic", children: "Sip. Stay. Repeat." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-beige/60 text-sm leading-relaxed max-w-xs", children: "Islamabad's coziest corner for coffee, conversation and good vibes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-xl mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-beige/70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-beige transition", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/menu", className: "hover:text-beige transition", children: "Menu" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-beige transition", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "hover:text-beige transition", children: "Gallery" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/visit", className: "hover:text-beige transition", children: "Visit Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-xl mb-4", children: "Find Us" }),
        /* @__PURE__ */ jsxs("p", { className: "text-beige/70 text-sm leading-relaxed", children: [
          "Shop 5, Sector I-8 Markaz",
          /* @__PURE__ */ jsx("br", {}),
          "Islamabad, Pakistan"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com/brew.isb", "aria-label": "Instagram", className: "w-10 h-10 rounded-full border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-espresso transition", children: /* @__PURE__ */ jsx(Instagram, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923111234567", "aria-label": "WhatsApp", className: "w-10 h-10 rounded-full border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-espresso transition", children: /* @__PURE__ */ jsx(MessageCircle, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "w-10 h-10 rounded-full border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-espresso transition", children: /* @__PURE__ */ jsx(Facebook, { size: 18 }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-beige/10", children: /* @__PURE__ */ jsx("p", { className: "text-center text-beige/60 text-sm py-5", children: "© 2025 Brew, Islamabad. Crafted by Soban Iftikhar." }) })
  ] });
}
const appCss = "/assets/styles-BBR8tpP6.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl font-bold", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-espresso/70", children: "This page took a coffee break." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-flex bg-espresso text-beige px-5 py-2.5 rounded-full", children: "Go home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold", children: "Something spilled." }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-espresso/70 text-sm", children: "Try refreshing the page." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          router.invalidate();
          reset();
        },
        className: "mt-6 inline-flex bg-espresso text-beige px-5 py-2.5 rounded-full",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Brew — Islamabad's Coziest Cafe in I-8 Markaz" },
      { name: "description", content: "Brew is Islamabad's cozy cafe in I-8 Markaz serving artisan coffee, matcha, iced teas, brownies & cheesecakes. Sip. Stay. Repeat." },
      { property: "og:title", content: "Brew — Islamabad's Coziest Cafe" },
      { property: "og:description", content: "Coffee, matcha, iced teas & desserts in I-8 Markaz, Islamabad." },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-0", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$4 = () => import("./visit-R7Qi2RJ1.js");
const Route$4 = createFileRoute("/visit")({
  head: () => ({
    meta: [{
      title: "Visit Us — Brew Islamabad"
    }, {
      name: "description",
      content: "Find Brew at Shop 5, I-8 Markaz, Islamabad. Hours, contact & WhatsApp ordering."
    }, {
      property: "og:title",
      content: "Visit Brew — I-8 Markaz, Islamabad"
    }, {
      property: "og:description",
      content: "Address, hours & WhatsApp ordering."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./menu-BFa3GQgH.js");
const Route$3 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Brew Islamabad"
    }, {
      name: "description",
      content: "Coffee, matcha, iced teas, baked goods & desserts. Made fresh daily at Brew, I-8 Markaz Islamabad."
    }, {
      property: "og:title",
      content: "Menu — Brew Islamabad"
    }, {
      property: "og:description",
      content: "Explore Brew's full menu of coffee, matcha & desserts."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./gallery-CzmvRh2N.js");
const Route$2 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Brew Islamabad"
    }, {
      name: "description",
      content: "Inside Brew — moments, drinks and desserts from our I-8 Markaz cafe."
    }, {
      property: "og:title",
      content: "Gallery — Brew Islamabad"
    }, {
      property: "og:description",
      content: "The Brew aesthetic, in pictures."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DWP8aaV7.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Brew Islamabad"
    }, {
      name: "description",
      content: "Brew was started in 2023 to be Islamabad's coziest cafe. Read our story."
    }, {
      property: "og:title",
      content: "About Brew"
    }, {
      property: "og:description",
      content: "The story behind Islamabad's coziest cafe."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BsnMUkkH.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const VisitRoute = Route$4.update({
  id: "/visit",
  path: "/visit",
  getParentRoute: () => Route$5
});
const MenuRoute = Route$3.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$5
});
const GalleryRoute = Route$2.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  GalleryRoute,
  MenuRoute,
  VisitRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
