import { motion } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay";

import {
  ExternalLink,
  Github,
  Play,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ProjectsSectionProps {
  isDark?: boolean;
}

const projects = [
  {
    title: 'Personal Portfolio',

    description:
      'Website portfolio modern dengan tampilan dark mode, animasi interaktif, dan desain responsive untuk menampilkan profile, skill, dan project saya.',

    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],

    image: '💻',

    color:
      'from-cyan-500/20 via-emerald-500/10 to-blue-500/20',

    github: '#',
    demo: '#',
  },

  {
    title: 'Website Login UI',

    description:
      'Project latihan membuat halaman login modern dengan validasi form, efek animasi, dan desain clean menggunakan Tailwind CSS.',

    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
    ],

    image: '🔐',

    color:
      'from-emerald-500/20 via-cyan-500/10 to-blue-500/20',

    github: '#',
    demo: '#',
  },

  {
    title: 'Simple Dashboard',

    description:
      'Dashboard sederhana untuk menampilkan data dan statistik dengan tampilan modern serta layout responsive.',

    tags: [
      'React',
      'Chart UI',
      'Tailwind',
      'Responsive',
    ],

    image: '📊',

    color:
      'from-blue-500/20 via-cyan-500/10 to-emerald-500/20',

    github: '#',
    demo: '#',
  },

  {
    title: 'Landing Page Modern',

    description:
      'Landing page dengan efek glow, gradient modern, animasi smooth, dan tampilan yang nyaman digunakan di desktop maupun mobile.',

    tags: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'UI Design',
    ],

    image: '🚀',

    color:
      'from-cyan-500/20 via-blue-500/10 to-emerald-500/20',

    github: '#',
    demo: '#',
  },

  {
    title: 'Editing & Content Design',

    description:
      'Kumpulan hasil editing video, desain konten, dan project visual yang saya buat menggunakan aplikasi editing dan desain.',

    tags: [
      'CapCut',
      'Canva',
      'Content Design',
    ],

    image: '🎨',

    color:
      'from-emerald-500/20 via-cyan-500/10 to-blue-500/20',

    isContent: true,

    youtube: '#',
  },
];

interface ProjectsSectionProps {
  isDark?: boolean;
}

