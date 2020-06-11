import React from "react";
import profilePic from "../assets/Screenshot 2020-06-11 at 16.54.51.png";
// import

class Home extends React.Component {
  render() {
    return (
      <>
        <a className="anchor" id="top"></a>
        <section className="homeSection">
          <div className="homeTextContainer">
            I'm Ben.
            <br></br>
            Full Stack Software Developer.
          </div>
          <img className="profilePic" src={profilePic} alt="profilePic" />
        </section>

        {/* <head>
          <title>split Screen Text </title>

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div class="row no-gutters">
            <div class="col-md-6 no-gutters">
              <div class="leftside d-flex justify-content-center align-items-center">
                <div className="homeTextContainer">
                  I'm Ben.
                  <br></br>
                  Full Stack Software Developer.
                </div>
              </div>
            </div>

            <div class="col-md-6 no-gutters">
              <div class="rightside d-flex justify-content-center align-items-center">
                <img className="profilePic" src={profilePic} alt="profilePic" />
              </div>
            </div>
          </div>
        </body> */}
      </>
    );
  }
}

export default Home;
