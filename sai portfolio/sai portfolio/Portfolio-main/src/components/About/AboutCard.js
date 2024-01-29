import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello and welcome, I am <span className="purple">Sai Lakshmi Miriyala</span>
            from <span className="purple"> Marlava, India.</span>
            <br />As now I am currently in the final year of my B.Tech program, specializing in AIDS at KIET, Kakinada.
            <br />
            Additionally, I am currently working as an intern at IIIT-RCTS, Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> surfing internet
            </li>
            <li className="about-activity">
              <ImPointRight /> curious to learn new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Lakshmi Miriyala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
