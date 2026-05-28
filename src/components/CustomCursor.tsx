import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* CURSOR BULAT */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-4
          h-4
          rounded-full
          bg-cyan-400
          pointer-events-none
          z-[9999]
          mix-blend-screen
          shadow-[0_0_20px_rgba(34,211,238,0.8)]
        "
        animate={{
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* OUTLINE */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-10
          h-10
          rounded-full
          border
          border-cyan-400/40
          pointer-events-none
          z-[9998]
        "
        animate={{
          x: position.x - 20,
          y: position.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 18,
        }}
      />
    </>
  );
}