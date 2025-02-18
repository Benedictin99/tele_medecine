import React from "react";
import { FaStethoscope, FaUserMd, FaHeartbeat } from "react-icons/fa";

const services = [
  {
    icon: <FaStethoscope className="text-blue-600 text-5xl" />,
    title: "Consultation en ligne",
    description:
      "Discutez avec un médecin depuis votre domicile en toute simplicité.",
  },
  {
    icon: <FaUserMd className="text-blue-600 text-5xl" />,
    title: "Suivi médical",
    description:
      "Accédez à votre historique médical et recevez des conseils personnalisés.",
  },
  {
    icon: <FaHeartbeat className="text-blue-600 text-5xl" />,
    title: "Urgences médicales",
    description:
      "Trouvez rapidement une assistance médicale en cas de besoin urgent.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center mt-5">
        <h2 className="text-4xl font-bold text-gray-800">Nos Services</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Découvrez comment nous pouvons vous aider.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
