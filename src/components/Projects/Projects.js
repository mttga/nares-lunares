import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nadienelmundo from "../../Assets/Projects/nadienelmundo.jpg";
import cutiludissi from "../../Assets/Projects/cutiludissi.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Take a look at some of our latest works.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cutiludissi}
              isBlog={false}
              title="Cu Ti Lu Dissi"
              description="We revisited the sicilian song Cu Ti Lu Dissi by Rosa Balistreri. We kept the drama of the song, buta added some playful elements inspired by the version of BGKO."
              ytLink="https://youtube.come"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nadienelmundo}
              isBlog={false}
              title="Nadie en el Mundo"
              description="We played with the composition of Concha Buika, Nadie en el Mundo, focusing on the flamenco elements of the song."
              ytLink="https://youtube.come"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
