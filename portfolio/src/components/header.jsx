import { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Over mij", href: "#about_me" },
    { name: "Stage", href: "#internship" },
    { name: "Projecten", href: "#projects" },
    { name: "Cursussen", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = "";
      for (const link of links) {
        const id = link.href.substring(1);
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = link.href;
            break; 
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]); 

  return (
    <nav className="bg-gray-950 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-sm font-semibold hover:text-violet-400 transition-colors">Jef Ceulemans - Software Developer</a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`hover:text-violet-400 transition-colors ${
                    activeLink === link.href ? "text-violet-400 font-bold" : ""
                  }`}
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
              className="hover:text-violet-400 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/jef-ceulemans-509aa6295/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
        <button
          className="sm:hidden focus:outline-none hover:text-violet-400"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FontAwesomeIcon icon={faXmark} size="lg"/> : <FontAwesomeIcon icon={faBars} size="lg" />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden px-4 pb-4 bg-gray-950 transition-all duration-300 ease-in-out transform origin-top">
          <ul className="space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-violet-400 transition-colors ${
                    activeLink === link.href ? "text-violet-400 font-bold" : ""
                  }`}
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
              className="hover:text-violet-400 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/jef-ceulemans-509aa6295/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}