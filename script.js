import { tsParticles } from 'https://cdn.jsdelivr.net/npm/tsparticles-engine@2.8.0/+esm';
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";

async function loadParticles(options) {
  await loadFull(tsParticles);
  await tsParticles.load(options);
}

const configs = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "grab",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 30,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#fff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 3,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

loadParticles(configs);
