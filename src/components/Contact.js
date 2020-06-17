import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/contact.scss";

class Contact extends React.Component {
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  render() {
    return (
      <>
        <section className="contactSection" id="contact">
          <div className="contactContainer">
            <div className="contactText">
              <h2>Contact</h2>
              You can reach me at bengittins@live.com or at the links below:
              <br></br>
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
