import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import Section from "../section/Section";
import ExperienceCard from "../experienceCard/ExperienceCard";
import experienceData from "../../data/experience.json";
import extraData from "../../data/extra.json";
import new_project_2025 from "../../data/new_projects_2025.json";

const Experience = (props) => {
  console.log(props);
  let data;
  let title;


  if(!props.extra){
    data = experienceData
    title = "Experience"
  }
   
  if(props.extra){
    data = extraData
    title = "Projects"
  } 

  if(props.new_project_2025){
    data = new_project_2025
    title = "Projects"
  }

  return (
    <Section title={title} classname="Experience">
      <div className="experience-content">
        <ul className="experience-list">
          {" "}
          {data.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />{" "}
              </Fade>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
    </Section>
  );
};

export default Experience;
