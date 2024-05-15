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
import Works from "./Works";
import FAQ from "../FAQ/Faq";
import Partner from "./Partner";
import Aboutus from "./About";


import Gal from "./Gallery";

import Why from "./Why";

import Team from "../utils/Member";

import Contact from "../Contact/Contact"; 


import im from "../../Assets/watch.gif";
import Steps from "./Steps";

import Phone from "./Phone";

const why=[
    {
      "order": 1,
      
      "paragraph": "choose us for our innovative integration of GPS and health tracking technologies in watch bands, enhancing both functionality and market appeal. Our approach not only sets your product apart but offers also : ",
      "image": "piece2.png",
      "title":"WHY SASTASMART?"
    }];

    const sensor=[
      {
        "order": 0,
        
        "paragraph": "Energy is supplied by our efficient Battery , designed to optimize longevity and minimize charging cycles, ensuring user satisfaction.For user interaction, the Heart Rate Module PCBA is a critical component, providing real-time health monitoring.For the core electronic assembly, our Bluetooth SoC will be the central hub for processing and connectivity, along with the Boost Converter Chip and Overvoltage Protection Chip to ensure device safety and efficiency",
        "image": "pdetails.png",
        "title":"SastaSmart Sensor in details"
      }];


      const phone=[{
           "order":1,
           "paragraph":"Energy is supplied by our efficient Battery , designed to optimize longevity and minimize charging cycles, ensuring use",
           "image":"screen.png",
           "title":"SASTASMART Application"

      }];

function Home2() {
  


  return (
    <Container fluid className="home-about-section" id="about" >
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
      <Steps /> 

<Features title={"FEATURES"} paragraph={" Explore our collection and discover the features"} />  
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



<Works />
<Phone />
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




        <Row style={{display:"none"}}>
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
      <Row style={{width:"100%"}}>
          <Col sm={12} md={7} >
          <Contact />   

</Col>
<Col md={5} >
            
<div className="video-container">
      
      <img
            src={im}
            className="img-fluid"
            alt="avatar"
            
            style={{paddingTop:"80px"}}
          />

    </div>
            </Col>
</Row>
    </Container>
  );
}
export default Home2;
