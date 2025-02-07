import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./composants/Layout";
import Profil from "./pages/Profil";
import Messages from "./pages/Messages";
import Consultation from "./pages/consultation/Consultation";
import Docteurs from "./pages/Docteurs";
import Accueil from "./pages/Accueil";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="docteurs" element={<Docteurs />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profil" element={<Profil />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
