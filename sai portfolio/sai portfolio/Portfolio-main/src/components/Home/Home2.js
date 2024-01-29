import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Enthralled by the world of programming, where each line unlocks new possibilities. Still finding my footing, but the journey is as thrilling as the destination. 💡💻"
              <br />
              <br />I love coding in Python
              <i>
                <b className="purple"> and Mern stack as well </b>
              </i>
              <br />
              <br />
              I was very much interested in building new &nbsp;
              <i>
                <b className="purple"> Web Technologies and applications </b>
                 in areas related to{" "}
                <b className="purple">
                  Machine Learning and Data science.
                </b>
              </i>
              <br />
              <br />
              "I turn concepts into reality using <b className="purple">Node.js</b> 
              and the contemporary landscape of <i><b className="purple">JavaScript Libraries and Frameworks</b></i>,
               including the dynamic duo of <i><b className="purple">React.js and Next.js</b></i>."
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MIRIYALASAILAKSHMI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sai-lakshmi-miriyala-70266b216/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/profile/lakshmisailaksh1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon icon={faHackerrank} />
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
