import { useEffect, useState } from "react";

export default function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActiveSection(entry.target.id),
        ),
      { threshold: 0.6 },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
        @keyframes droplet {
          0% { transform: scale(1); }
          40% { transform: scale(1.3, 0.7); }
          70% { transform: scale(0.85, 1.15); }
          100% { transform: scale(1); }
        }
        .animate-droplet {
          animation: droplet 0.4s ease-out;
        }
        `}
      </style>

      {/* Navbar hidden on small screens, visible on md and up */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        {sections.map((section) => (
          <a
            key={section.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();

              const container = document.getElementById("scroll-container");
              const target = document.getElementById(section.id);

              if (container && target) {
                // Disable wheel handler during animation
                if (window.__setScrollAnimating) {
                  window.__setScrollAnimating(true);
                }

                const start = container.scrollTop;
                const end = target.offsetTop;
                const duration = 500;
                let startTime = null;

                const easeInOutQuad = (t) =>
                  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

                const animate = (time) => {
                  if (!startTime) startTime = time;
                  const elapsed = time - startTime;
                  const progress = Math.min(elapsed / duration, 1);

                  container.scrollTop =
                    start + (end - start) * easeInOutQuad(progress);

                  if (progress < 1) {
                    requestAnimationFrame(animate);
                  } else {
                    // Re-enable wheel handler after animation
                    if (window.__setScrollAnimating) {
                      window.__setScrollAnimating(false);
                    }
                  }
                };

                requestAnimationFrame(animate);
              }
            }}
            className="group relative flex items-center"
          >
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
              {section.label}
            </span>

            {/* Dot */}
            <span
              className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-gray-900 animate-droplet"
                  : "bg-gray-400 group-hover:bg-gray-900"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
