import React from "react";
import ConsultationForm from "./ConsultationForm";
import ConsultationList from "./ConsultationList";

const Consultation = () => {
  return (
    <div id="consultation">
      <main>
        <ConsultationForm />
        <ConsultationList />
      </main>
    </div>
  );
};

export default Consultation;
