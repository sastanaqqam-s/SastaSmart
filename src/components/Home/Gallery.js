import React from "react";
import { Row, Col } from "react-bootstrap";
 import Dec from "./HomeImage3D";
import gray from "../../Assets/11.png";
import gray2 from "../../Assets/2.png";
import gray3 from "../../Assets/3.png";
import gray4 from "../../Assets/4.png";
import b2 from "../../Assets/b2.png";
import b3 from "../../Assets/b3.png";

function Gallery() {
  return (
    <Row className="section-images" id="model">
      <Col md={7}>
        <h1 className='titles' style={{ fontSize: "2.6em" }}>
          MODEL
        </h1>
        <p className="home-about-body">
        Elevate your traditional watch by attaching our Smart Buckle, designed to seamlessly blend with any standard watch band. This advanced accessory upgrades your classic watch with modern smart features, while preserving its timeless elegance and comfort.
Constructed from high-quality materials, the Smart Buckle is built to endure daily wear and tear, ensuring that both style and connectivity are enhanced. Upgrade your timepiece with this innovative accessory and remain stylishly connected.
        </p>
        <div className="d3">
          <Dec />
        </div>
      </Col>
      <Col md={5}>
      <section className="gallery">
        <Row>
        
          <Col style={{display:"flex"}}>
            
              <div className="gallery__item">
                <input type="radio" id="img-1" defaultChecked name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={gray} alt="" />
                <label htmlFor="img-1" className="gallery__thumb"><img src={gray} alt="" /></label>
              </div>
              <div className="gallery__item">
                <input type="radio" id="img-2" name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={gray2} alt="" />
                <label htmlFor="img-2" className="gallery__thumb"><img src={gray2} alt="" /></label>
              </div>
              <div className="gallery__item">
                <input type="radio" id="img-3" name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={gray3} alt="" />
                <label htmlFor="img-3" className="gallery__thumb"><img src={gray3} alt="" /></label>
              </div>
              <div className="gallery__item">
                <input type="radio" id="img-4" name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={gray4} alt="" />
                <label htmlFor="img-4" className="gallery__thumb"><img src={gray4} alt="" /></label>
              </div>
          
          </Col>
        </Row>
        <Row>
          <Col style={{display:"flex"}}>
            
              <div className="gallery__item">
                <input type="radio" id="img-5" name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={b2} alt="" />
                <label htmlFor="img-5" className="gallery__thumb"><img src={b2} alt="" /></label>
              </div>
              <div className="gallery__item">
                <input type="radio" id="img-6" name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={b3} alt="" />
                <label htmlFor="img-6" className="gallery__thumb"><img src={b3} alt="" /></label>
              </div>
              <div className="gallery__item">
                <input type="radio" id="img-7" name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={b2} alt="" />
                <label htmlFor="img-7" className="gallery__thumb"><img src={b2} alt="" /></label>
              </div>
              <div className="gallery__item">
                <input type="radio" id="img-8" name="gallery" className="gallery__selector" />
                <img className="gallery__img" src={b3} alt="" />
                <label htmlFor="img-8" className="gallery__thumb"><img src={b3} alt="" /></label>
              </div>
              
            
          </Col>
         
        </Row>
        </section>
      </Col>

    </Row>
  );
}

export default Gallery;
