import React, { useState } from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { Bounce } from "react-reveal";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Navbar from "../navbar/Navbar";
import config from "../../config";
import profile from "../../images/profileNew.png";
import linkedinLogo from "../../images/social/linkedin.png";
import githubLogo from "../../images/social/github.png";
import cvLogo from "../../images/social/resume.png";
import { useCallback } from "react";
import mailLogo from "../../images/social/mail.png";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    // For older tsparticles, just initialize the engine
    console.log(engine);
  }, []);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles
          className="particles"
          params={config.particles}
          init={particlesInit}
        />

        <div className={`greeting${!imageLoaded ? " hide" : ""}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Giorgia Giro</span>.{" "}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    "I have a degree in Computer Science Engineering💻",
                    "I have a degree in Human Computer Interaction and Design📱",
                    "I love video editing🎥",
                    "I play tennis🎾",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,

                  cursor: "<",
                  delay: 50,
                }}
              />
            </h1>
          </Fade>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/giorgia-giro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logoImage"
                    src={linkedinLogo}
                    alt="Linkedin Logo"
                    width="50px"
                  />
                </a>
              </div>
            </Bounce>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://github.com/giorgiagiro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logoImage"
                    src={githubLogo}
                    alt="Github Logo"
                    width="50px"
                  />
                </a>
              </div>
            </Bounce>
            <Bounce cascade>
              <div className="links">
                <a
                  href="mailto:giorgia.giro@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logoImage"
                    src={mailLogo}
                    alt="Mail Logo"
                    width="50px"
                  />
                </a>
              </div>
            </Bounce>
            <Bounce cascade>
              <div className="links">
                <a
                  href="./GiorgiaGiroResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logoImage"
                    src={cvLogo}
                    alt="CV Logo"
                    width="50px"
                  />
                </a>
              </div>
            </Bounce>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        <div className="scroll-down">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-63}
            duration={500}
          >
            <ArrowDropDownCircleIcon
              fontSize="large"
              style={{
                pointerEvents: "fill",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Home;
