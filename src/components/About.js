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
                Before joining Gigfunding, I worked in finance for five years –
                mostly for big, traditional banks. During this time, I came to
                realise the companies that interested me the most were FinTechs.
                Start-ups like Monzo & Yolt weren’t bogged down by legacy
                software & were free to leverage cutting edge tech to build the
                kind of awesome, personalised features that big banks couldn't
                offer.
              </p>

              <p>
                So, last year, I decided to learn the tools to build things
                myself. I started with online Ruby courses before enrolling at a
                coding Bootcamp. I have been learning & making things ever
                since. My current project is a PERN stack budgeting app that I'm
                building with a friend. The main aim is to teach young people
                how to write a budget in as simple & clear a way as possible.
                When it's finished you'll be able to try it out at{" "}
                <a href="https://bujj.it/" title="bujj.it" className="alink">
                  bujj.it
                </a>
                .
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
