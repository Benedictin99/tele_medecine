{
  /*import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image à gauche (cachée sur mobile) *
        <div className="hidden md:block w-1/2">
          <img
            src="/fond.png"
            alt="À propos"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Texte à droite *
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4">
          <h2 className="text-4xl font-bold text-gray-800">À propos de nous</h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Notre plateforme facilite l'accès aux soins médicaux en ligne. Nous
            connectons les patients avec des professionnels de santé pour des
            consultations rapides et un suivi efficace.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Grâce à notre système, vous pouvez prendre rendez-vous, accéder à
            votre dossier médical et recevoir des conseils personnalisés en
            toute sécurité.
          </p>
          <div className="mt-6">
            <div className="text-2xl my-5 justify-end flex mr-20">
              <Button text="Commencer" redirectTo="/register" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
*/
}

import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-6 mt-5">
        <h2 className="text-4xl font-bold text-black mb-6">À propos de nous</h2>
        <p className="text-lg text-gray-700 mb-8">
          <strong>Telemedecine</strong> est une application innovante qui permet
          de faciliter l'accès aux soins médicaux à distance, offrant des
          consultations en ligne rapides et sécurisées avec des professionnels
          de santé certifiés. Nous croyons que la santé doit être accessible à
          tous, peu importe la situation géographique.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Accessibilité
            </h3>
            <p className="text-gray-600 text-lg">
              Grâce à <strong>Telemedecine</strong>, vous pouvez consulter un
              médecin en ligne où que vous soyez, sans avoir à vous déplacer.
              Nous mettons la technologie au service de la santé pour vous
              offrir des soins accessibles à tout moment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Sécurité
            </h3>
            <p className="text-gray-600 text-lg">
              La sécurité des données est notre priorité. Toutes les
              consultations sont privées et confidentielles, avec des mesures de
              sécurité strictes pour protéger vos informations médicales.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Simplicité
            </h3>
            <p className="text-gray-600 text-lg">
              L'application est conçue pour être simple à utiliser, avec une
              interface intuitive pour réserver une consultation, suivre votre
              état de santé et interagir facilement avec les professionnels de
              santé.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-xl text-gray-700">
            Rejoignez <strong>Telemedecine</strong> aujourd'hui et améliorez
            votre santé avec un accès facile à des soins médicaux de qualité, où
            que vous soyez.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
