import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home2Logo from "../../Assets/three_noses.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              who are <span className="purple"> las nares </span>
            </h1>
            <p className="home-about-body">
            Las Nares Lunares nos conocimos en Granada, con una pasión común por el flamenco y la música folclórica. Comenzamos una investigación sobre la música de etnia gitana de distintos países europeos (Hungría, Rumania y los Balcanes). Música de raíz donde poder buscar nuevas sonoridades dentro de melodías populares y tradicionales a través de este formato íntimo y peculiar: guitarra, cello y voz. Usando el chelo como bajo y melodía, hemos buscado el empaste de los tres instrumentos como color único, creando un repertorio particular donde mezclamos música popular Mediterránea, Fado, música de los Balcanes, gipsy jazz y Flamenco (entre otras), buscando así crear un espectáculo emotivo, festivo, teatral y profundo.  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={home2Logo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>find us on</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@LasNaresLunares"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nareslunares"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
