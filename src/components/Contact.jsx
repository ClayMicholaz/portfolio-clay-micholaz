import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mzdgpbpk", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });

      setSubmitStatus(response.ok ? "success" : "error");
      if (response.ok) {
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900";

  return (
    <section className="snap-start bg-white text-gray-900 flex flex-col h-screen">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 sm:py-10 overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-xs sm:max-w-sm flex flex-col gap-3"
        >
          {[
            {
              id: "email",
              type: "email",
              label: "Your Email",
              placeholder: "your@email.com",
            },
            {
              id: "name",
              type: "text",
              label: "Your Name",
              placeholder: "John Doe",
            },
          ].map(({ id, type, label, placeholder }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="font-medium text-sm">
                {label}
              </label>
              <input
                type={type}
                name={id}
                id={id}
                required
                placeholder={placeholder}
                className={inputClass}
                style={{ caretColor: "#000" }}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Your message here..."
              rows="4"
              className={`${inputClass} resize-none`}
              style={{ caretColor: "#000" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus && (
            <p
              className={`${submitStatus === "success" ? "text-green-600" : "text-red-600"} text-sm text-center font-medium`}
            >
              {submitStatus === "success"
                ? "✓ Message sent! I'll get back to you soon."
                : "✗ Failed to send. Please try again."}
            </p>
          )}
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Or connect with me on social media:</p>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://github.com/ClayMicholaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition"
              title="GitHub"
            >
              <FaGithub className="text-2xl" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/clay-micholaz-462a7934b/?originalSubdomain=id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/clay.mchlz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition"
              title="Instagram"
            >
              <FaInstagram className="text-2xl" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-4 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex justify-center items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Clay Micholaz. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
