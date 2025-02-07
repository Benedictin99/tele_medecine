import React, { useState, useEffect } from "react";

const Profil = () => {
  // État local pour stocker les informations de l'utilisateur
  const [user, setUser] = useState(null);

  // Simulation de récupération des données utilisateur (remplacez par un appel API réel)
  useEffect(() => {
    const fetchUserData = async () => {
      const simulatedUser = {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+33 6 12 34 56 78",
        avatar: "https://via.placeholder.com/150",
        bio: "Développeur passionné par React et Tailwind CSS.",
      };

      // Simuler un délai de chargement
      setTimeout(() => {
        setUser(simulatedUser);
      }, 500);
    };

    fetchUserData();
  }, []);

  // Affichage d'un loader tant que les données ne sont pas chargées
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          {/* En-tête : avatar et informations principales */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <img
              src={"/docteur.png"}
              alt="Avatar de l'utilisateur"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 mt-2">{user.email}</p>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Informations
            </h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <span className="font-medium">Téléphone :</span> {user.phone}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-medium">Bio :</span> {user.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Bouton pour éditer le profil */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => alert("Edition du profil")}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Éditer le profil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
