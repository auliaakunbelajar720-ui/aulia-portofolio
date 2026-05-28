import { motion } from 'framer-motion';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {

  return (

    <motion.main

      initial={{
        opacity: 0,
        y: 80,
        scale: 1.02,
        filter: 'blur(12px)',
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}

      transition={{
        duration: 1.5,
        ease: 'easeOut',
      }}
    >

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <CertificatesSection />

      <ContactSection />

      <Footer />

    </motion.main>

  );
}