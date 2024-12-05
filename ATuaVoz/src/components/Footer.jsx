import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="text-gray-800 dark:text-gray-200 py-6 items-end"> 
        {/* TODO: VER CORES OU METER TUDO TRANSPARENTE! */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center">

          {/* Social Media Icons */}
          <div className="flex space-x-4 items-center">
            <p className="text-xs md:text-base">Lista A - Unidos pela Voz, Movidos pelo Agora {new Date().getFullYear()} </p>
            <Link isExternal color="danger" href="http://www.instagram.com/unidos.pela.voz/">
              <IoLogoInstagram size={24} />
            </Link>
            <Link isExternal color="foreground" href="https://github.com/jnluis/ATuaVoz">
              <IoLogoGithub size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
