import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const smoothScrollToTop = (duration = 1500) => {
  const start = window.scrollY || window.pageYOffset;
  const startTime = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, start * (1 - easeProgress));

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollToTop(1500); // scroll duration in ms (1.5 seconds)
  }, [pathname]);

  return null;
};

export default ScrollToTop;

