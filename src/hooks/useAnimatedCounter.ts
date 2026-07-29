import { useEffect, useRef } from "react";
import { useInView, useSpring, useTransform, type MotionValue } from "framer-motion";

export function useAnimatedCounter(
  target: number,
  duration: number = 2
): [React.RefObject<HTMLSpanElement | null>, MotionValue<string>] {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasTriggered = useRef(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20 + duration * 5,
    mass: 1,
  });

  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (isInView && !hasTriggered.current) {
      hasTriggered.current = true;
      spring.set(target);
    }
  }, [isInView, spring, target]);

  return [ref, display];
}
