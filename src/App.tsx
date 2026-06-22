import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-zinc-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
