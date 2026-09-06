import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import VisitSection from "./components/VisitSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <Testimonials />
      <VisitSection />
      <Footer />
    </main>
  );
}
