import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      Icon: FaHtml5,
      color: "text-orange-600",
      label: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      Icon: FaCss3Alt,
      color: "text-blue-600",
      label: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      Icon: FaJs,
      color: "text-yellow-500",
      label: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      Icon: FaPython,
      color: "text-blue-500",
      label: "Python",
      link: "https://www.python.org/doc/",
    },
    {
      Icon: FaReact,
      color: "text-cyan-500",
      label: "React",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      Icon: FaNodeJs,
      color: "text-green-600",
      label: "Node.js",
      link: "https://nodejs.org/en/docs/",
    },
    {
      Icon: SiTailwindcss,
      color: "text-sky-400",
      label: "TailwindCSS",
      link: "https://tailwindcss.com/docs",
    },
    {
      Icon: SiMysql,
      color: "text-orange-500",
      label: "MySQL",
      link: "https://dev.mysql.com/doc/",
    },
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start bg-gray-50 text-gray-900 px-6">
      <h2 className="text-3xl font-semibold mb-6">Techs That I Use</h2>
      <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center">
        {skills.map(({ Icon, color, label, link }) => (
          <li key={label} className="w-20 sm:w-24">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow rounded px-3 sm:px-4 py-4 sm:py-6 flex flex-col items-center hover:shadow-lg transition text-center"
            >
              <Icon className={`${color} text-4xl`} />
              <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
