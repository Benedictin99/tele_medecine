import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./composants/Layout";

import Accueil from "./pages/Sidebar/Accueil";
import Messages from "./pages/Sidebar/Messages";
import RendezVous from "./pages/Sidebar/RendezVous";
import Profile from "./pages/Sidebar/Profile";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="rendez-vous" element={<RendezVous />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
