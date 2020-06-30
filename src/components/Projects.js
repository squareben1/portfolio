import React, { Fragment } from 'react';
import Media from 'react-media';
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
        <div className="projectsIntro">
          <Media
            queries={{
              // small: "(max-width: 599px)",
              medium: "(max-width: 1024px)",
              large: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {/* {matches.small && <p>I am small!</p>} */}
                {matches.medium && <p>Tap projects to find out what I learned from each.</p>}
                {matches.large && <p>Mouse over projects to find out what I learned from each.</p>}
              </Fragment>
            )}
          </Media>
        </div>

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
