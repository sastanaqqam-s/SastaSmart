import React from "react";
import gray from "../../Assets/1.png";
import Tilt from "react-parallax-tilt";
import gray2 from "../../Assets/2.png";
import gray3 from "../../Assets/3.png";
import gray4 from "../../Assets/4.png";
import piece from "../../Assets/piece1.png";
import sa from "../../Assets/test.png";
import { Row, Col } from "react-bootstrap";

function Gallery() {
  return (

    <Row className="section-images" id="model" >
    <Col md={7} >
      <h1 className='titles' style={{ fontSize: "2.6em" }}>
       Model
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
            style={{ height: "300px",marginTop:"50px" }}
            
          />
        </Tilt> 

    </Col>
    <Col md={5}>
    <section className="gallery">
  <div className="gallery__item">
    <input type="radio" id="img-1" defaultChecked name="gallery" className="gallery__selector" />
    <img className="gallery__img" src={gray} alt="" />
    <label htmlFor="img-1" className="gallery__thumb"><img src={gray}  alt="" /></label>
  </div>
  <div className="gallery__item">
    <input type="radio" id="img-2" name="gallery" className="gallery__selector" />
    <img className="gallery__img" src={gray2}  alt="" />
    <label htmlFor="img-2" className="gallery__thumb"><img src={gray2}  alt="" /></label>
  </div>
  <div className="gallery__item">
    <input type="radio" id="img-3" name="gallery" className="gallery__selector" />
    <img className="gallery__img" src={gray3}   alt="" />
    <label htmlFor="img-3" className="gallery__thumb"><img src={gray3}  alt="" /></label>
  </div>
  <div className="gallery__item">
    <input type="radio" id="img-4" name="gallery" className="gallery__selector" />
    <img className="gallery__img" src={gray4}  alt="" />
    <label htmlFor="img-4" className="gallery__thumb"><img src={gray4}  alt="" /></label>
  </div>
</section>
    </Col>
  </Row>
  

  );
}

export default Gallery;
