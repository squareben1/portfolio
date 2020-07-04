import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.scss";

const Project = (props) => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  let websiteLink = null;

  if (props.externalLink != null) {
    websiteLink = (
      <FaExternalLinkAlt
        className="projectIcon"
        onClick={() => handleLinkClick(props.externalLink)}
        title="Project URL"
      />
    );
  }

  return (
    <>
      <div className="projectContainer">
        <div className="individualProjectHeader">
          {/* <h2> */}
          <div className="projectTitle">{props.title} </div>
          {/* </h2> */}
          <div className="projectLinks">
            <FaGithub
              className="projectIcon"
              onClick={() => handleLinkClick(props.gitHubLink)}
              title="Project's GitHub Repo"
            />
            {websiteLink}
          </div>
        </div>
        <div className="coverImageContainer">
          <img src={props.image} className="projectImage" alt="ProjectImage" />
          <div
            className="coverImageText"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Project;
