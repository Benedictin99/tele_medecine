import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importez les icônes
import fond from "/lock.png";

const LoginPage = () => {
  // État pour gérer la visibilité du mot de passe
  const [showPassword, setShowPassword] = useState(false);

  // Fonction pour basculer la visibilité du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Section du formulaire (en bas sur mobile, à droite sur desktop) */}
      <div
        className="w-full flex items-center justify-center bg-transparent p-4"
        style={{ backgroundImage: `url(${fond})` }}
      >
        {/* Carte pour le formulaire */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all hover:scale-105">
          {/* Titre principal */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
            Connexion
          </h1>

          {/* Sous-titre */}
          <p className="flex flex-col text-base md:text-lg text-gray-600 text-center mb-3 md:mb-5">
            Entrer votre information de connexion <span>pour continuer</span>
          </p>

          {/* Formulaire de connexion */}
          <form>
            {/* Champ Email */}
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@mail.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="mb-4 md:mb-6 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <input
                type={showPassword ? "text" : "password"} // Basculer entre "text" et "password"
                id="password"
                name="password"
                placeholder="Entrer votre mot de passe"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {/* Icône pour afficher/masquer le mot de passe */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-7"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>

            {/* Lien "Mot de passe oublié" */}
            <div className="mb-4 md:mb-6 text-right">
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Mot de passe oublier ?
              </a>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              CONNEXION
            </button>

            {/* Séparateur "OR" */}
            <div className="my-4 md:my-6 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">OU</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Lien d'inscription */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Vous n'avez pas un compte ?{" "}
                <a
                  href="/register"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Créer un compte
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
