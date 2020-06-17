import React from "react";
import "../styles/navBar.scss";
import { Link } from "react-scroll";
import { FaFilePdf } from "react-icons/fa";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <section className="navbar">
          <ul>
            <li>
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
            </li>
            <li>
              <Link
                to="aboutNavSection"
                spy={true}
                smooth={true}
                delay={200}
                duration={1000}
                className="navLink"
                activeClass="activeClass"
              >
                About
              </Link>
            </li>
            <li>
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
            </li>
            <li>
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
            </li>

          </ul>
        </section>
      </>
    );
  }
}

export default NavBar;

{
  /* <FaFilePdf className="cvIcon" /> */
}
