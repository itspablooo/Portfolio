import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base mb-4">&copy; 2024 Pablo Moreno-Rivera. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/itspablooo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-highlight transition duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-moreno-rivera-a3a53a1b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-highlight transition duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}