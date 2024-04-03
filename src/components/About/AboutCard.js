import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">BRAIKI ALI </span>
            from <span className="purple"> Algeria.</span>
            <br />
            I am currently employed as a software developer at Sastanaqqam.
            <br />
            I have completed Integrated MSc  in Maths and Computing at oran university.
            <br />
            <br />
           
          </p>
      

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is a lot like coding – it's about solving problems, embracing challenges, and continually optimizing for a better outcome"{" "}
          </p>
          <footer className="blockquote-footer">Braiki ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
