


import React from 'react';
import Tilt from "react-parallax-tilt";
import { BsWatch } from "react-icons/bs";
import ph from "../../Assets/team/samy-team.jpg";
import az from "../../Assets/team/azzi-team.jpg";
import sa from "../../Assets/shema.png";
import { Row, Col } from "react-bootstrap";

const Feature = ({data}) => {
  return (
    <Row className="section-images team">
    <Col lg={7} >
    <h1 className='titles' style={{ fontSize: "2.6em" }}>
       Team
      </h1>
      <p className="home-about-body">
      Welcome to SastaSmart, where futur meets traditions ! We’re a dynamic group of creative thinkers, 
      developers, and strategists dedicated to providing smart, sustainable solutions that make everyday life easier 
      and more efficient. Our team combines expertise in technology, design, and business. We believe in the power of simplicity 
      and are committed to delivering excellence in everything we do. 
      Get to know us and discover how we're making the world smarter, one solution at a time!
      </p>
      <Tilt>
          <img
            src={sa}
            className="img-fluid"
            alt="avatar"
            style={{ height: "500px",marginTop:"50%"}}
            
          />
        </Tilt> 
</Col>
 
<Col lg={5} className='members' >

 <div class="cardteam">
    <img src={ph} alt="John Doe" className='team-img' />
    <h4>SAMY</h4>
    <p>CEO</p>
</div>
<div class="cardteam">
    <img src={az} alt="John Doe" className='team-img' />
    <h4>AZZI</h4>
    <p>CEO</p>
</div>
<div class="cardteam">
    <img src={ph} alt="John Doe" className='team-img' />
    <h4>SAMY</h4>
    <p>CEO</p>
</div>
<div class="cardteam">
    <img src={az} alt="John Doe" className='team-img' />
    <h4>AZZI</h4>
    <p>CEO</p>
</div>



 

</Col>
  
</Row>
   
  );
};

export default Feature;



