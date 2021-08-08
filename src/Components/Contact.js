import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <ContactForm />
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-32 hidden lg:block">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="./message.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