export default function ProjectsSection({
  isDark = true,
}: ProjectsSectionProps) {

  return (

    <section
      id="projects"

      className={`
        relative
        overflow-hidden

        py-20
        md:py-32

        transition-colors
        duration-300

        ${
          isDark
            ? 'bg-[#0f172a] text-white'
            : 'bg-white text-black'
        }
      `}
    >

      {/* MAIN GLOW */}
      <div
        className="
          absolute
          top-[-300px]
          left-[-300px]

          w-[420px]
          h-[420px]

          bg-cyan-500/5

          rounded-full
          blur-xl
        "
      />

      <div
        className="
          absolute
          bottom-[-300px]
          right-[-300px]

          w-[420px]
          h-[420px]

          bg-emerald-500/5

          rounded-full
          blur-xl
        "
      />

      {/* CENTER GLOW */}
      <div
        className="
          absolute
          top-[25%]
          left-[35%]

          w-[450px]
          h-[450px]

          bg-blue-500/5

          rounded-full
          blur-xl
        "
      />

      {/* EXTRA LIGHT */}
      <div
        className="
          absolute
          bottom-[15%]
          left-[10%]

          w-[300px]
          h-[300px]

          bg-cyan-400/5

          rounded-full
          blur-xl
        "
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            text-center
            mb-16
          "
        >

          <span
            className="
              text-cyan-300
              font-semibold

              uppercase
              tracking-[0.3em]

              text-sm

              drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
            "
          >
            Portfolio
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl

              font-black

              mt-4
              mb-5
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

                drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
              "
            >
              Projects & Karya
            </span>

          </h2>

          {/* GLOW LINE */}
          <div
            className="
              relative

              w-32
              h-1.5

              mx-auto
              rounded-full

              bg-gradient-to-r
              from-cyan-400
              via-emerald-400
              to-cyan-400

              shadow-[0_0_25px_rgba(34,211,238,0.5)]
            "
          >
            <div
              className="
                absolute
                inset-0

                blur-md
                rounded-full

                bg-gradient-to-r
                from-cyan-400
                via-emerald-400
                to-cyan-400
              "
            />
          </div>

        </motion.div>

        {/* CAROUSEL */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}

          opts={{
            align: 'start',
            loop: true,
          }}

          className="
            w-full
            max-w-7xl
            mx-auto
          "
        >

          <CarouselContent className="-ml-4">

            {projects.map(
              (project, index) => (

                <CarouselItem
                  key={index}

                  className="
                    pl-4
                    md:basis-1/2
                    lg:basis-1/3
                  "
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      delay:
                        index * 0.1,
                    }}

                    className="
                      group
                      h-full
                    "
                  >

                    <div
                      className={`
                        h-full
                        p-6

                        rounded-3xl

                        border

                        backdrop-blur-sm

                        shadow-lg

                        transition-all
                        duration-350

                        flex
                        flex-col

                        ${
                          isDark
                            ? `
                              border-cyan-400/10
                              bg-white/[0.04]
                              hover:border-cyan-400/30
                              text-white
                            `
                            : `
                              border-slate-200
                              bg-slate-50
                              hover:border-cyan-300
                              text-black
                            `
                        }
                      `}
                    >

                      {/* ICON BOX */}
                      <div
                        className={`
                          aspect-video
                          rounded-2xl
                          mb-6

                          flex
                          items-center
                          justify-center

                          bg-gradient-to-br
                          ${project.color}

                          border
                          border-white/10
                        `}
                      >

                        <span
                          className="
                            text-6xl

                            group-hover:scale-105

                            transition-transform
                            duration-350
                          "
                        >
                          {project.image}
                        </span>

                      </div>

                      <div
                        className="
                          space-y-4
                          flex-grow
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >

                          {project.isContent && (

                            <span
                              className="
                                px-3
                                py-1

                                text-[10px]

                                rounded-full

                                bg-cyan-500/10

                                text-cyan-300

                                border
                                border-cyan-400/20

                                uppercase
                                tracking-widest
                                font-bold
                              "
                            >
                              Content
                            </span>

                          )}

                          <h3
                            className={`
                              text-xl
                              font-bold

                              transition-colors

                              ${
                                isDark
                                  ? 'text-white'
                                  : 'text-slate-900'
                              }
                            `}
                          >
                            {project.title}
                          </h3>

                        </div>

                        <p
                          className={`
                            text-sm
                            leading-relaxed
                            line-clamp-3

                            ${
                              isDark
                                ? 'text-slate-300'
                                : 'text-slate-600'
                            }
                          `}
                        >
                          {project.description}
                        </p>

                        {/* TAGS */}
                        <div
                          className="
                            flex
                            flex-wrap
                            gap-2
                          "
                        >

                          {project.tags.map(
                            (tag) => (

                              <span
                                key={tag}

                                className="
                                  px-3
                                  py-1

                                  text-[11px]

                                  rounded-full

                                  bg-emerald-500/10

                                  text-emerald-400

                                  border
                                  border-emerald-400/20
                                "
                              >
                                {tag}
                              </span>

                            )
                          )}

                        </div>

                      </div>

                      {/* BUTTON */}
                      <div
                        className="
                          flex
                          gap-3
                          pt-6
                          mt-auto
                        "
                      >

                        {project.github && (

                          <Button
                            variant="outline"
                            size="sm"

                            className="
                              rounded-full
                              flex-1
                            "

                            asChild
                          >

                            <a
                              href={
                                project.github
                              }
                            >

                              <Github
                                className="
                                  h-4
                                  w-4
                                  mr-2
                                "
                              />

                              Code

                            </a>

                          </Button>

                        )}

                        {project.demo && (

                          <Button
                            size="sm"

                            className="
                              rounded-full

                              bg-gradient-to-r
                              from-cyan-400
                              to-emerald-400

                              text-black

                              font-bold

                              flex-1
                            "

                            asChild
                          >

                            <a
                              href={
                                project.demo
                              }
                            >

                              <ExternalLink
                                className="
                                  h-4
                                  w-4
                                  mr-2
                                "
                              />

                              Demo

                            </a>

                          </Button>

                        )}

                        {project.youtube && (

                          <Button
                            size="sm"

                            className="
                              rounded-full

                              bg-gradient-to-r
                              from-emerald-400
                              to-cyan-400

                              text-black

                              font-bold

                              w-full
                            "

                            asChild
                          >

                            <a
                              href={
                                project.youtube
                              }
                            >

                              <Play
                                className="
                                  h-4
                                  w-4
                                  mr-2
                                "
                              />

                              Watch

                            </a>

                          </Button>

                        )}

                      </div>

                    </div>

                  </motion.div>

                </CarouselItem>

              )
            )}

          </CarouselContent>

          {/* NAVIGATION */}
          <div
            className="
              flex
              justify-center
              md:block
            "
          >

            <CarouselPrevious
              className="
                static
                md:absolute

                translate-y-0

                md:-left-12

                mt-8
                md:mt-0
              "
            />

            <CarouselNext
              className="
                static
                md:absolute

                translate-y-0

                md:-right-12

                mt-8
                md:mt-0

                ml-4
                md:ml-0
              "
            />

          </div>

        </Carousel>

      </div>

    </section>
  );
}