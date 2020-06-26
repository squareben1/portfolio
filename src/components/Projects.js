import React from "react";
import DinoRun from "../assets/dinorun_win.png";
import "../styles/projects.scss";

class Projects extends React.Component {
  render() {
    return (
      <>
        <section className="projectsNavSection"></section>
        <h1>Projects</h1>

        <section className="projectsSection">
          <div className="projectContainer">
            <h2>DINO RUN</h2>
            <div className="coverImageContainer">
              <img src={DinoRun} className="projectImage" alt="Dino Run" />
              <div className="coverImageText">Dino Run</div>
            </div>
          </div>

          <div className="projectContainer">
            <h2>DINO RUN</h2>
            <div className="coverImageContainer">
              <img src={DinoRun} className="projectImage" alt="Dino Run" />
              <div className="coverImageText">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus voluptate obcaecati nesciunt porro laudantium, autem
                  expedita cum fugit cupiditate itaque debitis sint, tenetur
                  accusamus, omnis!
                </p>
                <p>
                  Est, dolorum, inventore? Soluta illo necessitatibus facilis
                  omnis nam ipsam, laudantium voluptas veniam ipsa. Ea debitis,
                  explicabo! Fugit repudiandae ex unde assumenda, numquam
                  aliquam architecto?
                </p>
              </div>
            </div>
          </div>

          <div className="projectContainer">
            <h2>DINO RUN</h2>
            <div className="coverImageContainer">
              <img src={DinoRun} className="projectImage" alt="Dino Run" />
              <div className="coverImageText">Dino Run</div>
            </div>
          </div>

          <div className="projectContainer">
            <h2>DINO RUN</h2>
            <div className="coverImageContainer">
              <img src={DinoRun} className="projectImage" alt="Dino Run" />
              <div className="coverImageText">Dino Run</div>
            </div>
          </div>

          <div className="projectContainer">
            <h2>DINO RUN</h2>
            <div className="coverImageContainer">
              <img src={DinoRun} className="projectImage" alt="Dino Run" />
              <div className="coverImageText">Dino Run</div>
            </div>
          </div>

          <div className="projectContainer">
            <h2>DINO RUN</h2>
            <div className="coverImageContainer">
              <img src={DinoRun} className="projectImage" alt="Dino Run" />
              <div className="coverImageText">Dino Run</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
