import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Get in touch
          </h1>
          <h2 className="mb-8 leading-relaxed">
            Please send me a message on Linkedin if you have any opportunies
            you'd like to discuss!
          </h2>
          <div className="flex justify-center">
            <a
              class="mr-4 icon"
              href="https://github.com/calciumg"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              class="icon"
              href="https://www.linkedin.com/in/callum-j-gordon/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./message.svg"
          />
        </div>
      </div>
    </section>
  );
}
