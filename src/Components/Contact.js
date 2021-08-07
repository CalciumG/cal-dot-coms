import React from "react";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id="contact">
      <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Get in touch
          </h1>
          <h2 class="mb-8 leading-relaxed">
            Please send me a message on Linkedin if you have any opportunies
            you'd like to discuss!
          </h2>
          <Socials />
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="./message.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact
