import {React } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Sec from "../utils/Section";


import Cards from "./CardsCollection";
import {
    AiFillGithub,
 
 
} from "react-icons/ai";

import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import content from '../../Data/content.json';

import Features from "./Features";

import FAQ from "../FAQ/Faq";
import Partner from "./Partner";
import Aboutus from "./About";
import Acc from "./CardsCollection";

import Gal from "./Gallery";

import Why from "./Why";

import Team from "../utils/Member";

import Contact from "../Contact/Contact"; 


function Home2() {
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

      <Aboutus />

      {content.map((section, index) => (
        <Sec 
          key={index}
          order={section.order} 
          paragraph={section.paragraph} 
          image={require(`../../Assets/${section.image}`)}
          title={section.title}
          
        />
      ))}
<Why />      

<Gal />

<Features title={"Features"} paragraph={" Explore our collection and discover the features"} />

<Cards />
<Partner />
<Team />




<FAQ />

<Contact />
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
              <span className="purple">Feel free to connect </span>with us
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
