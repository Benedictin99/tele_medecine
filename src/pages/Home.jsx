import React from "react";
import Hero from "../composants/home/Hero";
import Services from "../composants/home/Services";
import Navbar from "../composants/home/NavBar";
import About from "../composants/home/About";
import Contact from "../composants/home/Contact";

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
