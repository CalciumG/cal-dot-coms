import React from 'react';
import { Github, Linkedin } from "react-bootstrap-icons";

const Socials = () => {
    return (
        <div class="flex justify-center">
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
        </div>
    );
};

export default Socials;