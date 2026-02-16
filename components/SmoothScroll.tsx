'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Global smooth scroll with Lenis (all devices).
 * Clean setup: no custom fallback to avoid glitches/flicker.
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<import('lenis').default | null>(null);
  const prefersReducedMotionRef = useRef(false);
  const didInitRouteRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    prefersReducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotionRef.current) return;

    let rafId = 0;
    let mounted = true;

    const init = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        if (!mounted) return;
        const lenis = new Lenis({
          duration: 1.95   ,
          lerp: 0.07,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          syncTouch: true,
          wheelMultiplier: 0.95,
          touchMultiplier: 1.1,
          infinite: false,
        });

        lenisRef.current = lenis;
        document.documentElement.classList.add('lenis', 'lenis-smooth');

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch {
        // Keep native scroll if Lenis is not available.
        // (No manual fallback to prevent jitter/flicker bugs.)
      }
    };

    init();

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotionRef.current) {
      return;
    }

    // Prevent "scroll to top" on initial page load/refresh.
    if (!didInitRouteRef.current) {
      didInitRouteRef.current = true;
      return;
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
