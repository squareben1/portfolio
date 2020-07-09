import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import FlashMessage from "react-flash-message";
import "../styles/contact.scss";

class Contact extends React.Component {
  state = {
    formSubmitted: null,
  };
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  render() {
    let confirmed = null;

    if (this.state.formSubmitted != null) {
      confirmed = (
        <div className="emailConfirmation">
          <FlashMessage duration={5000} persistOnHover={true}>
            <p>Thanks for your message, I'll be in touch soon.</p>
          </FlashMessage>
        </div>
      );
    }

    return (
      <>
        <section className="contactSection" id="contact">
          <h1 className="title">Contact</h1>
          <div className="contactContainer">
            <div className="contactHolder">
              <div className="contactText">
                <FaEnvelope
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick("mailto:bengittins@live.com")
                  }
                  title="mailto:bengittins@live.com"
                />
                <a
                  href="mailto:bengittins@live.com"
                  title="mailto:bengittins@live.com"
                >
                  bengittins@live.com
                </a>
              </div>
              <div className="contactText">
                <FaGithub
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick("https://github.com/squareben1")
                  }
                  title="github.com/squareben1"
                />
                <a
                  href="https://github.com/squareben1"
                  title="github.com/squareben1"
                >
                  github.com/squareben1
                </a>
              </div>
              <div className="contactText">
                <FaLinkedin
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick(
                      "https://www.linkedin.com/in/bengittins/"
                    )
                  }
                  title="linkedin.com/in/bengittins"
                />
                <a
                  href="https://www.linkedin.com/in/bengittins/"
                  title="linkedin.com/in/bengittins"
                >
                  linkedin.com/in/bengittins
                </a>
              </div>
              <div className="contactText">
                <FaFilePdf
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick(
                      "https://drive.google.com/file/d/1h010ljR0CRS3Zl0007Bu-HoCMKUKbN3J/view?usp=sharing"
                    )
                  }
                  title="Google Doc CV"
                />
                <a
                  href="https://drive.google.com/file/d/1h010ljR0CRS3Zl0007Bu-HoCMKUKbN3J/view?usp=sharing"
                  title="Google Doc CV"
                >
                  CV
                </a>
              </div>
            </div>
            <form
              id="contactForm"
              action="https://whh0eei4ih.execute-api.eu-west-2.amazonaws.com/Prod/send"
              onSubmit={() =>
                this.setState({
                  formSubmitted: true,
                })
              }
              method="post"
            >
              <input
                className="formInput"
                type="text"
                id="name"
                name="name"
                autoCorrect="off"
                placeholder="Your Name..."
              />
              <input
                className="formInput"
                type="email"
                name="fromEmail"
                id="email"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Your Email..."
              />
              <textarea
                className="formInput"
                name="message"
                id="message"
                placeholder="Message..."
              ></textarea>
              <br></br>
              <input
                className="submitForm"
                type="reset"
                value="Clear your message"
              />
              <input className="submitForm" type="submit" value="Send" />
            </form>
          </div>
          {confirmed}
        </section>
      </>
    );
  }
}

export default Contact;
