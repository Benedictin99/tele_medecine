import React from "react";
import { TbUserCircle, TbMessage, TbBox } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const Sidebar = () => {
  const SIDE_LINKS = [
    { id: 1, path: "/home", name: "Tableau de bord", icon: TbBox },
    {
      id: 2,
      path: "prelevement",
      name: "Prelevement",
      icon: MdOutlineMedicalServices,
    },
    {
      id: 3,
      path: "rendez-vous",
      name: "Rendez-vous",
      icon: FaUserDoctor,
    },
    { id: 4, path: "messages", name: "Message", icon: TbMessage },
    { id: 5, path: "profile", name: "Profil", icon: TbUserCircle },
  ];

  return (
    <div className="w-16 md:w-65 fixed left-0 top-0 z-10 h-screen md:pt-6 md:px-5 bg-white">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <img src="/logo.jpg" alt="logo" className="w-10 md:flex m-2 md:m-0" />
        <div className="hidden md:flex">
          <span className="text-2xl font-semibold">TELE</span>
          <span className="text-2xl text-blue-500 font-bold">MEDECINE</span>
        </div>
      </div>
      {/* Fin Logo Section */}

      {/* Navigation */}
      <ul className="mt-6 space-y-6">
        {SIDE_LINKS.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              end
              className={({ isActive }) =>
                `flex justify-start items-center md:space-x-5 font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-blue-500 ${
                  isActive ? "bg-blue-200 text-blue-500" : "text-gray-800"
                }`
              }
            >
              <span>{link.icon()}</span>
              <span className="text-sm hidden md:flex">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Fin Navigation */}

      {/* Section d'aide */}
      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-sm text-white py-2 px-5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full">
          <span className="hidden md:flex">Besoin d'aide ?</span>
          <span className="md:hidden justify-center">?</span>
        </p>
      </div>
      {/* Fin section d'aide */}
    </div>
  );
};

export default Sidebar;
