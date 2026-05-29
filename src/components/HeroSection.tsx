import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import {
  Github,
  Youtube,
  Instagram,
} from 'lucide-react';

import { FaDiscord } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

import profile from '@/assets/profile.png';

interface HeroSectionProps {
  isDark?: boolean;
}

export default function HeroSection({
  isDark = true,
}: HeroSectionProps) {

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // TEXT ANIMATION
  const roles = [
    'Aspiring Web Developer',
    'Building My Skills',
    'Creative Designer',
    'Casual Gamer',
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[index];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {

      setText((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      // PAUSE
      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      // NEXT TEXT
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }

    }, speed);

    return () => clearTimeout(timeout);

  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-hero
      "
    >

      <ThreeScene />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[300px]
            h-[300px]
            bg-cyan-500/10
            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            w-[300px]
            h-[300px]
            bg-emerald-500/10
            blur-3xl
            rounded-full
          "
        />

      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-14
            max-w-7xl
            mx-auto
          "
        >

          {/* FOTO PROFIL */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="relative flex-shrink-0"
          >

            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-400/20
                to-emerald-400/20
                blur-3xl
                rounded-full
              "
            />

           <img
  src={profile}

  alt="Aulia Fakhrul Mubarraq"

  className="
    scale-x-[-1]
    w-52
    h-52
    md:w-72
    md:h-72
    lg:w-80
    lg:h-80

    rounded-full
    object-cover

    border-[10px]
    border-cyan-400/10

    relative
    z-10

    shadow-[0_0_40px_rgba(34,211,238,0.25)]

    hover:scale-105
    transition-all
    duration-500
  "
/>
          </motion.div>

          {/* TEXT */}
          <div className="flex-1 text-center">

            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: 0.2,
              }}

              className="
                flex
                justify-center
                mb-6
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-xl
                  text-cyan-300
                  text-sm
                  shadow-[0_0_20px_rgba(34,211,238,0.10)]
                "
              >

                {/* MANIK KIRI */}
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse delay-200" />
                </div>

                <span className="tracking-wide">
                  Selamat datang di portfolio saya
                </span>

                {/* MANIK KANAN */}
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse delay-200" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                </div>

              </div>

            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.9,
                delay: 0.4,
              }}

              className="
                font-black
                leading-[1.05]
                mb-6
                tracking-tight
              "
            >

              {/* NAMA */}
             <span
  className={`
    ${
      isDark
        ? 'text-white'
        : 'text-black'
    }

    text-4xl
    md:text-5xl
    lg:text-6xl

    drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]
  `}
>
  Aulia Fakhrul Mubarraq
</span>

              {/* TEXT ANIMATION */}
              <div
                className="
                  mt-4
                  flex
                  justify-center
                "
              >

                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-300
                    via-emerald-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent

                    text-lg
                    md:text-xl
                    lg:text-2xl

                    font-semibold
                    tracking-wide

                    inline-flex
                    items-center
                    justify-center

                    min-h-[40px]

                    drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]
                  "
                >

                  {text}

                  {/* CURSOR */}
                  <span
                    className="
                      ml-2
                      w-[3px]
                      h-[24px]
                      bg-cyan-300
                      rounded-full
                      animate-pulse
                    "
                  />

                </span>

              </div>

            </motion.h1>

            {/* DESC */}
            <motion.p
              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 0.8,
              }}

       className={`
  text-base
  md:text-lg
  mb-10

  max-w-2xl
  mx-auto

  leading-8
  text-justify

  ${
    isDark
      ? 'text-gray-300'
      : 'text-gray-700'
  }
`}
            >
              Saya membangun aplikasi web yang modern,
              elegan, dan interaktif untuk menciptakan
              pengalaman digital yang lebih menarik,
              responsif, dan nyaman digunakan.
            </motion.p>

            {/* BUTTON + SOCIAL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: 1,
              }}

              className="
                flex
                flex-col
                lg:flex-row
                items-center
                justify-center
                gap-8
              "
            >

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4">

                <Button
  size="lg"

  onClick={() => scrollToSection('#projects')}

  className="
    relative
    z-50

    rounded-full
    px-8
    h-12

    bg-gradient-to-r
    from-cyan-400
    to-emerald-400

    text-black
    font-semibold

    shadow-[0_0_30px_rgba(34,211,238,0.35)]

    hover:scale-105

    transition-all
  "
>
  Lihat Projects
</Button>
                <Button
                  size="lg"
                  variant="outline"

                  onClick={() => scrollToSection('#contact')}

                  className="
                    rounded-full
                    px-8
                    h-12
                    border-cyan-400/30
                    bg-white/5
                    text-cyan-300
                    hover:bg-cyan-400/10
                    hover:border-cyan-300
                    transition-all
                  "
                >
                  Hubungi Saya
                </Button>

              </div>

              {/* GARIS */}
              <div className="hidden lg:block h-10 w-px bg-white/10" />

              {/* SOCIAL */}
              <div className="flex items-center gap-4">

                {/* GITHUB */}
                <motion.a
                  href="https://github.com/auliaakunbelajar720-ui"
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    border
                    border-white/10
                    text-cyan-300
                    backdrop-blur-xl
                    hover:border-cyan-400/40
                    hover:text-white
                    transition-all
                  "
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                {/* YOUTUBE */}
                <motion.a
                  href="https://www.youtube.com/@AuliaFMubarraq"
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    border
                    border-white/10
                    text-cyan-300
                    backdrop-blur-xl
                    hover:border-red-400/40
                    hover:text-red-400
                    transition-all
                  "
                >
                  <Youtube className="h-5 w-5" />
                </motion.a>

                {/* INSTAGRAM */}
                <motion.a
                  href="https://instagram.com/auliafakhrull_"
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    border
                    border-white/10
                    text-cyan-300
                    backdrop-blur-xl
                    hover:border-pink-400/40
                    hover:text-pink-400
                    transition-all
                  "
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>

                {/* DISCORD */}
                <motion.a
                  href="https://discord.com/users/uyaa_void"
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    border
                    border-white/10
                    text-cyan-300
                    backdrop-blur-xl
                    hover:border-indigo-400/40
                    hover:text-indigo-400
                    transition-all
                  "
                >
                  <FaDiscord className="h-5 w-5" />
                </motion.a>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* SCROLL ANIMATION */}
<motion.button
  initial={{
    opacity: 0,
    y: 20,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    delay: 1.8,
    duration: 1,
  }}

  onClick={() => scrollToSection('#about')}

  className="
    absolute
    bottom-8
    left-1/2
    -translate-x-1/2

    flex
    flex-col
    items-center
    gap-3

    text-cyan-300

    z-[999]

    cursor-pointer

    hover:scale-110

    transition-all
  "
>

  <div
    className="
      w-7
      h-12

      border-2
      border-cyan-400/60

      rounded-full

      flex
      justify-center
      pt-2

      backdrop-blur-sm
    "
  >

    <motion.div
      animate={{
        y: [0, 12, 0],
      }}

      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}

      className="
        w-1.5
        h-3

        rounded-full

        bg-cyan-300

        shadow-[0_0_10px_rgba(34,211,238,0.8)]
      "
    />

  </div>

</motion.button>

    </section>
  );
}