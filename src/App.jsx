import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./composants/Layout";

import Accueil from "./pages/sidebar/Accueil";
import Messages from "./pages/sidebar/Messages";
import RendezVous from "./pages/sidebar/RendezVous";
import Profile from "./pages/sidebar/Profile";

import Home from "./pages/Welcome";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Prelevement from "./pages/sidebar/Prelevement";

// import Message from "./pages/sidebar/Messages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Welcome directory */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Home directory */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="prelevement" element={<Prelevement />} />
          <Route path="rendez-vous" element={<RendezVous />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
