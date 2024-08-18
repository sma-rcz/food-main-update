import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Función para alternar la visibilidad del menú en móviles
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className="w-full px-4 py-4 border-b-2 ">
      <div className="flex justify-between items-center px-4  ">
        <h1 className="font-whisper text-4xl">FoodieLand</h1>

        {/* Botón del menú para dispositivos móviles */}
        <button className="block lg:hidden text-3xl" onClick={handleShowMenu}>
          ☰
        </button>

        {/* Menú de navegación en dispositivos móviles */}
        <div
          className={`fixed top-0 right-0 w-full text-center bg-gray-800/40 z-50 rounded-b-md text-white transition-transform duration-300 ease-in-out ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:flex lg:w-auto lg:translate-x-0 lg:bg-transparent lg:h-auto lg:text-black `}
        >
          <div className="flex flex-col lg:flex-row lg:gap-4 p-4 lg:p-0">
            <Link
              to="/"
              className="block py-2 px-4 text-lg font-semibold hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="recipes"
              className="block py-2 px-4 text-lg font-semibold hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Recipes
            </Link>
            <Link
              to="blog"
              className="block py-2 px-4 text-lg font-semibold hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
            <Link
              to="contact"
              className="block py-2 px-4 text-lg font-semibold hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <Link
              to="About"
              className="block py-2 px-4 text-lg font-semibold hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              About us
            </Link>

          
          </div>
        </div>

        {/* Íconos de redes sociales */}
        <div className="hidden lg:flex items-center gap-4">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="hover:animate-pulse cursor-pointer hover:border-b hover:border-blue-300 hover:transition-all hover:duration-500"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="hover:animate-pulse cursor-pointer hover:border-b hover:border-blue-300 hover:transition-all hover:duration-500"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:animate-pulse cursor-pointer hover:border-b hover:border-blue-300 hover:transition-all hover:duration-500"
          />
        </div>
      </div>
    </nav>
  );
};
