import React from "react";
import { FiActivity, FiUserCheck, FiMessageCircle } from "react-icons/fi";
import { MdOutlineMedicalServices } from "react-icons/md";

const Accueil = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Message de bienvenue */}
      <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Bienvenue, Yamal Lamine 👋</h1>
        <p className="text-sm mt-2">Votre santé, notre priorité.</p>
      </div>

      {/* Statistiques de santé */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <FiActivity className="text-blue-500 text-3xl" />
          <p className="text-gray-700 mt-2">Glycémie</p>
          <span className="text-lg font-semibold">5.6 mmol/L</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <MdOutlineMedicalServices className="text-green-500 text-3xl" />
          <p className="text-gray-700 mt-2">Tension Artérielle</p>
          <span className="text-lg font-semibold">120/80 mmHg</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <FiUserCheck className="text-red-500 text-3xl" />
          <p className="text-gray-700 mt-2">Température</p>
          <span className="text-lg font-semibold">36.7°C</span>
        </div>
      </div>

      {/* Accès rapide */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 ">
        <button className="bg-blue-600 text-white p-4 rounded-lg flex flex-col items-center shadow-md hover:bg-blue-500">
          <MdOutlineMedicalServices className="text-3xl" />
          <span className="mt-2 text-sm">Consultation</span>
        </button>

        <button className="bg-green-600 text-white p-4 rounded-lg flex flex-col items-center shadow-md hover:bg-green-500">
          <FiMessageCircle className="text-3xl" />
          <span className="mt-2 text-sm">Discussions</span>
        </button>

        <button className="bg-yellow-500 text-white p-4 rounded-lg flex flex-col items-center shadow-md hover:bg-yellow-400">
          <FiUserCheck className="text-3xl" />
          <span className="mt-2 text-sm">Profile</span>
        </button>

        <button className="bg-gray-600 text-white p-4 rounded-lg flex flex-col items-center shadow-md hover:bg-gray-500">
          <FiActivity className="text-3xl" />
          <span className="mt-2 text-sm">Historique</span>
        </button>
      </div>

      {/* Liste des derniers rendez-vous */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Rendez-vous récents
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center p-3 border-b">
            <span className="text-gray-700">Dr. Rakoto - Cardiologue</span>
            <span className="text-sm text-gray-500">12 Jan 2025</span>
          </li>
          <li className="flex justify-between items-center p-3 border-b">
            <span className="text-gray-700">
              Dr. Randrianasolo - Diabétologue
            </span>
            <span className="text-sm text-gray-500">05 Jan 2025</span>
          </li>
          <li className="flex justify-between items-center p-3">
            <span className="text-gray-700">
              Dr. Razafindrabe - Généraliste
            </span>
            <span className="text-sm text-gray-500">02 Jan 2025</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accueil;
