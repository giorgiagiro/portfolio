import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import Section from "../section/Section";
import Skills from "../skillsNew/Skills";

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Quick life summary:</h2>
            <>
              Ciao! I am Giorgia, I am 26 years old, I am a double-degree graduate from Politecnico di Milano and Aalto
              University. During my studies in Information and Business Organisation Engineering I had the opportunity to learn and develop new skills while figuring out what are my passions. I got involved in various projects, that I worked on alone or with
              some collaborators.
            </>
            <br></br>
            <>
              I got involved in various projects, that I worked on alone or with
              some collaborators.
            </>
            <br></br>
            <>
            I'm studying and working on projects to advance my technical knowledge, in particular, with React and Flutter.
            </>
            <br></br>
            <>
              After my bachelor I continued my path with a <a
                className="eitlink"
                href="https://masterschool.eitdigital.eu/human-computer-interaction-and-design"
                target="_blank"
              >
                Human Computer Interaction and Design
              </a>{" "}
              double degree program managed by the{" "}
              <a
                className="eitlink"
                href="https://masterschool.eitdigital.eu/"
                target="_blank"
              >
                European Institute of Tecnology
              </a>{" "}
              and I recently graduated. I choose this track by combining my
              Computer Science background and my passion for design.

            </>
            <br></br>
            <>
              EIT gave me the chance to move from Italy to Finland for my second
              year, giving me an amazing
              international experience.
            </>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  );
};

export default About;
