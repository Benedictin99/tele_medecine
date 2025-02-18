import React from "react";
import Hero from "../composants/welcome/Hero";
import Services from "../composants/welcome/Services";
import Navbar from "../composants/welcome/NavBar";
import About from "../composants/welcome/About";
import Contact from "../composants/welcome/Contact";

const Home = () => {
  return (
    <section id="accueil">
      <div>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
