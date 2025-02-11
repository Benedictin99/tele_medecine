import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="accueil"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          <h1 className="text-3xl font-bold">
            <span className="text-black font-bold">TELE</span>
            <span className="text-blue-600 font-extrabold">MEDECINE</span>
          </h1>
        </ScrollLink>

        <div className="flex space-x-2">
          <div className="hidden md:flex flex-1 justify-end space-x-6 px-5 text-lg font-semibold">
            <ScrollLink
              to="accueil"
              smooth={true}
              duration={600}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Accueil
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={600}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={600}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              À propos
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
          <div className="flex">
            <Button text="Connexion" redirectTo="/login" />
          </div>
          <button
            className="md:hidden text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center py-2">
          <ScrollLink
            to="accueil"
            smooth={true}
            duration={600}
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Accueil
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={600}
            className="py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className="py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            À propos
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            className="py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
