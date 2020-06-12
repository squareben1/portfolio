import React from "react";
import DinoRun from "../assets/dinorun_win.png";
import "../styles/projects.scss";

class Projects extends React.Component {
  render() {
    return (
      <>
      
      <section className="projectsNavSection"></section>
      <section className="projectsSection">
        <div class="projContainer">
          <div className="projectContainer">
            <h1>DINO RUN</h1>
            <img src={DinoRun} className="projectImage" alt="Dino Run" />
            <div class="middle">
              <div class="text">Dino Run</div>
            </div>
          </div>
          <div className="projectContainer">
            <h1>DINO RUN</h1>
            <img src={DinoRun} className="projectImage" alt="Dino Run" />
            <div class="middle">
              <div class="text">
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
            <h1>DINO RUN</h1>
            <img src={DinoRun} className="projectImage" alt="Dino Run" />
            <div class="middle">
              <div class="text">Dino Run</div>
            </div>
          </div>
          <div className="projectContainer">
            <h1>DINO RUN</h1>
            <img src={DinoRun} className="projectImage" alt="Dino Run" />
            <div class="middle">
              <div class="text">Dino Run</div>
            </div>
          </div>
          <div className="projectContainer">
            <h1>DINO RUN</h1>
            <img src={DinoRun} className="projectImage" alt="Dino Run" />
            <div class="middle">
              <div class="text">Dino Run</div>
            </div>
          </div>
          <div className="projectContainer">
            <h1>DINO RUN</h1>
            <img src={DinoRun} className="projectImage" alt="Dino Run" />
            <div class="middle">
              <div class="text">Dino Run</div>
            </div>
          </div>
        </div>
        </section>
      </>
    );
  }
}

export default Projects;
