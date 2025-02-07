import React, { useState } from "react";
import { TbUserCircle, TbMessage, TbBox, TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdOutlineMedicalServices } from "react-icons/md";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleClick = (index) => {
    setActiveLink(index);
  };
  const SIDE_LINKS = [
    { id: 1, path: "/home", name: "Tableau de bord", icon: TbBox },
    { id: 2, path: "docteurs", name: "Docteurs", icon: TbUsers },
    {
      id: 3,
      path: "consultation",
      name: "Consultation",
      icon: MdOutlineMedicalServices,
    },
    { id: 4, path: "messages", name: "Message", icon: TbMessage },
    { id: 5, path: "profil", name: "Profil", icon: TbUserCircle },
  ];
  return (
    <div className="w-16 md:w-65 fixed left-0 top-0 z-10 h-screen boder-r md:pt-6 md:px-5 bg-white">
      {/* Logo section */}
      <div className="flex items-center mb-8">
        <img src="/logo1.jpg" alt="logo" className="w-10 md:flex m-2 md:m-0" />
        <div className="hidden md:flex">
          <span className="text-2xl font-semibold">TELE</span>
          <span className="text-2xl text-blue-500 font-bold">MEDECINE</span>
        </div>
      </div>
      {/* Logo section */}

      {/* Navigation  */}
      <ul className="mt-6 space-y-6">
        {SIDE_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-blue-500 ${
              activeLink === index ? "bg-blue-200" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-start items-center md:space-x-5"
              onClick={() => handleClick(index)}
            >
              <span className="text-gray-800">{link.icon()}</span>
              <span className="text-sm text-gray-800 hidden md:flex hover:text-blue-500">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation  */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-sm text-white py-2 px-5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full">
          <span className="hidden md:flex">Besoin d'aide ?</span>{" "}
          <span className="md:hidden justify-center">?</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
