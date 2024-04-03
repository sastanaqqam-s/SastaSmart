import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/app.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
 
 
} from "react-icons/ai";

import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Hirsch Straps By WatchObsession
            </h1>
            <p className="home-about-body">
             
             
              <br />The Cutting-Edge SastanaSmart Sensor
Discover the heart of innovation with the 
SastanaSmart sensor. Engineered for 
precision and reliability, this cutting-edge 
technology captures essential data to enhance 
your daily life.
<br />
<br /> With its advanced capabilities, 
the SastanaSmart <i>
                <b className="purple">sensor</b>
              </i> is designed to 
seamlessly integrate into your lifestyle, 
providing insights and functionalities that 
propel you towards  a smarter, more 
connected future
<br /><br />
Enjoy the precision of cutting-edge 
GPS technology with the Sastasmart 
sensor, ensuring unparalleled 
navigation and security for every 
user
              <i>
                <b className="purple"> C++, Javascript and Solidity. </b>
              </i>
             
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
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
