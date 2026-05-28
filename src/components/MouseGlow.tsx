import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const updateMouse = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      'mousemove',
      updateMouse
    );

    return () => {

      window.removeEventListener(
        'mousemove',
        updateMouse
      );
    };

  }, []);

  return (

    <motion.div

      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}

      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 180,
        mass: 0.5,
      }}

      className="
        fixed
        top-0
        left-0
        w-[300px]
        h-[300px]
        rounded-full
        pointer-events-none
        z-[1]

        bg-cyan-400/10
        blur-3xl
      "
    />
  );
}