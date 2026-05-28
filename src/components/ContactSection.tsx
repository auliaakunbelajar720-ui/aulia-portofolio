import { motion } from 'framer-motion';

interface ContactSectionProps {
  isDark?: boolean;
}

interface ContactSectionProps {
  isDark?: boolean;
}

export default function ContactSection({
  isDark = true,
}: ContactSectionProps) {
  return (

    <section
      id="contact"

      className={`
        relative
        overflow-hidden

        py-24
        md:py-32

        transition-colors
        duration-300

        ${
          isDark
            ? `
              bg-gradient-to-b
              from-[#050816]
              via-[#0b1023]
              to-[#050816]

              text-white
            `
            : `
              bg-gradient-to-b
              from-slate-100
              via-white
              to-slate-100

              text-black
            `
        }
      `}
    >

      {/* BACKGROUND GLOW */}
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

      {/* GRID */}
      <div
        className={`
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          bg-[size:60px_60px]

          ${
            !isDark
              ? 'invert'
              : ''
          }
        `}
      />

      <div
        className="
          relative
          z-10

          container
          mx-auto
          px-4

          max-w-6xl
        "
      >

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
            duration: 0.7,
          }}

          className="
            text-center
            mb-16
          "
        >

          <span
            className="
              text-cyan-400

              uppercase
              tracking-[0.3em]

              text-sm
              font-semibold
            "
          >
            CONTACT
          </span>

      <h2
  className="
    mt-4

    text-4xl
    md:text-6xl

    font-black
  "
>

  <span
    className={`
      ${
        isDark
          ? `
            bg-gradient-to-r
            from-cyan-300
            via-emerald-300
            to-cyan-400

            bg-clip-text
            text-transparent

            drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
          `
          : `
            bg-gradient-to-r
            from-cyan-600
            via-emerald-500
            to-cyan-700

            bg-clip-text
            text-transparent
          `
      }
    `}
  >
    Contact Me
  </span>

</h2>

          <div
            className="
              mt-5

              w-32
              h-1.5

              mx-auto

              rounded-full

              bg-gradient-to-r
              from-cyan-400
              via-emerald-300
              to-cyan-400

              shadow-[0_0_20px_rgba(34,211,238,0.5)]
            "
          />

        </motion.div>

        {/* MAIN CONTENT */}
        <div
          className="
            grid
            md:grid-cols-2

            gap-10
            items-center
          "
        >

          {/* LEFT INFO */}
          <motion.div

            initial={{
              opacity: 0,
              x: -40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              space-y-6
            "
          >

            <h3
              className={`
                text-3xl
                md:text-4xl

                font-bold

                leading-tight

                ${
                  isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }
              `}
            >
              Let’s Create

              <span
                className="
                  block

                  bg-gradient-to-r
                  from-cyan-300
                  to-emerald-300

                  bg-clip-text
                  text-transparent
                "
              >
               Together
              </span>

            </h3>

            <p
              className={`
                leading-8
                text-base

                ${
                  isDark
                    ? 'text-slate-400'
                    : 'text-slate-600'
                }
              `}
            >
              Pelajar yang sedang belajar web development
              dan suka membuat tampilan website modern serta interaktif.
            </p>

            {/* CONTACT CARDS */}
            <div
              className="
                space-y-4
              "
            >

              {/* EMAIL */}
              <div
                className={`
                  flex
                  items-center
                  gap-4

                  p-5

                  rounded-2xl

                  border

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  ${
                    isDark
                      ? `
                        border-white/10
                        bg-white/[0.03]
                      `
                      : `
                        border-slate-200
                        bg-white
                        shadow-lg
                      `
                  }
                `}
              >

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    flex
                    items-center
                    justify-center

                    bg-cyan-400/10

                    text-cyan-300
                    text-2xl
                  "
                >
                  ✉
                </div>

                <div>

                  <p
                    className={`
                      text-sm

                      ${
                        isDark
                          ? 'text-slate-400'
                          : 'text-slate-500'
                      }
                    `}
                  >
                    Email
                  </p>

                  <h4
                    className={`
                      font-semibold

                      ${
                        isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }
                    `}
                  >
                    auliaakunbelajar720@gmail.com
                  </h4>

                </div>

              </div>

              {/* INSTAGRAM */}
              <div
                className={`
                  flex
                  items-center
                  gap-4

                  p-5

                  rounded-2xl

                  border

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  ${
                    isDark
                      ? `
                        border-white/10
                        bg-white/[0.03]
                      `
                      : `
                        border-slate-200
                        bg-white
                        shadow-lg
                      `
                  }
                `}
              >

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    flex
                    items-center
                    justify-center

                    bg-emerald-400/10

                    text-emerald-300
                    text-2xl
                  "
                >
                  ◎
                </div>

                <div>

                  <p
                    className={`
                      text-sm

                      ${
                        isDark
                          ? 'text-slate-400'
                          : 'text-slate-500'
                      }
                    `}
                  >
                    Instagram
                  </p>

                  <h4
                    className={`
                      font-semibold

                      ${
                        isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }
                    `}
                  >
                    @auliafakhrul_
                  </h4>

                </div>

              </div>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.form

            initial={{
              opacity: 0,
              x: 40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
            }}

            className={`
              space-y-6

              p-8
              md:p-10

              rounded-[32px]

              border

              backdrop-blur-2xl

              transition-all
              duration-300

              ${
                isDark
                  ? `
                    border-white/10
                    bg-white/[0.04]
                    shadow-[0_0_60px_rgba(0,0,0,0.4)]
                  `
                  : `
                    border-slate-200
                    bg-white
                    shadow-xl
                  `
              }
            `}
          >

            {/* INPUT */}
            <input
              type="text"
              placeholder="Your Name"

              className={`
                w-full

                p-4

                rounded-2xl

                border

                outline-none

                transition-all

                ${
                  isDark
                    ? `
                      bg-[#111827]/70
                      border-white/10
                      text-white
                      placeholder:text-slate-500
                    `
                    : `
                      bg-slate-100
                      border-slate-200
                      text-black
                      placeholder:text-slate-400
                    `
                }

                focus:border-cyan-400/60
              `}
            />

            <input
              type="email"
              placeholder="Your Email"

              className={`
                w-full

                p-4

                rounded-2xl

                border

                outline-none

                transition-all

                ${
                  isDark
                    ? `
                      bg-[#111827]/70
                      border-white/10
                      text-white
                      placeholder:text-slate-500
                    `
                    : `
                      bg-slate-100
                      border-slate-200
                      text-black
                      placeholder:text-slate-400
                    `
                }

                focus:border-cyan-400/60
              `}
            />

            <textarea
              placeholder="Your Message"
              rows={6}

              className={`
                w-full

                p-4

                rounded-2xl

                border

                outline-none

                resize-none

                transition-all

                ${
                  isDark
                    ? `
                      bg-[#111827]/70
                      border-white/10
                      text-white
                      placeholder:text-slate-500
                    `
                    : `
                      bg-slate-100
                      border-slate-200
                      text-black
                      placeholder:text-slate-400
                    `
                }

                focus:border-cyan-400/60
              `}
            />

            {/* BUTTON */}
            <button
              type="submit"

              className="
                relative

                w-full

                overflow-hidden

                py-4

                rounded-2xl

                font-bold
                text-black

                bg-gradient-to-r
                from-cyan-300
                via-cyan-400
                to-emerald-300

                shadow-[0_0_30px_rgba(34,211,238,0.35)]

                hover:scale-[1.02]

                transition-all
                duration-300
              "
            >

              SEND MESSAGE

            </button>

          </motion.form>

        </div>

        {/* FOOTER */}
        <motion.div

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.3,
          }}

          className={`
            mt-24

            text-center

            text-sm

            tracking-[0.2em]
            uppercase

            ${
              isDark
                ? 'text-slate-500'
                : 'text-slate-400'
            }
          `}
        >

          Made with passion by AFM

        </motion.div>

      </div>

    </section>
  );
}