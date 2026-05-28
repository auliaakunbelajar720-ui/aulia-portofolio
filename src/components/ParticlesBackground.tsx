import Particles from 'react-tsparticles';

export default function ParticlesBackground() {

  return (
    <Particles
      id="tsparticles"

      className="absolute inset-0 z-0"

      options={{
        fullScreen: false,

        background: {
          color: {
            value: 'transparent',
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: ['#22d3ee', '#34d399'],
          },

          links: {
            color: '#22d3ee',
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },

          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            speed: 1.2,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },

            value: 45,
          },

          opacity: {
            value: 0.4,
          },

          shape: {
            type: 'circle',
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}