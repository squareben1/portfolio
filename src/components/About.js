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
                I’m a Developer at Gigfunding.org – an online skill sharing
                marketplace where money paid goes directly to charities.
              </p>

              <p>
                Before joining Gigfunding, I worked in finance for 5 years – mostly
                for big, traditional banks. During this time I came to realise
                the companies that interested me the most were FinTechs.
                Start-ups like Monzo and Yolt weren’t bogged down by legacy
                software and were free to leverage cutting edge tech to build
                the kind of awesome personalised features that big banks
                couldn't offer.
              </p>

              <p>
                So, last year, I decided to learn the tools to build things
                myself. I started learning Ruby online before enrolling at a
                coding bootcamp. I have been learning and building things ever
                since. I'm always looking for projects that will help me learn
                and improve as much as possible.
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
                  Drop me a line{" "}
                </Link>
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
