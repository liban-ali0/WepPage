import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Team from "./sections/Team/Team";
import Roadmap from "./sections/Roadmap/Roadmap";
import Contact from "./sections/Contact/Contact";
import Advantages from "./sections/Advantages/Advantages";

export default function App() {
  return (
    <>
      <Header />

      <main id="content" className="snap-container">
        <About />
        <Services />
        <Advantages />
        <Team />
        <Roadmap />
        <Contact />
        
        <Footer />
      </main>
    </>
  );
}
