import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/favicon.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsWatch } from "react-icons/bs";


import { CgFileDocument } from "react-icons/cg";
import {  Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container style={{paddingLeft:0}}>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <BsWatch style={{ marginBottom: "2px" }} /> Accessories
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <MdExplore style={{ marginBottom: "2px" }} /> Visit
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />
                About
              </Nav.Link>
            </Nav.Item>

           

            <Nav.Item  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Form inline className="d-flex" style={{top:"0",bottom:"0",margin:"auto",borderBottom:"1px solid white"}} >
                <FormControl
                  type="text"
                  placeholder="Search"
                  
                  className="mr-sm-2"
                  style={{ width: "100%",backgroundColor:"transparent",color:"white",border:0,borderRadius:0,outline:"none" }}
                />
                <Button variant="link" >
          <AiOutlineSearch style={{ color: "white",fontSize:30}} />
        </Button>
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;