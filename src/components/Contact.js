import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import FlashMessage from "react-flash-message";
import "../styles/contact.scss";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: null,
      name: "",
      email: "",
      message: "",
    };
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var details = {
      name: this.state.name,
      fromEmail: this.state.email,
      message: this.state.message,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch("https://whh0eei4ih.execute-api.eu-west-2.amazonaws.com/Prod/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    }).then((response) => {
      if (response.ok) {
        this.setState({ formStatus: true });
        this.resetForm();
      } else {
        this.setState({ formStatus: false });
      }
    });
  };
  handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  
  render() {
    let confirmed = null;
    if (this.state.formStatus === true) {
      confirmed = (
        <div className="emailConfirmation">
          <FlashMessage duration={5000} persistOnHover={true}>
            <p>Thanks for your message, I'll be in touch soon.</p>
          </FlashMessage>
        </div>
      );
    } else if (this.state.formStatus === false) {
      confirmed = (
        <div className="emailConfirmation">
          <FlashMessage duration={5000} persistOnHover={true}>
            <p>Message failed to send. Please try again.</p>
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
                      "https://drive.google.com/file/d/1rWryuzv9e04eVsYavzvW2i0Z-2JjtKfH/view?usp=sharing"
                    )
                  }
                  title="Google Doc CV"
                />
                <a
                  href="https://drive.google.com/file/d/1rWryuzv9e04eVsYavzvW2i0Z-2JjtKfH/view?usp=sharing"
                  title="Google Doc CV"
                >
                  CV
                </a>
              </div>
            </div>
            <form
              id="contactForm"
              onSubmit={this.handleSubmit.bind(this)}
              method="post"
            >
              <input
                className="formInput"
                type="text"
                id="name"
                name="name"
                autoCorrect="off"
                placeholder="Your Name..."
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
              <input
                className="formInput"
                type="email"
                name="fromEmail"
                id="email"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder="Your Email..."
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
              <textarea
                className="formInput"
                name="message"
                id="message"
                placeholder="Message..."
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
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
