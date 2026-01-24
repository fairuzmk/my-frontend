
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const NeuralNetworkBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false }, // Biar tetap di dalam container parent
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Ini yang bikin efek "jaring" nempel ke kursor
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: { opacity: 0.6 }
        },
      },
    },
    particles: {
      color: { value: "#20B2A6" },
      links: {
        color: "#fff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 100, // Jumlah titik jaring
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  if (init) {
    return <Particles id="tsparticles" className="absolute inset-0 z-0" options={options} />;
  }
  return null;
};

export default NeuralNetworkBackground;