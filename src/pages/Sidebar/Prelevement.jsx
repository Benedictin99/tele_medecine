import React from "react";
import GlycemiePrelevement from "../../composants/prelevement/GlycemiePrelevement";
import TensionPrelevement from "../../composants/prelevement/TensionPrelevement";
import TemperaturePrelevement from "../../composants/prelevement/TemperaturePrelevement";

const Prelevement = () => {
  return (
    <div className="md:flex justify-between mr-2">
      <GlycemiePrelevement />
      <TensionPrelevement />
      <TemperaturePrelevement />
    </div>
  );
};

export default Prelevement;
