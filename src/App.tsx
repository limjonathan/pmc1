import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
