import React from "react";
import DinoRun from "../assets/dinorun_win.png";
import "../styles/projects.scss";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div className="projectContainer">
            <h1>DINO RUN</h1>
            <img src={DinoRun} className="projectImage" alt="Dino Run" />
            <div class="middle">
              <div class="text">Dino Run</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
