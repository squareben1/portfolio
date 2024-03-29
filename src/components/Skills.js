import React from "react";
// import IconRails from 'react-devicon/rails/plain'
import railsIcon from "../assets/railsIcon.png";
import ansibleIcon from "../assets/ansibleIcon.png"
import {
  FaGem,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaDatabase,
  FaRecycle,
  FaSass,
  FaAws,
  FaNode,
} from "react-icons/fa";
import {
  DiPostgresql,
  DiJsBadge,
} from "react-icons/di";


const Skills = () => (
  <div className="aboutSkill">
    
    <div className="skillDiv">
      <FaAws className="skillIcon" />
      <p>AWS</p>
    </div>
    <div className="skillDiv">
      <FaPython className="skillIcon" />
      <p>Python</p>
    </div>
    <div className="skillDiv">
      <DiJsBadge className="skillIcon" />
      <p>JavaScript</p>
    </div>
    <div className="skillDiv">
      <FaReact className="skillIcon" />
      <p>React</p>
    </div>
    <div className="skillDiv">
      <FaNode className="skillIcon" />
      <p>Node.js</p>
    </div>
    <div className="skillDiv">
      <FaGem className="skillIcon" />
      <p>
        Ruby
      </p>
    </div>
    <div className="skillDiv">
      <img className="skillIcon" src={railsIcon} alt="img" />
      {/* <IconRails width={100} height={100}/> */}
      <p>Ruby on Rails</p>
    </div>
    <div className="skillDiv">
      <FaDatabase className="skillIcon" />
      <p>SQL</p>
    </div>
    <div className="skillDiv">
      <img className="skillIcon" src={ansibleIcon} alt="img" />
      {/* <IconRails width={100} height={100}/> */}
      <p>Ansible</p>
    </div>
    <div className="skillDiv">
      <FaRecycle className="skillIcon" />
      <p>
        Test Driven<br></br>Development
      </p>
    </div>
    <div className="skillDiv">
      <FaHtml5 className="skillIcon" />
      <p>HTML5</p>
    </div>
    <div className="skillDiv">
      <FaCss3Alt className="skillIcon" />
      <p>CSS3</p>
    </div>
    <div className="skillDiv">
      <FaSass className="skillIcon" />
      <p>Sass</p>
    </div>
  </div>
);

export default Skills;
