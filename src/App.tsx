import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';

import Footer from './components/Footer';

import IntroLoader from './components/IntroLoader';
import CustomCursor from './components/CustomCursor';

function App() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {

    if (isDark) {

      document.documentElement.classList.add('dark');

    } else {

      document.documentElement.classList.remove('dark');

    }

  }, [isDark]);

  const toggleTheme = () => {

    setIsDark(!isDark);

  };

  return (

    <div
      className="
        min-h-screen
        overflow-x-hidden

        bg-white
        text-black

        dark:bg-[#020617]
        dark:text-white

        transition-colors
        duration-300
      "
    >

      {/* INTRO */}
      <IntroLoader />

      {/* CURSOR */}
      <CustomCursor />

      {/* NAVBAR */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* HERO */}
      <HeroSection isDark={isDark} />

      {/* ABOUT */}
      <AboutSection isDark={isDark} />

      {/* SKILLS */}
      <SkillsSection isDark={isDark} />

      {/* PROJECTS */}
      <ProjectsSection isDark={isDark} />

      {/* CERTIFICATES */}
      <CertificatesSection isDark={isDark} />

      {/* CONTACT */}
      <ContactSection isDark={isDark} />

      {/* FOOTER */}
      <Footer isDark={isDark} />

    </div>

  );
}

export default App;