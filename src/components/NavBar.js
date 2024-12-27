import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Sun, Moon } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';
import logo from '../assets/img/logo.svg';
import github from '../assets/img/github.svg';
import behance from '../assets/img/behance.svg';
import linkedin from '../assets/img/linkedin.svg';

export const Navbar = ({ theme, onToggleTheme }) => {
  const [activeLink, setActiveLink] = useState("home"); // Initial state is "home"
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value); // Update the active link state
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      onUpdateActiveLink("projects");
    }
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
    <BootstrapNavbar
      expand="lg"
      bg={theme}
      variant={theme}
      className={scrolled ? "scrolled" : ""}
    >
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
            onClick={scrollToProjects}
          >Projects</Nav.Link> 
          <Nav.Link 
          href="#about"
          className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
          onClick={() => onUpdateActiveLink('about')}
          >About</Nav.Link>
        </Nav>

        {/* Right-aligned section */}
        <span className="navbar-text">
          <ThemeToggleButton theme={theme} onToggleTheme={onToggleTheme} />

          <div className="social-icon">
            <a href="https://github.com/Wendyfff0616" target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  alt="Github"
                />
            </a>
            <a href="https://www.behance.net/wenyufan" target="_blank" rel="noopener noreferrer">
                <img
                  src={behance}
                  alt="Behance"
                />
            </a>
            <a href="https://www.linkedin.com/in/wenyu-fan-a831782b5/" target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                />
            </a>   
          </div>
          <button className="vvd" onClick={() => console.log('connect')}>
            <span>Email me</span>
          </button>
        </span>
      </BootstrapNavbar.Collapse>

     </Container>
    </BootstrapNavbar>
  );
};