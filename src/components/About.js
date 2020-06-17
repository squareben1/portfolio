import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Skills from "./Skills";

class About extends React.Component {
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  render() {
    return (
      <>
        <section className="aboutNavSection"></section>
        <section className="aboutSection">
          <div className="aboutContainer">
            <Skills />
            <div className="aboutTextContainer">
              <h2>Full Stack Developer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus voluptate obcaecati nesciunt porro laudantium, autem
                expedita cum fugit cupiditate itaque debitis sint, tenetur
                accusamus, omnis!
              </p>

              <p>
                Est, dolorum, inventore? Soluta illo necessitatibus facilis
                omnis nam ipsam, laudantium voluptas veniam ipsa. Ea debitis,
                explicabo! Fugit repudiandae ex unde assumenda, numquam aliquam
                architecto?
              </p>

              <p>
                Beatae minima, ipsam nisi rerum commodi. Culpa quod quibusdam,
                odit ut! Reprehenderit officiis sint suscipit, neque, mollitia
                minus? Ab earum cum nam at, quos id!
              </p>
              <div className="faImages">
                {/* ADD MOUSE OVER ANIMATION */}
                <FaGithub
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick("https://github.com/squareben1")
                  }
                />
                <FaLinkedin
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick(
                      "https://www.linkedin.com/in/bengittins/"
                    )
                  }
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
