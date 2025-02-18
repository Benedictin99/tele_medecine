import React, { useState, useRef, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import Button from "../../composants/Button";

const RendezVous = () => {
  // Liste initiale des rendez‑vous simulés
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Rakoto - Cardiologue",
      date: "2025-01-12",
      time: "10:00",
      symptoms: "Douleurs thoraciques légères",
    },
    {
      id: 2,
      doctor: "Dr. Randrianasolo - Diabétologue",
      date: "2025-01-05",
      time: "14:00",
      symptoms: "Suivi glycémique",
    },
  ]);

  // Liste des docteurs disponibles sur la plateforme
  const availableDoctors = [
    "Dr. Rakoto - Cardiologue",
    "Dr. Randrianasolo - Diabétologue",
    "Dr. Razafindrabe - Généraliste",
    "Dr. Andrianavalona - Neurologue",
    "Dr. Ramiandrisoa - Orthopédiste",
    // D'autres docteurs peuvent être ajoutés ici...
  ];

  // État pour le formulaire d'ajout de rendez‑vous (inclut le champ "symptoms")
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });
  const [showForm, setShowForm] = useState(false);

  // États et ref pour la combobox de recherche de docteurs
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState(availableDoctors);
  const dropdownRef = useRef(null);

  // Gestion de la saisie dans le champ "docteur" qui filtre la liste
  const handleDoctorInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, doctor: value });
    const filtered = availableDoctors.filter((doc) =>
      doc.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDoctors(filtered);
    setShowDropdown(true);
  };

  // Sélection d'un docteur dans la liste filtrée
  const handleSelectDoctor = (doctor) => {
    setFormData({ ...formData, doctor: doctor });
    setShowDropdown(false);
  };

  // Gestion des changements dans les autres champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Soumission du formulaire pour ajouter un nouveau rendez‑vous
  const handleSubmit = (e) => {
    e.preventDefault();
    // On considère que le champ "symptômes" est facultatif
    if (formData.doctor && formData.date && formData.time) {
      const newAppointment = {
        id: appointments.length + 1,
        doctor: formData.doctor,
        date: formData.date,
        time: formData.time,
        symptoms: formData.symptoms,
      };
      setAppointments([...appointments, newAppointment]);
      // Réinitialisation du formulaire
      setFormData({ doctor: "", date: "", time: "", symptoms: "" });
      setShowForm(false);
    }
  };

  // Suppression d'un rendez‑vous
  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
  };

  // Fermer la dropdown si l'utilisateur clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 space-y-6">
      {/* En-tête */}
      <div className="flex md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Rendez‑vous</h1>

        <Button
          text={showForm ? "Annuler" : "Nouveau Rendez‑vous"}
          onClick={() => setShowForm(!showForm)}
        />
      </div>

      {/* Formulaire pour ajouter un nouveau rendez‑vous */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-md relative">
          <h2 className="text-xl font-semibold mb-4">Prendre un rendez‑vous</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Combobox pour choisir le docteur */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-gray-700 mb-1">Docteur</label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleDoctorInputChange}
                onFocus={() => setShowDropdown(true)}
                placeholder="Tapez pour chercher un docteur"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {showDropdown && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto">
                  {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleSelectDoctor(doctor)}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {doctor}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">Aucun résultat trouvé</li>
                  )}
                </ul>
              )}
            </div>

            {/* Champ pour la date */}
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Champ pour l'heure */}
            <div>
              <label className="block text-gray-700 mb-1">Heure</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Nouveau champ pour décrire les symptômes ou le motif */}
            <div>
              <label className="block text-gray-700 mb-1">
                Symptômes / Motif
              </label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleInputChange}
                placeholder="Décrivez brièvement vos symptômes ou le motif de votre rendez‑vous"
                className="w-full border border-gray-300 rounded-md p-2"
                rows="3"
              ></textarea>
            </div>

            <Button
              text={"Enregistrer"}
              type={"submit"}
              bgColor="bg-green-400"
            />
          </form>
        </div>
      )}

      {/* Liste des rendez‑vous */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Mes Rendez‑vous
        </h2>
        {appointments.length === 0 ? (
          <p className="text-gray-600">Aucun rendez‑vous prévu.</p>
        ) : (
          <ul className="space-y-4">
            {appointments.map((appointment) => {
              // Extraction du jour (numéro) du rendez‑vous
              const day = new Date(appointment.date).getDate();
              return (
                <li
                  key={appointment.id}
                  className="border-b pb-4 flex items-center space-x-4"
                >
                  {/* Icône calendrier avec le jour affiché */}
                  <div className="relative w-12 h-12">
                    <FiCalendar className="w-12 h-12 text-gray-300" />
                    <span className="absolute inset-0 flex items-center justify-center text-black font-bold">
                      {day}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">
                      {appointment.doctor}
                    </p>
                    <p className="text-gray-600">
                      {appointment.date} à {appointment.time}
                    </p>
                    {appointment.symptoms && (
                      <p className="text-gray-500 text-sm mt-1">
                        Symptômes/Motif : {appointment.symptoms}
                      </p>
                    )}
                  </div>

                  <Button
                    text={"Annuler"}
                    onClick={() => handleCancelAppointment(appointment.id)}
                    bgColor="bg-red-400"
                  />
                  {/* <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleCancelAppointment(appointment.id)}
                  >
                    Annuler
                  </button> */}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RendezVous;
