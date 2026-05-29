import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  Code2,
  BookOpen,
  Palette,
  Gamepad2,
  ChevronDown,
} from 'lucide-react';

interface AboutSectionProps {
  isDark: boolean;
}

export default function AboutSection({
  isDark,
}: AboutSectionProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const stats = [
    {
      icon: Code2,
      value: 'Aspiring',
      label: 'Web Developer',
    },

    {
      icon: BookOpen,
      value: 'Building',
      label: 'My Skills',
    },

    {
      icon: Palette,
      value: 'Creative',
      label: 'Designer',
    },

    {
      icon: Gamepad2,
      value: 'Casual',
      label: 'Gamer',
    },
  ];

  const accordionItems = [
    {
      title: 'Siapa Saya?',
      content:
        'Saya adalah pelajar yang tertarik pada dunia web development dan desain modern.',
    },

    {
      title: 'Apa Yang Saya Pelajari?',
      content:
        'Saat ini saya belajar React, Tailwind CSS, Next.js, dan membuat UI modern.',
    },

    {
      title: 'Tujuan Portfolio Ini',
      content:
        'Portfolio ini dibuat untuk menampilkan perkembangan skill dan project saya.',
    },
  ];

  return (

    <motion.section
      id="about"

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

      {/* GLOW BACKGROUND */}
      <div
        className="
          absolute
          top-[-250px]
          left-[-250px]

          w-[600px]
          h-[600px]

          bg-cyan-500/10

          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-250px]
          right-[-250px]

          w-[600px]
          h-[600px]

          bg-emerald-500/10

          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          top-[30%]
          left-[40%]

          w-[400px]
          h-[400px]

          bg-blue-500/5

          rounded-full
          blur-3xl
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

          transition={{
            duration: 0.5,
          }}

          viewport={{
            once: true,
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

              drop-shadow-[0_0_15px_rgba(34,211,238,0.35)]
            "
          >
            Tentang Saya
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
              Mengenal Lebih Dekat
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

              shadow-[0_0_25px_rgba(34,211,238,0.45)]
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

        {/* CONTENT */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-14
            items-center

            max-w-6xl
            mx-auto
          "
        >

          {/* FOTO */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            viewport={{
              once: true,
            }}

            className="flex justify-center"
          >

            <div className="relative w-[320px] h-[320px]">

              {/* BACK LAYER */}
              <div
                className={`
                  absolute
                  top-5
                  left-5

                  w-full
                  h-full

                  rounded-[40px]

                  border

                  ${
                    isDark
                      ? 'border-cyan-300/30 bg-cyan-400/5'
                      : 'border-cyan-300/40 bg-cyan-100'
                  }

                  backdrop-blur-xl
                `}
              />

              {/* MAIN CARD */}
              <div
                className={`
                  relative
                  z-10

                  w-full
                  h-full

                  rounded-[40px]

                  border

                  ${
                    isDark
                      ? 'border-white/10 bg-white/[0.04]'
                      : 'border-slate-300 bg-slate-100'
                  }

                  backdrop-blur-2xl

                  flex
                  items-center
                  justify-center

                  shadow-[0_0_40px_rgba(34,211,238,0.12)]

                  overflow-hidden
                `}
              >

                {/* GLOW */}
                <div
                  className="
                    absolute

                    w-[220px]
                    h-[220px]

                    bg-cyan-400/10

                    rounded-full

                    blur-3xl
                  "
                />

                {/* PROFILE ICON */}
                <div
                  className={`
                    relative
                    z-10

                    w-38
                    h-38

                    rounded-3xl

                    border
                    border-cyan-300/20

                    ${
                      isDark
                        ? 'bg-[#0f172a]'
                        : 'bg-white'
                    }

                    flex
                    items-center
                    justify-center

                    shadow-[0_0_25px_rgba(34,211,238,0.2)]
                  `}
                >

                  <span className="text-8xl">
                    👤
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            viewport={{
              once: true,
            }}

            className="space-y-6"
          >

            <h3
              className={`
                text-3xl
                md:text-4xl

                font-black
                leading-tight

                ${
                  isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }
              `}
            >
              My Journey
            </h3>

            <p
              className={`
                leading-relaxed
                text-lg

                ${
                  isDark
                    ? 'text-slate-300'
                    : 'text-slate-700'
                }
              `}
            >
              Hallo, Saya Aulia Fakhrul Mubarraq.
              Saya tertarik pada dunia web development,
              desain modern, dan teknologi digital.

              Portfolio ini saya buat untuk menampilkan
              proses belajar, kreativitas, dan project
              yang saya kembangkan seiring waktu.

              Saat ini saya masih terus belajar dan mencoba
              membuat tampilan website yang lebih menarik,
              modern, dan nyaman digunakan.
            </p>

            {/* ACCORDION */}
            <div className="space-y-4 pt-2">

              {accordionItems.map((item, index) => {

                const isOpen = openIndex === index;

                return (

                  <div
                    key={index}

                    className={`
                      rounded-2xl
                      border

                      overflow-hidden

                      ${
                        isDark
                          ? 'border-white/10 bg-white/[0.04]'
                          : 'border-slate-300 bg-slate-100'
                      }

                      backdrop-blur-xl

                      transition-all
                      duration-300

                      hover:border-cyan-400/30
                    `}
                  >

                    <button
                      onClick={() =>
                        setOpenIndex(
                          isOpen
                            ? null
                            : index
                        )
                      }

                      className="
                        w-full

                        flex
                        items-center
                        justify-between

                        p-5

                        text-left
                      "
                    >

                      <span
                        className="
                          font-semibold
                          text-cyan-300
                        "
                      >
                        {item.title}
                      </span>

                      <ChevronDown
                        className={`
                          transition-transform
                          duration-300

                          text-cyan-300

                          ${
                            isOpen
                              ? 'rotate-180'
                              : ''
                          }
                        `}
                      />

                    </button>

                    <div
                      className={`
                        grid

                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? 'grid-rows-[1fr]'
                            : 'grid-rows-[0fr]'
                        }
                      `}
                    >

                      <div className="overflow-hidden">

                        <p
                          className={`
                            px-5
                            pb-5

                            text-sm
                            leading-relaxed

                            ${
                              isDark
                                ? 'text-slate-300'
                                : 'text-slate-700'
                            }
                          `}
                        >
                          {item.content}
                        </p>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>

            {/* STATS */}
            <div
              className="
                grid
                grid-cols-2
                gap-3
                pt-2
              "
            >

              {stats.map(
                (stat, index) => (

                  <motion.div
                    key={stat.label}

                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}

                    viewport={{
                      once: true,
                    }}

                    className={`
                      rounded-2xl
                      p-3

                      border

                      ${
                        isDark
                          ? 'border-white/10 bg-white/[0.04]'
                          : 'border-slate-300 bg-slate-100'
                      }

                      backdrop-blur-xl

                      hover:border-cyan-400/30

                      hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]

                      transition-all
                      duration-500
                    `}
                  >

                    <stat.icon
                      className="
                        h-4
                        w-4

                        text-cyan-300

                        mb-3
                      "
                    />

                    <p
                      className={`
                        text-xl
                        font-bold

                        ${
                          isDark
                            ? 'text-white'
                            : 'text-slate-900'
                        }
                      `}
                    >
                      {stat.value}
                    </p>

                    <p
                      className={`
                        text-xs

                        ${
                          isDark
                            ? 'text-slate-400'
                            : 'text-slate-600'
                        }
                      `}
                    >
                      {stat.label}
                    </p>

                  </motion.div>

                )
              )}

            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}