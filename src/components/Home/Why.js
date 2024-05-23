/*import React from "react";
import { Col, Row } from "react-bootstrap";
import Cr from "../utils/Card2";
import lists from "../../Data/Why.json";

function Why() {
  return (
    <Row  className="why">
      

      {lists.map((row, index) => (
        <Col key={index} xs={12} md={4} >
          <Cr data={row} />
        </Col>
      ))}
    </Row>
  );
}

export default Why;
*/
import React from "react";

import lists from "../../Data/Why.json";

function Why() {
  return (
    <div className="why2">
  <div className="container">
  

  {lists.map((row, index) => (
         <div className="column">
         <div className="item" data-aos="zoom-in">
           <div className="card-title1">{row.title}</div>
           <div className="card-text1">
            {row.description}
           </div>
         </div>
         
         <div className={row.title2 ? "item" : "hide"} data-aos="zoom-in">
           <div className="card-title1 ">{row.title2}</div>
           <div className="card-text1 ">{row.description2}</div>
         </div>
       </div>
      ))}
      
  





   
  </div>
</div>

  );
}

export default Why;