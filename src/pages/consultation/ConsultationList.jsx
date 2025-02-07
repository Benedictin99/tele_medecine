import React from "react";

const ConsultationList = () => {
  // Exemple de données de consultation
  const consultations = [
    {
      id: 1,
      patientName: "John Doe",
      consultationDate: "2025-02-01",
      symptoms: "Fever, Cough",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      consultationDate: "2025-02-02",
      symptoms: "Headache, Nausea",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Liste des consultations</h2>
      <ul className="space-y-4">
        {consultations.map((consultation) => (
          <li key={consultation.id} className="p-4 bg-white rounded-lg shadow">
            <p className="text-lg font-semibold">
              Nom du patient: {consultation.patientName}
            </p>
            <p className="text-gray-600">
              Date de consultation: {consultation.consultationDate}
            </p>
            <p className="text-gray-600">Symptômes: {consultation.symptoms}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultationList;
