


import React from 'react';
import Tilt from "react-parallax-tilt";
import { BsWatch } from "react-icons/bs";
import ph from "../../Assets/samy-team.jpg";
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
      The Onyx SuperKnit Bracelet
Experience unparalleled comfort and durability with 
the Onyx SuperKnit bracelet. This ultra-durable, 
ultra-comfortable accessory is more than just a band.
<br />
Crafted from premium materials, the Onyx SuperKnit 
bracelet is designed to withstand the rigors of daily life 
while keeping style and comfort at the forefront. Its 
elegant design and superior build quality make it the 
perfect companion for the Sastana sensor, ensuring 
you stay connected in style.
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
    <h2>John Doe</h2>
    <p>CEO</p>
</div>
<div class="cardteam">
    <img src={ph} alt="John Doe" className='team-img' />
    <h2>John Doe</h2>
    <p>CEO</p>
</div>
<div class="cardteam">
    <img src={ph} alt="John Doe" className='team-img' />
    <h2>John Doe</h2>
    <p>CEO</p>
</div>
<div class="cardteam">
    <img src={ph} alt="John Doe" className='team-img' />
    <h2>John Doe</h2>
    <p>CEO</p>
</div>



 

</Col>
  
</Row>
   
  );
};

export default Feature;



