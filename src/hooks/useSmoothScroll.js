import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    let isAnimating = false;
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const handleWheel = (e) => {
      // Don't intercept if navbar animation is running
      if (isAnimating) return;

      e.preventDefault();

      const sectionHeight = container.clientHeight;
      const currentScroll = container.scrollTop;
      const maxScroll = container.scrollHeight - sectionHeight;
      const distance = e.deltaY > 0 ? sectionHeight : -sectionHeight;
      const targetScroll = Math.max(
        0,
        Math.min(currentScroll + distance, maxScroll),
      );

      const duration = 500;
      let startTime = null;

      const animate = (time) => {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        container.scrollTop =
          currentScroll +
          (targetScroll - currentScroll) * easeInOutQuad(progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    // Expose function to toggle animation state
    window.__setScrollAnimating = (state) => {
      isAnimating = state;
    };

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
