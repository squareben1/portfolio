import React from "react";
import "../styles/contact.scss";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

class Contact extends React.Component {
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  render() {
    return (
      <>
        <section className="contactSection" id="contact">
          <h2>Contact</h2>
          <div className="contactContainer">
            <div className="contactList">
              <div className="contactText">
                <FaEnvelope className="contactIcon" />
                bengittins@live.com
              </div>
              <div className="contactText">
                <FaGithub
                  className="contactIcon"
                  onClick={() =>
                    this.handleLinkClick("https://github.com/squareben1")
                  }
                />
                github.com/squareben1
              </div>
              <div className="contactText">
                <FaLinkedin
                  className="contactIcon"
                  onClick={() =>
                    this.handleLinkClick(
                      "https://www.linkedin.com/in/bengittins/"
                    )
                  }
                />
                linkedin.com/in/bengittins
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
