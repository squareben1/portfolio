import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.scss";

const Project = (props) => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="projectContainer">
        <div className="projectHeader">
          <h2>
            <div className="projectTitle">{props.title} </div>
          </h2>
          <div className="projectLinks">
            {/* <h2> */}
            <FaGithub
              className="projectIcon"
              onClick={() => handleLinkClick("https://github.com/squareben1")}
            />
            <FaExternalLinkAlt
              className="projectIcon"
              onClick={() => handleLinkClick("https://github.com/squareben1")}
            />
            {/* </h2> */}
          </div>
        </div>
        <div className="coverImageContainer">
          <img src={props.image} className="projectImage" alt="ProjectImage" />
          <div className="coverMouseOver">
            <div
              className="coverImageText"
              dangerouslySetInnerHTML={{ __html: props.text }}
            ></div>
          </div>

          {/* <FaExternalLinkAlt /> */}
          {/* need to think of a way to render icons in the text */}
        </div>
      </div>
    </>
  );
};

export default Project;
