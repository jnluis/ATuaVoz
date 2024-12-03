import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="text-gray-800 dark:text-gray-200 py-6">
        {/* TODO: VER CORES OU METER TUDO TRANSPARENTE! */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center">

          {/* Social Media Icons */}
          <div className="flex space-x-4 ">
            <p>Lista A - Unidos pela Voz {new Date().getFullYear()} </p>
            <a href="http://www.instagram.com/unidos.pela.voz/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <IoLogoInstagram size={24} />
            </a>
            <a href="https://github.com/jnluis/ATuaVoz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <IoLogoGithub size={24} />
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
}
