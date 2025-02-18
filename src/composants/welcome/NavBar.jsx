import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("accueil");

  const handleSetActive = (to) => {
    setSelected(to);
  };

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="accueil"
          smooth={true}
          duration={600}
          className="cursor-pointer"
          onSetActive={() => handleSetActive("accueil")}
        >
          <h1 className="text-3xl font-bold">
            <span className="text-black font-bold">TELE</span>
            <span className="text-blue-600 font-extrabold">MEDECINE</span>
          </h1>
        </ScrollLink>

        <div className="flex space-x-2">
          <div className="hidden md:flex justify-end space-x-6 px-5 text-lg font-semibold">
            <ScrollLink
              to="accueil"
              smooth={true}
              duration={600}
              className={`cursor-pointer ${
                selected === "accueil" ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`}
              onClick={() => handleSetActive("accueil")}
            >
              Accueil
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={600}
              className={`cursor-pointer ${
                selected === "services" ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`}
              onClick={() => handleSetActive("services")}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={600}
              className={`cursor-pointer ${
                selected === "about" ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`}
              onClick={() => handleSetActive("about")}
            >
              À propos
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              className={`cursor-pointer ${
                selected === "contact" ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600`}
              onClick={() => handleSetActive("contact")}
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
            className={`cursor-pointer ${
              selected === "accueil" ? "text-blue-600" : "text-gray-700"
            } hover:text-blue-600`}
            onClick={() => handleSetActive("accueil")}
          >
            Accueil
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={600}
            className={`py-2 cursor-pointer ${
              selected === "services" ? "text-blue-600" : "text-gray-700"
            } hover:text-blue-600`}
            onClick={() => handleSetActive("services")}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className={`py-2 cursor-pointer ${
              selected === "about" ? "text-blue-600" : "text-gray-700"
            } hover:text-blue-600`}
            onClick={() => handleSetActive("about")}
          >
            À propos
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            className={`py-2 cursor-pointer ${
              selected === "contact" ? "text-blue-600" : "text-gray-700"
            } hover:text-blue-600`}
            onClick={() => handleSetActive("contact")}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
