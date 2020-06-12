import React from "react";
import {
  FaGem,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaDatabase,
  FaRecycle,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  DiDjango,
  DiMongodb,
  DiPostgresql,
  DiHeroku,
  DiVisualstudio,
  DiJsBadge,
} from "react-icons/di";
import { GiCoffeeCup } from "react-icons/gi";

const Skills = () => (
  <div className="aboutSkill">
    <div className="skillDiv">
      <FaGem className="skillIcon" />
      <p>Ruby & <br></br>Ruby on Rails</p>
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
      <FaDatabase className="skillIcon" />
      <p>SQL</p>
    </div>
    <div className="skillDiv">
      <DiPostgresql className="skillIcon" />
      <p>PostgreSQL</p>
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
    {/* <div className="skillDiv">
      <FaSass className="skillIcon" />
      <p>Sass</p>
    </div> */}
    <div className="skillDiv">
      <DiHeroku className="skillIcon" />
      <p>Heroku</p>
    </div>
    <div className="skillDiv">
      <FaGitAlt className="skillIcon" />
      <p>Git</p>
    </div>
    <div className="skillDiv">
      <FaGithub className="skillIcon" />
      <p>GitHub</p>
    </div>
    {/* <div className="skillDiv">
      <DiVisualstudio className="skillIcon" />
      <p>VS Code</p>
    </div> */}
  </div>
);

export default Skills;
