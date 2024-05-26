import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logodark from "../../Assets/logo3.png";
import logowhite from "../../Assets/logo2.png";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { MdPhonelinkRing } from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

    // Show "Return to Top" button when scrolled down
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollTo = (id) => {
    const Section = document.getElementById(id);
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container style={{ paddingLeft: 0 }}>
          <Navbar.Brand href="/" className="d-flex">
            <img src={navColour ? logowhite : logodark} className="img-fluid logo" alt="brand" />
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
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className={navColour ? "navwhite" : "navblue"}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/sastasmart"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("model");
                    updateExpanded(false);
                  }}
                  className={navColour ? "navwhite" : "navblue"}
                >
                  <BsWatch style={{ marginBottom: "2px" }} /> Model
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className={navColour ? "navwhite" : "navblue"}>
                  <MdPhonelinkRing style={{ marginBottom: "2px" }} /> Application
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="#contactus"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("contactus");
                    updateExpanded(false);
                  }}
                  className={navColour ? "navwhite" : "navblue"}
                >
                  <LuContact style={{ marginBottom: "2px" }} />
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <IoIosArrowUp   style={{fontSize:"32px"}} />
        </button>
      )}
    </>
  );
}

export default NavBar;
