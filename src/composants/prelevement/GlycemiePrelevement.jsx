import React, { useState } from "react";
import Button from "../Button";
import { Line } from "react-chartjs-2";
import {
  Chart,
  Filler,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrer les plugins nécessaires
Chart.register(
  Filler,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const GlycemiePrelevement = () => {
  const [glycemieValue, setGlycemieValue] = useState(0);

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
    <div className="bg-white shadow-2xl mb-5 md:w-[30%] h-auto rounded-2xl text-center p-5">
      <div>
        <h1 className="font-semibold">Taux de Glycémie</h1>
        <h1 className="text-9xl mb-5">{glycemieValue}</h1>
        <Button text={"Analyser"} />
      </div>
      <p className="mt-5 text-start">Historique</p>
      {/* Graphique Glycémie */}
      <div className="mt-4">
        <Line data={glycemiaData} options={options} />
      </div>
    </div>
  );
};

export default GlycemiePrelevement;
