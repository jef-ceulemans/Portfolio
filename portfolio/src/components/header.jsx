import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Over mij", href: "#about_me" },
    { name: "Stage", href: "#internship" },
    { name: "Projecten", href: "#projects" },
    { name: "Cursussen", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-sm font-semibold">Jef Ceulemans - Software Developer</div>

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
      {isOpen ? <FontAwesomeIcon icon={faXmark} size="lg"/> : <FontAwesomeIcon icon={faBars} size="lg" />}
       
      </button>

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
