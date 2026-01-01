import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Whispers from "@/components/Whispers";
import Rooms from "@/components/Rooms";
import LittleLuxuries from "@/components/LittleLuxuries";
import Honours from "@/components/Honours";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans antialiased text-stone-900 bg-stone-50 selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <BookingForm />
      <About />
      <Whispers />
      <Rooms />
      <LittleLuxuries />
      <Honours />
      <Gallery />
      <Footer />
    </main>
  );
}
