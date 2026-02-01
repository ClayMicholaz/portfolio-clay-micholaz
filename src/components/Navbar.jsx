import { useEffect, useState } from "react";

export default function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  const scrollToSection = (id) => {
    const container = document.getElementById("scroll-container");
    const target = document.getElementById(id);

    if (container && target) {
      if (window.__setScrollAnimating) {
        window.__setScrollAnimating(true);
      }

      const start = container.scrollTop;
      const end = target.offsetTop;
      const duration = 500;
      let startTime = null;

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animate = (time) =>
        !startTime
          ? ((startTime = time), requestAnimationFrame(animate))
          : (() => {
              const elapsed = time - startTime;
              const progress = Math.min(elapsed / duration, 1);

              container.scrollTop =
                start + (end - start) * easeInOutQuad(progress);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else if (window.__setScrollAnimating) {
                window.__setScrollAnimating(false);
              }
            })();

      requestAnimationFrame(animate);
    }
  };

  const handleMobileNavigate = (id) => {
    scrollToSection(id);
    setIsMobileOpen(false);
  };

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

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-semibold text-gray-900">Clay Micholaz</span>
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <span className="block w-6 h-0.5 bg-gray-900 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-900 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-900" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ease-in-out ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-6 transition-transform duration-500 ease-in-out ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-semibold text-gray-900">Menu</span>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  handleMobileNavigate(section.id);
                }}
                className={`text-left text-base font-medium transition ${
                  activeSection === section.id
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop dot navigation */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        {sections.map((section) => (
          <a
            key={section.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
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
