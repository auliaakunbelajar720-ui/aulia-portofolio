import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroLoader() {

  const [show, setShow] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShow(false);
    }, 4200);

    return () => clearTimeout(timer);

  }, []);

  return (

    <AnimatePresence>

      {show && (

        <motion.div

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(12px)',
          }}

          transition={{
            duration: 1.2,
          }}

          className="
            fixed
            inset-0
            z-[999999]

            flex
            items-center
            justify-center

            overflow-hidden

            bg-[#030712]
          "
        >

          {/* BACKGROUND GLOW */}
          <div
            className="
              absolute
              w-[700px]
              h-[700px]

              rounded-full

              bg-cyan-500/3

              blur-3xl
            "
          />

          {/* GRID */}
          <div
            className="
              absolute
              inset-0

              opacity-[0.04]

              bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

              bg-[size:60px_60px]
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10

              flex
              flex-col
              items-center
              justify-center
            "
          >

           {/* PREMIUM ICONS */}
<motion.div

  initial={{
    opacity: 0,
    y: -20,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 1,
  }}

  className="
    flex
    items-center
    gap-6

    mb-10
  "
>

  {/* ICON 1 */}
  <motion.div

    animate={{
      y: [0, -8, 0],
    }}

    transition={{
      duration: 2,
      repeat: Infinity,
    }}

    className="
      w-16
      h-16

      rounded-2xl

      border
      border-cyan-400/20

      bg-white/5

      backdrop-blur-xl

      flex
      items-center
      justify-center

      shadow-[0_0_30px_rgba(34,211,238,0.15)]
    "
  >

    <span className="text-white text-xl font-semibold">
      &lt;/&gt;
    </span>

  </motion.div>

{/* ICON 2 */}
<motion.div

  animate={{
    y: [0, -8, 0],
  }}

  transition={{
    duration: 2,
    delay: 0.3,
    repeat: Infinity,
  }}

  className="
    w-16
    h-16

    rounded-2xl

    border
    border-cyan-400/20

    bg-white/5

    backdrop-blur-xl

    flex
    items-center
    justify-center

    shadow-[0_0_30px_rgba(34,211,238,0.15)]
  "
>

  <span className="text-white text-2xl">
    ✦
  </span>

</motion.div>

  {/* ICON 3 */}
  <motion.div

    animate={{
      y: [0, -8, 0],
    }}

    transition={{
      duration: 2,
      delay: 0.6,
      repeat: Infinity,
    }}

    className="
      w-16
      h-16

      rounded-2xl

      border
      border-cyan-400/20

      bg-white/5

      backdrop-blur-xl

      flex
      items-center
      justify-center

      shadow-[0_0_30px_rgba(34,211,238,0.15)]
    "
  >

    <span className="text-white text-xl">
      🌐
    </span>

  </motion.div>

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
                delay: 0.3,
                duration: 1.2,
              }}

              className="
                text-center

                text-4xl
                md:text-6xl
                lg:text-7xl

                font-black

                tracking-tight
                leading-tight

                text-white
              "
            >

              WELCOME TO

              <span
                className="
                  block

                  mt-2

                  bg-gradient-to-r
                  from-cyan-300
                  via-cyan-400
                  to-emerald-300

                  bg-clip-text
                  text-transparent

                  drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
              >
                MY PORTFOLIO
              </span>

            </motion.h1>

            {/* LOADING BAR */}
            <div
              className="
                mt-14

                w-[240px]
                h-[4px]

                rounded-full

                bg-white/10

                overflow-hidden
              "
            >

              <motion.div

                initial={{
                  width: 0,
                }}

                animate={{
                  width: '100%',
                }}

                transition={{
                  duration: 3.2,
                  ease: 'easeInOut',
                }}

                className="
                  h-full

                  bg-gradient-to-r
                  from-cyan-300
                  to-emerald-300

                  shadow-[0_0_20px_rgba(34,211,238,0.8)]
                "
              />

            </div>

            {/* LOADING TEXT */}
            <motion.div

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 1.4,
              }}

              className="
                mt-5

                text-cyan-300/70

                text-xs

                tracking-[0.3em]

                uppercase
              "
            >
              Loading Experience
            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}