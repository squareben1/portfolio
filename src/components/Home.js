import React from "react";
import profilePic from "../assets/profile_pic.png";

class Home extends React.Component {
  render() {
    return (
      <>
        <section className="homeSection">
          <div className="homeTextContainer">
            Hi, I'm Ben.
            <br></br>
            I'm a Full Stack Software Developer.
          </div>
          <img className="profilePic" src={profilePic} alt="profilePic" />
        </section>
      </>
    );
  }
}

export default Home;
