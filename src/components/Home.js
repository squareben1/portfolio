import React from "react";
import profilePic from "../assets/profile_pic.png";
// import

class Home extends React.Component {
  render() {
    return (
      <>
        <section className="homeSection">
          <div className="homeTextContainer">
            I'm Ben.
            <br></br>
            Full Stack Software Developer.
          </div>
          <img className="profilePic" src={profilePic} alt="profilePic" />
        </section>
      </>
    );
  }
}

export default Home;
