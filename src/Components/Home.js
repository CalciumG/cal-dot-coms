import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

const Home = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Callum.
          </h1>
          <h2 className="mb-8 leading-relaxed">
            I'm a software developer with 2 years professional experience in
            full-stack development, primarily utilising C#, Javascript, Vue and
            React.
          </h2>
          <div className="flex justify-center">
            <a
              class="mr-4 icon"
              href="https://github.com/calciumg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github color="rgba(243,244,246)" size={40} />
            </a>
            <a
              class="icon mr-4"
              href="https://www.linkedin.com/in/callum-j-gordon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin color="rgba(243,244,246)" size={40} />
            </a>
            <a
              href="#contact"
              className="inline-flex text-black bg-white border-0 py-2 px-6 icon rounded text-lg"
            >
              Work With Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
