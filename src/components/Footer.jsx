import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-lg" />,
      url: "https://github.com/ClayMicholaz",
      label: "GitHub",
    },
    {
      icon: <FaInstagram className="text-lg" />,
      url: "https://instagram.com/clay.mchlz",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      url: "#contact",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 px-6 sm:px-10">
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
    </footer>
  );
}
