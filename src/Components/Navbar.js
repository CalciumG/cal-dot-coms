import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [colours, setColours] = useState("#2d3748");

  const listenScrollEvent = (e) => {
    if (window.scrollY > 450) {
      setColours("#1a202c");
    } else {
      setColours("#2d3748");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <header
      style={{ backgroundColor: colours }}
      class=" md:sticky top-0 z-10 transition"
    >
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p class="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#home" class="ml-3 text-xl">
            Callum Gordon
          </a>
        </p>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" class="mr-5 hover:text-white">
            Projects
          </a>
        </nav>
        <a
          href="#contact"
          class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Get in touch
          <ArrowRightIcon class="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
