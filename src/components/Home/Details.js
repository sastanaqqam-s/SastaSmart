
import React from "react";
import { Col, Row } from "react-bootstrap";
import p1 from "../../Assets/kronova.png";
import p2 from "../../Assets/kdeer.png";
import p3 from "../../Assets/reethmiq.png";

export default function Details() {
    return (
      
      <Row className="details"  style={{marginTop:"80px"}}>
        
        <Col md={12} >
      
      <h1 className='titles' style={{ fontSize: "2.0em" }} >
      OUR SMART BUCKLES COLLECTIONS
      </h1>
     
    </Col>
      
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p1}
            className="img-fluid"
            alt="avatar"
            style={{maxHeight:"400px"}}
           
          />
           
           <ul >
             <li><h4 >KRONOVA </h4></li>
                <li>Health monitoring</li>
                <li className="barre">GPS</li>
                <li className="barre">E-SIM</li>
                <li>Buzzer</li>
              </ul>

          
      </Col>
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p2}
            className="img-fluid"
            alt="avatar"
            
            style={{maxHeight:"400px"}}
          />
          
          <ul >
             <li><h4 >KDEER</h4></li>
                <li>Health monitoring</li>
                <li>GPS</li>
                <li>E-SIM</li>
                <li>Buzzer</li>
              </ul>
        
      </Col>
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p3}
            className="img-fluid"
            alt="avatar"
            
            style={{maxHeight:"400px"}}
          />
         
         <ul >
             <li><h4 >REETHMIQ  </h4></li>
                <li>Health monitoring</li>
                <li >GPS</li>
                <li className="barre">E-SIM</li>
                <li>Buzzer</li>
              </ul>
         
      </Col>
    
    
     
    
      
    </Row>
    )
  }
  