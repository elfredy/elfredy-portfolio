import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-center mt-auto py-6 text-gray-600 dark:text-gray-400 text-sm">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/elfredy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon
            size={24}
            className="hover:text-black dark:hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ferid-necefov-342a8a204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon
            size={24}
            className="hover:text-blue-600 transition-colors"
          />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Farid Najafov. Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer;
