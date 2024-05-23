
import React from "react";
import { Col, Row } from "react-bootstrap";
import p1 from "../../Assets/p1.png";
import p2 from "../../Assets/p2.png";
export default function Example() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px",marginTop:"120px" }}>
      
      <Col xs={12} md={12} style={{padding:"8px"}}>
        <h1 className='titles' style={{ fontSize: "2.1em"}}>
        PARTNERS
        </h1>
        <p className="home-about-body" style={{marginBottom:"50px",textAlign:"center" }}>
        We have forged strategic alliances with pioneers across the globe. Our partners are more than collaborators; they are integral members of our extended family, instrumental in bringing our vision to life. With MFGMORPH and BESTRONICS, we're not just building products; we're crafting the future of elegance in the digital age
        </p>
        </Col>
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p1}
            className="img-fluid"
            alt="avatar"
            
           
          />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
      <img
            src={p2}
            className="img-fluid"
            alt="avatar"
            
           
          />
      </Col>
    
    
     
    
      
    </Row>
    )
  }
  