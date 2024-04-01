import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import trioCollage from "../../Assets/trio_collage.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                hola, 
                <span className="wave" role="img" aria-labelledby="wave" style={{ paddingLeft: 15 }} >
                🎻
                </span>
              </h1>

              <h1 className="heading-name">
                somos
                <strong className="main-name"> Las Nares Lunares </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={7} style={{ paddingBottom: 0 }}>
              <img
                src={trioCollage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "850px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
