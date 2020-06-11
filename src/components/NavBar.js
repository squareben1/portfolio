import React from "react";
import "../styles/navBar.scss";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <body>
          <nav class="navbar">
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
              </li>
              <li>
                <Link
                to="episodes"
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
                to="episodes"
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
              <li></li>
            </ul>
          </nav>
        </body>
      </>
    );
  }
}

export default NavBar;
