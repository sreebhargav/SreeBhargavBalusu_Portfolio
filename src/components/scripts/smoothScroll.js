import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.4, // slightly slower, smoother feel
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
  direction: 'vertical',
});

// RAF Loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
