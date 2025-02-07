import React from "react";
import { GoBell } from "react-icons/go";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-16 md:left-65 right-0 z-5 flex justify-between items-center p-4 bg-white mb-20">
        <div>
          <h1 className="text-xl font-semibold">Lamine Yamal</h1>
        </div>
        <div className="flex items-center space-x-5">
          <div className="hidden md:flex">
            <input
              type="text"
              placeholder="Recherche..."
              className="bg-blue-50 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center space-x-5">
            <button className="relative text-2xl text-gray-600 cursor-pointer">
              <GoBell size={30} />
              <span className="absolute top-0 right-0 -mr-1 -mt-1 flex items-center justify-center bg-blue-300 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
                9
              </span>
            </button>
            <img
              src="/docteur.png"
              alt="profil"
              className="w-10 rounded-full border-2 border-blue-400"
            />
          </div>
        </div>
      </div>
      <div className="h-20"></div>{" "}
      {/* Spacer to create margin below the fixed header */}
    </>
  );
};

export default Header;
