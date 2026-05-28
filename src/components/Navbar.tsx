import { useState, useEffect } from 'react';

import {
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({
  isDark,
  toggleTheme,
}: NavbarProps) {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [active, setActive] = useState('home');

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'contact',
      ];

      sections.forEach((section) => {

        const el =
          document.getElementById(section);

        if (el) {

          const top = el.offsetTop - 150;

          const height = el.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );

  }, []);

  const navItems = [
    {
      label: 'Home',
      href: '#home',
      id: 'home',
    },
    {
      label: 'About',
      href: '#about',
      id: 'about',
    },
    {
      label: 'Skills',
      href: '#skills',
      id: 'skills',
    },
    {
      label: 'Projects',
      href: '#projects',
      id: 'projects',
    },
    {
      label: 'Contact',
      href: '#contact',
      id: 'contact',
    },
  ];

  const scrollToSection = (
    href: string
  ) => {

    const element =
      document.querySelector(href);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (

   <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8 }}

  className={`
    fixed
    top-0
    left-0
    right-0

    z-[9999]

    transition-all
    duration-500

    ${
      isScrolled
        ? `
          ${
            isDark
              ? 'bg-[#020617]/75 border-cyan-400/10'
              : 'bg-white/80 border-black/10'
          }

          backdrop-blur-2xl
          border-b
          shadow-[0_8px_40px_rgba(0,0,0,0.15)]
        `
        : `
          bg-transparent
        `
    }
  `}
>

  <div className="container mx-auto px-4">

    <div
      className="
        flex
        items-center
        justify-between

        h-[72px]
        md:h-[84px]
      "
    >

      {/* LOGO */}
      <motion.a

        href="#home"

        onClick={(e) => {

          e.preventDefault();

          scrollToSection('#home');
        }}

        className="
          flex
          items-center
          gap-3
          cursor-pointer
        "

        whileHover={{
          scale: 1.03,
        }}
      >

        {/* LOGO BOX */}
        <div
          className="
            relative

            w-11
            h-11

            rounded-2xl

            border
            border-cyan-400/20

            bg-white/5

            backdrop-blur-xl

            flex
            items-center
            justify-center

            overflow-hidden

            shadow-[0_0_25px_rgba(34,211,238,0.20)]
          "
        >

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-br
              from-cyan-400/10
              to-emerald-400/10
            "
          />

          <span
            className="
              relative
              z-10

              font-black
              text-sm

              tracking-widest

              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-emerald-400

              bg-clip-text
              text-transparent
            "
          >
            AFM
          </span>

        </div>

        <div className="flex flex-col leading-none">

          <span
            className="
              text-[11px]
              uppercase

              tracking-[0.45em]

              text-cyan-300/70

              font-semibold
            "
          >
            Portfolio
          </span>

        </div>

      </motion.a>

      {/* DESKTOP MENU */}
      <div
        className="
          hidden
          md:flex
          items-center
          gap-3
        "
      >

        {navItems.map((item) => (

          <motion.a

            key={item.label}

            href={item.href}

            onClick={(e) => {

              e.preventDefault();

              scrollToSection(
                item.href
              );
            }}

            whileHover={{
              y: -2,
            }}

            className={`
              relative

              px-5
              py-2.5

              rounded-full

              transition-all
              duration-300

              text-sm
              font-medium

              ${
                active === item.id
                  ? `
                    text-cyan-300

                    bg-cyan-400/10

                    shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  `
                  : `
                    ${
                      isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/5'
                        : 'text-gray-700 hover:text-black hover:bg-black/5'
                    }
                  `
              }
            `}
          >

            {item.label}

            {active === item.id && (

              <motion.div

                layoutId="activeDot"

                className="
                  absolute
                  bottom-[-6px]
                  left-1/2
                  -translate-x-1/2

                  w-1.5
                  h-1.5

                  rounded-full

                  bg-cyan-300
                "
              />

            )}

          </motion.a>

        ))}

        {/* THEME BUTTON */}
        <Button
          variant="ghost"
          size="icon"

          onClick={toggleTheme}

          className={`
            rounded-full
            border

            ${
              isDark
                ? 'border-white/10 bg-white/5 hover:bg-cyan-400/10'
                : 'border-black/10 bg-black/5 hover:bg-cyan-100'
            }
          `}
        >

          <AnimatePresence mode="wait">

            {isDark ? (

              <motion.div
                key="Moon"

                initial={{
                  rotate: -90,
                  opacity: 0,
                }}

                animate={{
                  rotate: 0,
                  opacity: 1,
                }}

                exit={{
                  rotate: 90,
                  opacity: 0,
                }}
              >

                <Moon className="h-5 w-5 text-cyan-300" />

              </motion.div>

            ) : (

              <motion.div
                key="Sun"

                initial={{
                  rotate: 90,
                  opacity: 0,
                }}

                animate={{
                  rotate: 0,
                  opacity: 1,
                }}

                exit={{
                  rotate: -90,
                  opacity: 0,
                }}
              >

                <Sun className="h-5 w-5 text-cyan-300" />

              </motion.div>

            )}

          </AnimatePresence>

        </Button>

      </div>

    </div>

  </div>

</motion.nav>
  );
}