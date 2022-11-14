import React from "./../../images/skills/react-logo.png";
import HTML from "./../../images/skills/HTML5.png";
import JS from "./../../images/skills/js-logo.png";
import Flutter from "./../../images/skills/flutter.png";
import cpp from "./../../images/skills/cpp.png";
import python from "./../../images/skills/python_logo.png";
import java from "./../../images/skills/java.png";
import ae from "./../../images/skills/aftereffects.png";
import ps from "./../../images/skills/photoshop.png";
import ai from "./../../images/skills/illustrator.png";
import xd from "./../../images/skills/xd.png";
import c from "./../../images/skills/c_logopng.png";
import css from "./../../images/skills/CSS3.png";
import premiere from "./../../images/skills/premiere.png";
import unity from "./../../images/skills/Unity_logo.png";
import dvista from "./../../images/skills/3dvista.png";
import figma from "./../../images/skills/figma.png";


export const getSkill = (names) => {
    let toReturn = [];
    names.map((name) => {
        skills.map((skill) => {
            if (skill.name.toLowerCase() === name.toLowerCase()) {
                toReturn.push(skill);
            }
        });
    });
    return toReturn;
};

export const skills = [{
        name: "C",
        url: "https://www.cprogramming.com/",
        img: c,
    },
    {
        name: "C++",
        url: "https://www.cprogramming.com/",
        img: cpp,
    },
    {
        name: "HTML",
        url: "https://html.spec.whatwg.org/multipage/",
        img: HTML,
    },
    {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        img: css,
    },
    {
        name: "Javascript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        img: JS,
    },
    {
        name: "React",
        url: "https://reactjs.org/",
        img: React,
    },
    {
        name: "Flutter",
        url: "https://flutter.dev/",
        img: Flutter,
    },
    {
        name: "Python",
        url: "https://www.python.org/",
        img: python,
    },
    {
        name: "Figma",
        url: "https://www.figma.com/",
        img: figma,
    },
    {
        name: "3D Vista",
        url: "https://www.3dvista.com/en/",
        img: dvista,
    },
    {
        name: "Unity",
        url: "https://unity.com/",
        img: unity,
    },
    {
        name: "Adobe Premiere",
        url: "https://www.adobe.com/in/products/premiere.html",
        img: premiere,
    },
    {
        name: "Adobe Photoshop",
        url: "https://www.adobe.com/in/products/photoshop.html",
        img: ps,
    },
    {
        name: "Adobe Illustrator",
        url: "https://www.adobe.com/in/products/illustrator.html",
        img: ai,
    },
    {
        name: "Adobe XD",
        url: "https://www.adobe.com/in/products/xd.html",
        img: xd,
    },
    {
        name: "Adobe After Effects",
        url: "https://www.adobe.com/in/products/aftereffects.html",
        img: ae,
    },
];