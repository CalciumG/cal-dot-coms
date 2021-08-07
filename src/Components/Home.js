import React from "react";
import Socials from "./Socials";

const Home = () => {
  return (
    <section id="about">
      <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Callum.
          </h1>
          <h2 class="mb-8 leading-relaxed">
            I'm a software developer with 2 years professional experience in
            full-stack development, primarily utilising C#, Javascript, Vue and
            React.
          </h2>
          <div class="flex justify-center">
            <Socials />
            <a
              href="CallumGordon-CV.pdf"
              target="_blank"
              class="inline-flex text-black bg-white border-0 py-2 px-6 icon rounded text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
