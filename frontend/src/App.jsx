import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Gallery from "./components/Gallery";
import TourDetails from "./components/TourDetails";
import Steps from "./components/Steps";
import MapSection from "./components/MapSection";
import Booking from "./components/Booking";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Highlights />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
        <Reveal>
          <TourDetails />
        </Reveal>
        <Reveal>
          <Steps />
        </Reveal>
        <Reveal>
          <MapSection />
        </Reveal>
        <Reveal>
          <Booking />
        </Reveal>
        <Reveal>
          <Socials />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
