import Scrollspy from "react-scrollspy";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import TradeMarqueeSection from "@/components/TradeMarqueeSection";


const sections = [
  "home",
  "about",
  "projects",
  "skills",
  "achievements",
  "contact",
];

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleHashChange = (hash) => {
      if (window.location.hash !== `#${hash}`) {
        navigate(`#${hash}`, { replace: true });
      }
    };

    const observerCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          handleHashChange(entry.target.id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigate]);

  return (
    <div className="min-h-screen modern-grid-bg">
   
      <Scrollspy/>
      <Navbar />
      <ScrollProgressBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TradeMarqueeSection/>
      <Footer />
    </div>
  );
};

export default Index;
