import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./composants/Layout";
import Profil from "./pages/Profil";
import Messages from "./pages/Messages";
import Consultation from "./pages/Consultation";
import Docteurs from "./pages/Docteurs";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="docteurs" element={<Docteurs />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
