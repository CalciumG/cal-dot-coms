import React from "react";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
