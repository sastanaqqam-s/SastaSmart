import {React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/app.png";
import Tilt from "react-parallax-tilt";
import Sec from "./Section";

import {
    AiFillGithub,
 
 
} from "react-icons/ai";

import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import content from './content.json';



function Home2() {
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      {content.map((section, index) => (
        <Sec 
          key={index}
          order={section.order} 
          paragraph={section.paragraph} 
          image={require(`../../Assets/${section.image}`)}
          title={section.title}
        />
      ))}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cdsali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ali-braiki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="http://t.me/alibr0202"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                              >
                                  <FaTelegramPlane />
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
