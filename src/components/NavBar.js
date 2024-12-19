import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // Initial state is "home"
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value); // Update the active link state
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) { // 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Add scroll event listener when the component is mounted (added to DOM tree)
    // target.addEventListener(event, listener, options);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  },[]); // Empty dependency array ensures this effect runs once after the component is mounted

  return (
    <BootstrapNavbar expand="lg" bg="light" variant="light" className={scrolled ? "scrolled": ""}>
     <Container>

      <BootstrapNavbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </BootstrapNavbar.Brand>

       {/* Navbar Toggle for responsiveness (collapsible menu on smaller screens) */}
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </BootstrapNavbar.Toggle>

      {/* Navbar Collapsible content */}
      <BootstrapNavbar.Collapse id="basic-navbar-nav"> 

        {/* Left-aligned links */}
        <Nav className="me-auto">
          <Nav.Link 
            href="#home"
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}
          >Home</Nav.Link>
          <Nav.Link 
            href="#projects"
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('projects')}
          >Projects</Nav.Link> 
          <Nav.Link 
          href="#about"
          className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
          onClick={() => onUpdateActiveLink('about')}
          >About</Nav.Link>
        </Nav>

        {/* Right-aligned section */}
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#linkedin">
                <img
                  src={navIcon1}
                  alt="LinkedIn"
                />
            </a>
            <a href="#behance">
                <img
                  src={navIcon1}
                  alt="Behance"
                />
            </a>
            <a href="#email">
                <img
                  src={navIcon1}
                  alt="Email"
                />
            </a>   
          </div>
          <button className="vvd" onClick={() => console.log('connect')}>
            <span>Let's Connect</span>
          </button>
        </span>
      </BootstrapNavbar.Collapse>

     </Container>
    </BootstrapNavbar>
  );
};