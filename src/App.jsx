import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
