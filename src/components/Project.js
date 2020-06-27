import React from "react";
import "../styles/projects.scss";

const Project = (props) => {
  return (
    <>
      <div className="projectContainer">
        <h2>{props.title}</h2>
        <div className="coverImageContainer">
          <img src={props.image} className="projectImage" alt="ProjectImage" />
          <div className="coverImageText" dangerouslySetInnerHTML={{__html: props.text}}></div>
          {/* <div className="coverImageText">{props.text}</div> */}
        </div>
      </div>
    </>
  );
};

export default Project;
