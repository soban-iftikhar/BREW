import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Plus, ShoppingBag } from "lucide-react";
const categories = ["All", "Coffee", "Iced Teas", "Matcha", "Baked Goods", "Desserts"];
const menu = [
  { name: "Classic Espresso", desc: "Bold, intense, single shot of pure energy.", price: 350, category: "Coffee", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80" },
  { name: "Creamy Cappuccino", desc: "Velvety foam over rich espresso.", price: 450, category: "Coffee", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80" },
  { name: "Caramel Latte", desc: "Smooth latte kissed with caramel swirl.", price: 550, category: "Coffee", img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&q=80" },
  { name: "Cold Brew", desc: "Slow-steeped 18 hours for that perfect chill.", price: 500, category: "Coffee", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80" },
  { name: "Dalgona Coffee", desc: "Whipped, dreamy, viral for a reason.", price: 500, category: "Coffee", img: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=800&q=80" },
  { name: "Peach Iced Tea", desc: "Sun-kissed peach over crushed ice.", price: 400, category: "Iced Teas", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80" },
  { name: "Lemon Mint Iced Tea", desc: "Crisp lemon, fresh mint, instant refresh.", price: 380, category: "Iced Teas", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80" },
  { name: "Strawberry Iced Tea", desc: "Sweet berries with a tea-time twist.", price: 420, category: "Iced Teas", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&q=80" },
  { name: "Passion Fruit Tea", desc: "Tropical, tangy, completely addictive.", price: 450, category: "Iced Teas", img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=800&q=80" },
  { name: "Classic Matcha Latte", desc: "Ceremonial grade, steamed to perfection.", price: 550, category: "Matcha", img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80" },
  { name: "Iced Matcha", desc: "Stone-ground matcha over creamy milk & ice.", price: 600, category: "Matcha", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80" },
  { name: "Matcha Smoothie", desc: "Blended thick with banana and oat milk.", price: 650, category: "Matcha", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80" },
  { name: "Fudgy Brownie", desc: "Rich, gooey, chocolate-overload bliss.", price: 350, category: "Baked Goods", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80" },
  { name: "Chocolate Chip Cookie", desc: "Warm, soft centre, crisp golden edges.", price: 200, category: "Baked Goods", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80" },
  { name: "Croissant", desc: "Buttery, flaky, French-style perfection.", price: 380, category: "Baked Goods", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80" },
  { name: "New York Cheesecake", desc: "Classic, dense, melts on your fork.", price: 600, category: "Desserts", img: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=800&q=80" },
  { name: "Lotus Biscoff Cake Slice", desc: "Caramelised cookie cream, pure obsession.", price: 700, category: "Desserts", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80" },
  { name: "Tiramisu", desc: "Coffee-soaked layers of mascarpone heaven.", price: 650, category: "Desserts", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80" },
  { name: "Chocolate Lava Cake", desc: "Crack the shell, watch it ooze.", price: 580, category: "Desserts", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80" }
];
function MenuSection({ limit }) {
  const [active, setActive] = useState("All");
  const [order, setOrder] = useState([]);
  const [toast, setToast] = useState(null);
  const items = active === "All" ? menu : menu.filter((m) => m.category === active);
  const visible = limit ? items.slice(0, limit) : items;
  const addToOrder = (item) => {
    setOrder((prev) => {
      const existing = prev.find((o) => o.name === item.name);
      if (existing) {
        return prev.map(
          (o) => o.name === item.name ? { ...o, quantity: o.quantity + 1 } : o
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setToast(`${item.name} added!`);
    setTimeout(() => setToast(null), 2e3);
  };
  const totalItems = order.reduce((sum, o) => sum + o.quantity, 0);
  const totalPrice = order.reduce((sum, o) => sum + o.price * o.quantity, 0);
  const handleCheckout = () => {
    if (order.length === 0) return;
    const orderText = order.map((o) => `${o.quantity}x ${o.name} (Rs. ${o.price * o.quantity})`).join(", ");
    const msg = `Hi Brew! I'd like to order: ${orderText}. Total: Rs. ${totalPrice}`;
    window.open(
      `https://wa.me/923111234567?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };
  return /* @__PURE__ */ jsx("section", { id: "menu", className: "py-20 md:py-28 px-5 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sage font-medium tracking-widest text-sm uppercase", children: "✦ The Menu ✦" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-7xl font-bold mt-3", children: "The Menu" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-espresso/70 italic", children: "Made fresh, served with love." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex overflow-x-auto gap-2 md:gap-3 mb-12 pb-2 scrollbar-hide snap-x px-1", children: categories.map((c) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActive(c),
        className: `px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === c ? "bg-espresso text-beige shadow-md scale-105" : "bg-white/60 text-espresso hover:bg-white border border-espresso/10"}`,
        children: c
      },
      c
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8", children: visible.map((item) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.img,
              alt: item.name,
              loading: "lazy",
              className: "w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 md:p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg md:text-2xl font-semibold leading-tight", children: item.name }),
              /* @__PURE__ */ jsxs("span", { className: "font-display text-base md:text-lg whitespace-nowrap text-sage font-semibold", children: [
                "Rs. ",
                item.price
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-espresso/65 text-xs md:text-sm", children: item.desc }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => addToOrder(item),
                className: "mt-4 w-full inline-flex items-center justify-center gap-2 bg-beige hover:bg-espresso hover:text-beige border border-espresso/15 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
                children: [
                  /* @__PURE__ */ jsx(Plus, { size: 16 }),
                  " Add to Order"
                ]
              }
            )
          ] })
        ]
      },
      item.name
    )) }),
    totalItems > 0 && /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50", children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleCheckout,
        className: "flex items-center gap-2 bg-espresso text-beige px-4 py-3 rounded-full shadow-xl text-xs font-semibold hover:scale-105 transition-transform whitespace-nowrap",
        children: [
          /* @__PURE__ */ jsx(ShoppingBag, { size: 16 }),
          /* @__PURE__ */ jsxs("span", { children: [
            totalItems,
            " item",
            totalItems > 1 ? "s" : ""
          ] }),
          /* @__PURE__ */ jsx("span", { className: "opacity-60", children: "·" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Rs. ",
            totalPrice
          ] }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline opacity-70", children: "· Order on WhatsApp" })
        ]
      }
    ) }),
    toast && /* @__PURE__ */ jsx("div", { className: "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-sage text-white text-sm px-5 py-2.5 rounded-full shadow-lg", children: toast })
  ] }) });
}
export {
  MenuSection as M
};
