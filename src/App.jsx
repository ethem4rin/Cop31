import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useContent } from "./content/ContentContext";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import WelcomeModal from "./components/WelcomeModal";
import Hero from "./components/Hero";
import About from "./components/About";
import University from "./components/University";
import Projects from "./components/Projects";
import Law from "./components/Law";
import CampusMap from "./components/CampusMap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  const { brand } = useContent();
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.title = brand.documentTitle;
  }, [brand.documentTitle]);

  useEffect(() => {
    // Yenilemede tarayıcı eski kaydırma konumunu geri yüklemesin.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div className="progressbar" style={{ scaleX: progress }} />

      <WelcomeModal />
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <University />
        <Projects />
        <Law />
        <CampusMap />
        <Team />
      </main>

      <Footer />
    </>
  );
}
