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

const TemperaturePrelevement = () => {
  const [tempValue, setTempValue] = useState(0);

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
        <h1 className="font-semibold">Température</h1>
        <h1 className="text-9xl mb-5">{tempValue}</h1>
        <Button text={"Analyser"} />
      </div>
      <p className="mt-5 text-start">Historique</p>
      <div className="mt-5">
        <Line data={temperatureData} options={options} />
      </div>
    </div>
  );
};

export default TemperaturePrelevement;
