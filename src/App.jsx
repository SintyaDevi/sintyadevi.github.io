import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SectionOne from "./components/sectionOne";
import Navbar from "./components/navbar";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
// import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <SectionOne />
      </section>
      <section id="portofolio">
        <SectionTwo />
      </section>
      <section id="about">
        <SectionThree />
      </section>
      <section id="contact">
        <SectionFour />
      </section>
    </>
  );
}

export default App;
