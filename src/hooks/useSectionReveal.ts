import { useEffect, type RefObject } from "react";

export function useSectionReveal(rootRef: RefObject<HTMLElement>, opts?: {
  threshold?: number; rootMargin?: string;
}) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));

    // Respect reduced motion: just show everything
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      items.forEach(el => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          el.classList.add("in");   // fade in
        } else {
          el.classList.remove("in"); // fade out
        }
      });
    }, {
      threshold: opts?.threshold ?? 0.15,
      rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px",
    });

    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [rootRef, opts?.threshold, opts?.rootMargin]);
}
