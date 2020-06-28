import React from "react";
import Podcast from "../assets/upandcoming_guests.png";
import DinoRun from "../assets/dinorun_win.png";
import CatBook from "../assets/catbook.png";
import Project from "./Project";
import "../styles/projects.scss";

import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

class Projects extends React.Component {
  state = {
    title: "DinoRun",
    image: DinoRun,
    text:
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptate obcaecati nesciunt porro laudantium, autem expedita cum fugit cupiditate itaque debitis sint, tenetur accusamus, omnis! </p> <p>Est, dolorum, inventore? Soluta illo necessitatibus facilis omnis nam ipsam, laudantium voluptas veniam ipsa. Ea debitis, explicabo! Fugit repudiandae ex unde assumenda, numquam aliquam architecto?</p>",
    projects: [
      {
        title: "DinoRun",
        image: DinoRun,
        text:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptate obcaecati nesciunt porro laudantium, autem expedita cum fugit cupiditate itaque debitis sint, tenetur accusamus, omnis! </p> <p>Est, dolorum, inventore? Soluta illo necessitatibus facilis omnis nam ipsam, laudantium voluptas veniam ipsa. Ea debitis, explicabo! Fugit repudiandae ex unde assumenda, numquam aliquam architecto?</p>",
      },
      {
        title: "CatBook",
        image: CatBook,
        text:
          "<p>Lorem catsum dolor sit amet, consectetur adipisicing elit. Possimus voluptate obcaecati nesciunt porro laudantium, autem expedita cum fugit cupiditate itaque debitis sint, tenetur accusamus, omnis! </p> <p>Est, dolorum, inventore? Soluta illo necessitatibus facilis omnis nam ipsam, laudantium voluptas veniam ipsa. Ea debitis, explicabo! Fugit repudiandae ex unde assumenda, numquam aliquam architecto?</p>",
      },
    ],
  };

  render() {
    return (
      <>
        <section className="projectsNavSection"></section>
        <h1>Projects</h1>

        <section className="projectsSection">
          {/* need to procedurally generate the projects from data/projects.js */}
          <Project
            title={this.state.title}
            image={this.state.image}
            text={this.state.text}
          />
          <Project
            title={this.state.title}
            image={this.state.image}
            text={this.state.text}
          />
          <Project
            title={this.state.title}
            image={this.state.image}
            text={this.state.text}
          />
          <Project
            title={this.state.title}
            image={this.state.image}
            text={this.state.text}
          />
          <Project
            title={this.state.title}
            image={this.state.image}
            text={this.state.text}
          />
          <Project
            title={this.state.title}
            image={this.state.image}
            text={this.state.text}
          />
        </section>
      </>
    );
  }
}

export default Projects;
