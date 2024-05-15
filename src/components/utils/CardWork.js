import React from 'react';

import { Row, Col } from "react-bootstrap";
import des from "../../Assets/step1.png";
const CardWork = ({data}) => {
  return (
   
    <Row className="card-work" id="crd">
    <Col sm={7} md={8} className={data.order === 0 ? "order-md-1 cont" : "order-md-2 cont"} > 
      <h1 className='titles' style={{ fontSize: "1.8em",position:"relative" }}>
        {data.title}

   
      </h1>
    
      <p  style={{textAlign:"start"}}>
       {data.description}
      </p>
    </Col>
    <Col sm={5} md={4} className={data.order === 0 ? "order-md-2 d-flex align-items-center" : "order-md-1 d-flex align-items-center"}>
    
        <img 
  
          src={require(`../../Assets/${data.image}`)}
          className="img-fluid"
          alt="avatar"
         
          
        />
      
    </Col>
  </Row>
   
  );
};

export default CardWork;