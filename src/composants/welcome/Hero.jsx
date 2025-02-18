import React from "react";
import Button from "../Button";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  const phrases = [
    "Accédez à des soins de santé professionnels, où que vous soyez.",
    "Consultations médicales en ligne, rapides et sécurisées.",
    "Consultations avec des professionnels de santé certifiés.",
    "Discuter, passer un appel video avec votre medecin professionnel.",
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-full overflow-hidden">
      {/* Image à gauche (cachée en mobile) */}
      <div
        className="flex flex-col items-center h-5 md:block md:w-1/2 md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/cover.png')" }}
      ></div>

      {/* Texte Hero à droite */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left px-6 md:px-12 py-10 flex-grow pt-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Application de suivi médicale en ligne gratuit à{" "}
            <span className="text-blue-700 font-extrabold text-5xl md:text-5xl">
              Madagascar
            </span>
          </h1>
          <h3 className="text-gray-700 mt-4 mr-10 text-lg leading-relaxed">
            Prenez rendez-vous avec des professionnels de santé et suivez votre
            état de santé en toute simplicité.
          </h3>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
            <ul className="space-y-4">
              {phrases.map((phrase, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg text-gray-600 leading-relaxed"
                >
                  <FaCheckCircle className="text-blue-600 mr-3" />
                  <p className="p-4 rounded-md">{phrase}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-2xl my-5 justify-end flex mr-5 md:mr-20">
            <Button text="Commencer" redirectTo="/register" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
