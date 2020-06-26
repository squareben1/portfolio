import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import "../styles/contact.scss";

class Contact extends React.Component {
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  render() {
    return (
      <>
        <section className="contactSection" id="contact">

          <h1>Say Hi <span role="img" aria-label="waveEmoji">👋</span></h1>

          <div className="contactContainer">

            <div className="contactHolder">
              <div className="contactText">
                <FaEnvelope
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick("mailto:bengittins@live.com")
                  }
                />
                 bengittins@live.com
              </div>
              <div className="contactText">
                <FaGithub
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick("https://github.com/squareben1")
                  }
                />
                 github.com/squareben1
              </div>
              <div className="contactText">
                <FaLinkedin
                  className="icon"
                  onClick={() =>
                    this.handleLinkClick(
                      "https://www.linkedin.com/in/bengittins/"
                    )
                  }
                />
                 linkedin.com/in/bengittins
                 </div>
                <div className="contactText">
                  <FaFilePdf
                    className="icon"
                    onClick={() =>
                      this.handleLinkClick(
                        "https://drive.google.com/file/d/1MdtPlNRViuSqdySrFCISeMJ9eceFRDv-/view?usp=sharing"
                      )
                    }
                  />
                  CV
                </div>
              </div>
            <form
              id="contactForm"
              onSubmit="return validate()"
              action="contact.php"
              method="post"
            >
              <input
                className="formInput"
                type="text"
                id="name"
                name="name"
                autoCorrect="off"
                placeholder="Name?"
              />
              <input
                className="formInput"
                type="email"
                name="email"
                id="email"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Email?"
              />
              <textarea
                className="formInput"
                name="message"
                id="message"
                placeholder="Message?"
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
        </section>
      </>
    );
  }
}

export default Contact;
