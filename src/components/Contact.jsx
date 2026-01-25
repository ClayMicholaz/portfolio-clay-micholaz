import { FaEnvelope, FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "clay" + "michol" + "az" + "@gm" + "ail.com";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  const socialLinks = [
    {
      icon: <FaGithub className="text-lg" />,
      url: "https://github.com/ClayMicholaz",
      label: "GitHub",
    },
  ];

  return (
    <section className="snap-start bg-white text-gray-900 flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:px-10">
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>

        <div className="flex flex-col gap-3 text-base sm:text-lg w-full max-w-xs sm:max-w-sm">
          <a
            href="#"
            onClick={handleEmailClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition shadow-sm"
          >
            <FaEnvelope className="text-2xl text-red-500" />
            Contact via Email
          </a>

          <a
            href="https://wa.me/6281385967782"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition shadow-sm"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
            Message on WhatsApp
          </a>

          <a
            href="https://instagram.com/clay.mchlz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition shadow-sm"
          >
            <FaInstagram className="text-2xl text-pink-500" />
            @clay.mchlz
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-6 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>&copy; {currentYear} Clay Micholaz. All rights reserved.</p>

            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-lg"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
