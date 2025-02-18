import React, { useState } from "react";
import Button from "../Button";
import { Line } from "react-chartjs-2";

const TensionPrelevement = () => {
  const [tensionValue, setTensionValue] = useState(0);

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
        <h1 className="font-semibold">Tension Artériel</h1>
        <h1 className="text-9xl mb-5">{tensionValue}</h1>
        <Button text={"Analyser"} />
      </div>
      <p className="mt-5 text-start">Historique</p>
      <div className="mt-5">
        <Line data={tensionData} options={options} />
      </div>
    </div>
  );
};

export default TensionPrelevement;
