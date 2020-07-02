import React from "react";
import "../styles/navBar.scss";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <section className="navbar">
          <div className="navButton">
            <Link
              to="homeSection"
              spy={true}
              smooth={true}
              delay={200}
              duration={1000}
              className="navLink"
              activeClass="activeClass"
            >
              Home
            </Link>
          </div>
          <div className="navButton">
            <Link
              to="aboutSection"
              spy={true}
              smooth={true}
              delay={200}
              duration={1000}
              className="navLink"
              activeClass="activeClass"
            >
              About
            </Link>
          </div>
          <div className="navButton">
            <Link
              to="projectsNavSection"
              spy={true}
              smooth={true}
              delay={200}
              duration={1000}
              className="navLink"
              activeClass="activeClass"
            >
              Projects
            </Link>
          </div>
          <div className="navButton">
            <Link
              to="contactSection"
              spy={true}
              smooth={true}
              delay={200}
              duration={1000}
              className="navLink"
              activeClass="activeClass"
            >
              Contact
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export default NavBar;
