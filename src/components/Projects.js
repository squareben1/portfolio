import React from "react";
import Project from "./Project";
import projectData from "../data/projectData";

import "../styles/projects.scss";

class Projects extends React.Component {
  state = {
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
