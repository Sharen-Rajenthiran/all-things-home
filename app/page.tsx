import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import Promotions from "@/sections/Promotions";
import About from "@/sections/About";
import HowToOrder from "@/sections/HowToOrder";
import Contact from "@/sections/Contact";
import Checkout from "@/sections/Checkout";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Promotions />
      <About />
      <HowToOrder />
      <Checkout />
      <Contact />
    </main>
  );
}