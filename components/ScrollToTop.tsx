'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Scrolls to top of page on route change (e.g. Home → Media).
 * Uses smooth scrolling; respects prefers-reduced-motion.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [pathname]);

  return null;
}
