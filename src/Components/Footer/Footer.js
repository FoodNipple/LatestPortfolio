import React from "react";
import { animateScroll as scrollSpy, scroller } from "react-scroll";

const Footer = () => {
  const scrollToHome = () => {
    scroller.scrollTo("Home", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToSkill = () => {
    scroller.scrollTo("Skill", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("Projects", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToAbout = () => {
    scroller.scrollTo("About", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="footer">
      <div className="footer_contect">
        <div className="footer_about">
          <h3>Aleksandar Conic</h3>
          <h4>Frontend Developer</h4>
          <button>Contact Me</button>
        </div>
        <div className="footer_contact">
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>GitHub</a>
            </li>
          </ul>
        </div>
        <div className="footer_sections">
          <h4>EXPLORE</h4>
          <ul>
            <li onClick={() => scrollToHome()}>Home</li>
            <li onClick={() => scrollToSkill()}>Skills</li>
            <li onClick={() => scrollToProjects()}>Projects</li>
            <li onClick={() => scrollToAbout()}>About Me</li>
          </ul>
        </div>
        <div className="footer_links">
          <h4>USEFUL LINKS</h4>
          <button>
            <a href="PDF/Aleksandar Conic CV.pdf">Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
