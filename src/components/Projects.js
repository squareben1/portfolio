import React from "react";
import Project from "./Project";
import projectData from "../data/projectData";

import "../styles/projects.scss";

import DinoRun from "../assets/dinorun_win.png";

class Projects extends React.Component {
  state = {
    // title: "DinoRun",
    // image: DinoRun,
    // externalLink: "https://technodactyl-studios-dinorun.herokuapp.com/",
    // gitHubLink: "https://github.com/squareben1/technodactyl-studios-dinorun",
    // text:
    //   "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptate obcaecati nesciunt porro laudantium, autem expedita cum fugit cupiditate itaque debitis sint, tenetur accusamus, omnis! </p> <p>Est, dolorum, inventore? Soluta illo necessitatibus facilis omnis nam ipsam, laudantium voluptas veniam ipsa. Ea debitis, explicabo! Fugit repudiandae ex unde assumenda, numquam aliquam architecto?</p>",
    projects: projectData,
  };

  render() {
    return (
      <>
        <section className="projectsNavSection"></section>
        <h1>Projects</h1>

        <section className="projectsSection">
          {this.state.projects.map((project) => {
            return (
              <Project
                title={project.title}
                image={project.image}
                text={project.text}
                gitHubLink={project.gitHubLink}
                externalLink={project.externalLink}
              />
            );
          })}
        </section>
      </>
    );
  }
}

export default Projects;
