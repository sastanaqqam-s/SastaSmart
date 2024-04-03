import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,


} from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by BRAIKI ALI</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/cdsali"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="www.linkedin.com/in/ali-braiki"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
                      </li>

                      
                      <li className="social-icons">
                          <a
                              href="http://t.me/alibr0202"
                              style={{ color: "white" }}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <FaTelegramPlane />
                          </a>
                      </li>

            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
