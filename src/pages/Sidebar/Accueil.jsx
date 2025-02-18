import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FiMessageCircle, FiUserCheck } from "react-icons/fi";
import { MdOutlineMedicalServices } from "react-icons/md";
import Button from "../../composants/Button";

// Enregistrement des composants ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Accueil = () => {
  // Données pour le graphique de Glycémie
  const glycemiaData = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "Glycémie (mmol/L)",
        data: [5.6, 5.8, 5.5, 5.7, 5.9, 5.6, 5.8],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Données pour le graphique de Tension Artérielle (avec deux séries : systolique et diastolique)
  const tensionData = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "Systolique (mmHg)",
        data: [120, 122, 118, 121, 119, 123, 120],
        borderColor: "rgba(34, 197, 94, 1)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Diastolique (mmHg)",
        data: [80, 82, 78, 79, 81, 80, 82],
        borderColor: "rgba(96, 165, 250, 1)",
        backgroundColor: "rgba(96, 165, 250, 0.5)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Données pour le graphique de Température
  const temperatureData = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "Température (°C)",
        data: [36.7, 36.8, 36.6, 36.7, 36.8, 36.7, 36.6],
        borderColor: "rgba(239, 68, 68, 1)",
        backgroundColor: "rgba(239, 68, 68, 0.5)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Options communes pour les graphiques
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        ticks: { color: "#4B5563" },
        grid: { color: "transparent" },
      },
      y: {
        ticks: { color: "#4B5563" },
        grid: { color: "rgba(0, 0, 0, 0.05)" },
      },
    },
  };

  return (
    <div className="p-4 space-y-6">
      {/* Message de bienvenue */}
      <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Bienvenue, Yamal Lamine 👋</h1>
        <p className="text-sm mt-2">Votre santé, notre priorité.</p>
      </div>

      {/* Graphiques de statistiques de santé */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* Graphique Glycémie */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-700 text-center font-semibold mb-2">
            Glycémie
          </h2>
          <div className="w-full h-40 mb-5">
            <Line data={glycemiaData} options={options} />
          </div>
          <Button text={"Prelevement"} redirectTo="/home/prelevement" />
        </div>

        {/* Graphique Tension Artérielle */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-700 text-center font-semibold mb-2">
            Tension Artérielle
          </h2>
          <div className="w-full h-40 mb-5">
            <Line data={tensionData} options={options} />
          </div>
          <Button text={"Prelevement"} redirectTo="/home/prelevement" />
        </div>

        {/* Graphique Température */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-700 text-center font-semibold mb-2">
            Température
          </h2>
          <div className="w-full h-40 mb-5">
            <Line data={temperatureData} options={options} />
          </div>
          <Button text={"Prelevement"} redirectTo="/home/prelevement" />
        </div>
      </div>

      {/* Accès rapide */}
      <div className="flex flex-row justify-between">
        <a
          href="/home/rendez-vous"
          className="bg-blue-600 text-white p-4 rounded-lg w-[30%] flex flex-col items-center shadow-md hover:bg-blue-500"
        >
          <MdOutlineMedicalServices className="text-3xl" />
          <span className="mt-2 text-sm">Rendez-vous</span>
        </a>

        <a
          href="/home/messages"
          className="bg-green-600 text-white p-4 w-[30%] rounded-lg flex flex-col items-center shadow-md hover:bg-green-500"
        >
          <FiMessageCircle className="text-3xl" />
          <span className="mt-2 text-sm">Discussions</span>
        </a>

        <a
          href="/home/profile"
          className="bg-blue-600 text-white p-4 w-[30%] rounded-lg flex flex-col items-center shadow-md hover:bg-blue-500"
        >
          <FiUserCheck className="text-3xl" />
          <span className="mt-2 text-sm">Profile</span>
        </a>
      </div>

      {/* Liste des derniers rendez-vous */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Rendez-vous récents
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center p-3 border-b">
            <span className="text-gray-700">Dr. Rakoto - Cardiologue</span>
            <span className="text-sm text-gray-500">12 Jan 2025</span>
          </li>
          <li className="flex justify-between items-center p-3 border-b">
            <span className="text-gray-700">
              Dr. Randrianasolo - Diabétologue
            </span>
            <span className="text-sm text-gray-500">05 Jan 2025</span>
          </li>
          <li className="flex justify-between items-center p-3">
            <span className="text-gray-700">
              Dr. Razafindrabe - Généraliste
            </span>
            <span className="text-sm text-gray-500">02 Jan 2025</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accueil;
