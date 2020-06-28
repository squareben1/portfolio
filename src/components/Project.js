import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.scss";

const Project = (props) => {
  return (
    <>
      <div className="projectContainer">
        <h2>{props.title}</h2>
        <div className="coverImageContainer">
          <img src={props.image} className="projectImage" alt="ProjectImage" />
          <div className="coverImageText" dangerouslySetInnerHTML={{__html: props.text}}></div>
          {/* <FaExternalLinkAlt /> */}
          {/* need to think of a way to render icons in the text */}
        </div>
      </div>
    </>
  );
};

export default Project;
