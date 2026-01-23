export default function Hero() {
  const handleScroll = () => {
    const container = document.getElementById("scroll-container");
    const target = document.getElementById("projects");
    if (container && target) {
      container.style.scrollSnapType = "none";

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

        container.scrollTop = start + (end - start) * easeInOutQuad(progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          container.style.scrollSnapType = "y mandatory";
        }
      };

      requestAnimationFrame(animate);
    }
  };

  return (
    <section className="px-6 sm:px-10 h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-white text-gray-900 gap-6 md:gap-10">
      <img src="profile.jpg" className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover" />

      <div className="flex flex-col max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold">Clay Micholaz</h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          I’m a 4th-semester Informatics student pursuing my Bachelor’s degree, passionate about becoming a full-stack developer. I’m constantly learning and improving my skills in the world of technology.
        </p>
        <button
          onClick={handleScroll}
          className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
        >
          Check Out My Work!
        </button>
      </div>
    </section>

  );
}