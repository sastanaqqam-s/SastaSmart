import {React } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Sec from "../utils/Section";


/*import Cards from "./CardsCollection";*/
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

import vid from "../../Assets/watch1.mp4";


const why=[
    {
      "order": 1,
      
      "paragraph": "choose us for our innovative integration of GPS and health tracking technologies in watch bands, enhancing both functionality and market appeal. Our approach not only sets your product apart but offers also : ",
      "image": "fe.jpg",
      "title":"Why Choose SastanaSmart?"
    }];

    const sensor=[
      {
        "order": 0,
        
        "paragraph": "Energy is supplied by our efficient Battery , designed to optimize longevity and minimize charging cycles, ensuring user satisfaction.For user interaction, the Heart Rate Module PCBA is a critical component, providing real-time health monitoring.For the core electronic assembly, our Bluetooth SoC will be the central hub for processing and connectivity, along with the Boost Converter Chip and Overvoltage Protection Chip to ensure device safety and efficiency",
        "image": "pdetails.png",
        "title":"SastaSmart Sensor in details"
      }];

function Home2() {
  


  return (
    <Container fluid className="home-about-section" id="about" style={{padding:"0"}}>
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

<Features title={"Features"} paragraph={" Explore our collection and discover the features"} />  
{why.map((section, index) => (
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
<div className="sensor">
{sensor.map((section, index) => (
        <Sec 
          key={index}
          order={section.order} 
          paragraph={section.paragraph} 
          image={require(`../../Assets/${section.image}`)}
          title={section.title}
          
        />
      ))}
</div>


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
      <div className="video-container">
      <video className="fullscreen-video" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </Container>
  );
}
export default Home2;
