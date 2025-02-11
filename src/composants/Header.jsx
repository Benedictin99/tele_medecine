import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    "Nouveau rendez-vous confirmé",
    "Message du Dr. Rakoto",
    "Mise à jour de votre dossier médical",
  ]);
  const navigate = useNavigate();

  // Fonction de déconnexion
  const handleLogout = () => {
    // Suppression du token (exemple)
    localStorage.removeItem("token");

    // Redirection vers la page de connexion
    navigate("/login");
  };

  return (
    <>
      <div className="fixed top-0 left-16 md:left-65 right-0 z-5 flex justify-between items-center p-4 bg-white shadow-md">
        {/* Nom de l'utilisateur */}
        <div>
          <h1 className="text-xl font-semibold">Lamine Yamal</h1>
        </div>

        {/* Barre de recherche */}
        <div className="flex items-center space-x-5">
          {/* Icône de notification */}
          <div className="relative">
            <button
              className="relative text-2xl text-gray-600 cursor-pointer"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <GoBell size={30} />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 -mr-1 -mt-1 flex items-center justify-center bg-blue-500 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
                  {notifications.length}
                </span>
              )}
            </button>

            {/* Menu déroulant des notifications */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3 z-10">
                {notifications.length > 0 ? (
                  notifications.map((notif, index) => (
                    <div
                      key={index}
                      className="border-b last:border-none p-2 text-gray-700 text-sm"
                    >
                      {notif}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm text-center">
                    Aucune notification
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Photo de profil avec menu déroulant */}
          <div className="relative">
            <img
              src="/docteur.png"
              alt="profil"
              className="w-10 rounded-full border-2 border-blue-400 cursor-pointer"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />

            {/* Menu déroulant du profil */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                  onClick={() => navigate("/home/profile")}
                >
                  🧑‍⚕️ Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                  onClick={() => navigate("/settings")}
                >
                  ⚙️ Paramètres
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  onClick={handleLogout}
                >
                  🚪 Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Espacement pour éviter que le contenu soit caché sous le header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
