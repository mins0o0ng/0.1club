import { useScroll, useTransform } from 'framer-motion';

interface ScrollEffects {
  y1: any;
  y2: any;
  y3: any;
  rotate1: any;
  rotate2: any;
}

export function useScrollEffects(): ScrollEffects {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 20]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -15]);

  return {
    y1,
    y2,
    y3,
    rotate1,
    rotate2,
  };
} 