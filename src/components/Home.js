import React from "react";
import profilePic from "../assets/profile_pic.png";

class Home extends React.Component {
  render() {
    return (
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <section className="homeSection">
          <div className="homeTextContainer">
            Hi, I'm Ben.
            <br></br>
            I'm a Full Stack Software Developer.
          </div>
          <div className="profilePic">
            <img src={profilePic} alt="profilePic" />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
