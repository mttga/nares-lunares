import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Musica De Raiz.",
          "Flamenco.",
          "Balkan.",
          "Emotivo.",
          "Intimo.",
          "Teatral.",
          "Festivo.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
