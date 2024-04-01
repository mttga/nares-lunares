import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Las Nares Lunares nos conocimos en Granada, 
          con una pasión común por el flamenco y la música folclórica. 
          Comenzamos una investigación sobre la música de etnia gitana de distintos 
          países europeos (Hungría, Rumania y los Balcanes). Música de raíz donde poder 
          buscar nuevas sonoridades dentro de melodías populares y tradicionales a 
          través de este formato íntimo y peculiar: guitarra, cello y voz. Usando el 
          chelo como bajo y melodía, hemos buscado el empaste de los tres instrumentos 
          como color único, creando un repertorio particular donde mezclamos música popular 
          Mediterránea, Fado, música de los Balcanes, gipsy jazz y Flamenco (entre otras), 
          buscando así crear un espectáculo emotivo, festivo, teatral y profundo.   
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Nares Seran Nares!"{" "}
          </p>

          <h3>you can find us at:</h3>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Street Festivals
            </li>
            <li className="about-activity">
              <ImPointRight /> Private Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Intimate Concerts
            </li>
            <li className="about-activity">
              <ImPointRight /> Cultural Events
            </li>
          </ul>

          
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
