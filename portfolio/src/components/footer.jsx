import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Jef Ceulemans. All rights reserved.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">

          <a
            href="https://www.linkedin.com/in/jef-ceulemans-509aa6295/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />

          </a>

          <a
            href="https://github.com/jef-ceulemans"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />

          </a>

           <a
            href="mailto:jef.ceulemans@proximus.be"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} size='lg' />

          </a>
        </div>
      </div>
    </footer>
  );
}
