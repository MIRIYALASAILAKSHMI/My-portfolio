import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobportal from "../../Assets/Projects/p1.jpg";
import scb from "../../Assets/Projects/p3.jpg";
import Dashboard from "../../Assets/Projects/Dashboard.png";
import Data from "../../Assets/Projects/Data.png";
import fraud from "../../Assets/Projects/p2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={jobportal}
              isBlog={false}
              title="JOB PORTAL"
              description="
              This innovative platform is designed to streamline the process of connecting college students with companies that visit their campus for recruitment.
            "
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scb}
              isBlog={false}
              title="SPECIAL CODING BATCH INFO BOARD"
              description="

              A dynamic, interactive hub for coding cohorts to stay updated on announcements, fostering seamless communication and connection among participants and instructors.
              ."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              isBlog={false}
              title="ONLINE PAYMENT FRAUD DETECTION"
              description="
              Detecting fraudulent online payment transactions is to prevent financial losses. The decision tree classifier algorithm can be an  effective tool in identifying fraudulent transactions."
              demoLink="#"              
            />
          </Col>

    

       
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
