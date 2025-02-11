import React from "react";
import { useNavigate } from "react-router-dom"; // Importation du hook useNavigate

const Button = ({
  text,
  type,
  bgColor = "bg-blue-700",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-600",
  onClick = () => {}, // Fonction à appeler au clic
  disabled = false, // Désactivation du bouton
  redirectTo = "", // URL de redirection
  weight = null,
}) => {
  const navigate = useNavigate(); // Déclaration du hook de navigation

  // Fonction qui gère la redirection
  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo); // Redirige vers l'URL spécifiée
    }
    if (onClick) {
      onClick(); // Exécute la fonction onClick, si définie
    }
  };

  return (
    <button
      onClick={handleClick} // Utilise la fonction handleClick
      disabled={disabled}
      type={type}
      className={`${
        disabled
          ? "bg-gray-400 text-gray-700 cursor-not-allowed"
          : `${weight} ${bgColor} ${textColor} ${hoverColor}`
      } px-6 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-center transition-all cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
