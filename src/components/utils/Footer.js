import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/logo2.png";
import {
  AiFillGithub,


} from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane, FaInstagram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid style={{padding:"0"}}>
   <footer id="footer" className="footer_area section_padding_130_0" >
  
    <div className="row">
      {/* Single Widget*/}
      <div className="col-12 col-sm-5 col-lg-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px'}}>
        <img src={logo} alt="Logo" />
      </div>
      {/* Single Widget*/}
      <div className="col-12 col-sm-2 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
            <li><a href="#"><h5 className="widget-title">Go To</h5></a></li>
              <li><a href="#">Pitchdeck</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="/sastanaqqam-wallet">Team</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Single Widget*/}
      <div className="col-12 col-sm-2 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
              <li><a href="privacy"><h5 className="widget-title">About us</h5></a></li>
              <li><a href="terms">Terms &amp; Conditions</a></li>
              <li><a href="kyc">KYC</a></li>
              <li><a href="aml">AML</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-2 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Widget Title*/}
          {/* Footer Menu*/}
          <div className="footer_menu">
            <ul>
              <li><a href="risk">Risk disclosure</a></li>
              <li><a href="cookies">Cookies policy </a></li>
              <li style={{display: 'none'}}><a href="pcp">Prohibited countries policy</a></li>
              <li><a href="GDPR">GDPR</a></li>
              <li><a href="customer">Customer acceptance policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-3 col-lg-2">
        <div className="single-footer-widget section_padding_0_130">
          {/* Footer Logo*/}
         
          {/* Copywrite Text*/}
          {/* Footer Social Area*/}
          <div className="footer_social_area">
          <a href="https://t.me/sastanaqqam" data-toggle="tooltip" data-placement="top" title="instgram" data-original-title="instgram"><FaInstagram   /></a>
            <a href="https://t.me/sastanaqqam" data-toggle="tooltip" data-placement="top" title="linkedin" data-original-title="linkedin"><FaLinkedinIn   /></a>
            <a href="https://t.me/sastanaqqam" data-toggle="tooltip" data-placement="top" title="telegram" data-original-title="telegram"><FaTelegramPlane   /></a>
            

          </div>
        </div>
      </div>
      <div className="col-12 mt-2" style={{textAlign: 'center', position: 'relative', paddingTop: '50px'}}>
        {/* Widget Title*/}
        {/* Footer Menu*/}
        <h5 style={{bottom: 0, left: 0, right: 0, marginBottom: '0px', fontSize: '12px', fontWeight: 200,color:"rgba(255,255,255,0.7)"}}>©copyrights sastanaqqam {year}</h5>
      </div>
    </div>
  
</footer>


    </Container>
  );
}

export default Footer;
