
import React from "react";
import { Col, Row } from "react-bootstrap";
import p1 from "../../Assets/old1.png";
import p2 from "../../Assets/old2.png";
import p3 from "../../Assets/old3.png";
import { CiStar } from "react-icons/ci";
export default function Steps() {
    return (
      <Row className="steps">
      
      
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p1}
            className="img-fluid"
            alt="avatar"
            style={{maxHeight:"200px"}}
           
          />
            <h5 >
        CLASSIC WATCH
        </h5>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p2}
            className="img-fluid"
            alt="avatar"
            
            style={{maxHeight:"200px"}}
          />
        
           <h5  >SASTASMART</h5>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p3}
            className="img-fluid"
            alt="avatar"
            
            style={{maxHeight:"200px"}}
          />
           <h5  >UPGRADED</h5>
      </Col>
    
    
     
    
      
    </Row>
    )
  }
  