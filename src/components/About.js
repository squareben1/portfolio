import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Skills from "./Skills";
import { Link } from "react-scroll";

class About extends React.Component {
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  render() {
    return (
      <>
        <section className="aboutSection">
          <div className="aboutContainer">
            <Skills />
            <div className="aboutTextContainer">
              <h1 className="aboutTitle">About Me</h1>
              <p>
                I’m a Site Reliability Engineer & Developer from London.
              </p>
              <p>
                I currently live in Los Angeles, CA where I'm taking some time to focus on learning & improving skills in AWS, IaC, networking, server automation, programming & CI/CD.
              </p>
              <p>
                <Link
                  to="contactSection"
                  spy={true}
                  smooth={true}
                  delay={200}
                  duration={1000}
                  className="alink"
                  activeClass="activeClass"
                >
                  Drop me a line
                </Link>{" "}
                to discuss working together or to ask about one of my projects.
              </p>
              <div className="faImages">
                <FaGithub
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick("https://github.com/squareben1")
                  }
                  title="github.com/squareben1"
                />
                <FaLinkedin
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick(
                      "https://www.linkedin.com/in/bengittins/"
                    )
                  }
                  title="linkedin.com/in/bengittins"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
