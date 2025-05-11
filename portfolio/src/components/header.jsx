import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "About Me", href: "#about_me" },
    { name: "Contact", href: "#contact" },
    { name: "Courses", href: "#courses" },
    { name: "Internship", href: "#internship" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-sm font-semibold">Jef Ceulemans - Full Stack Developer</div>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 ml-4">
            <a
              href="https://github.com/jef-ceulemans" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
                <FontAwesomeIcon icon={faGithub} size="lg" />

            </a>
            <a
              href="https://www.linkedin.com/in/jef-ceulemans-509aa6295/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />

            </a>
          </div>
        </div>

        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
{/*           {isOpen ? <X size={28} /> : <Menu size={28} />}
 */}        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden px-4 pb-4 bg-gray-800">
          <ul className="space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/jef-ceulemans" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />

            </a>
            <a
              href="https://www.linkedin.com/in/jef-ceulemans-509aa6295/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
