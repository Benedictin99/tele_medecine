import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import Button from "../Button";

const Contact = () => {
  // État pour le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour envoyer le formulaire (à modifier plus tard pour ajouter une API)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! (Ajoutez une fonctionnalité backend plus tard)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Contactez-nous
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Vous avez une question ? N’hésitez pas à nous contacter.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Infos de contact */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 py-2">
              Nos coordonnées
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <a
                href="mailto:tsahatsgrb@gmail.com"
                className="text-gray-700 hover:text-blue-600"
              >
                tsahatsgrb@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <p className="text-gray-700">
                +261 34 37 865 70 / +261 33 17 250 84
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <a
                href="https://wa.me/261343786570"
                target="_blank"
                className="text-gray-700 hover:text-green-500"
              >
                WhatsApp: +261 34 37 865 70
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <div className="px-6 py-3 rounded-lg text-lg">
                <Button text="Envoyer" weight="w-full" onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
