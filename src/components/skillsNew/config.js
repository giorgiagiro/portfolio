import React from "./../../images/skills/react-logo.png";
import HTML from "./../../images/skills/html5-logo.png";
import CSS from "./../../images/skills/css-logo.png";
import JS from "./../../images/skills/js-logo.png";
import TS from "./../../images/skills/ts-logo.png";
import Solidity from "./../../images/skills/solidity-logo.png";
import Hardhat from "./../../images/skills/hardhat-logo.png";
import Truffle from "./../../images/skills/truffle-logo.png";
import Ganache from "./../../images/skills/ganache-logo.png";
import Chainlink from "./../../images/skills/chainlink-logo.png";
import NPM from "./../../images/skills/npm-logo.png";
import YARN from "./../../images/skills/yarn-logo.png";
import Git from "./../../images/skills/git-logo.png";
import Moralis from "./../../images/skills/moralis-logo.png";
import Native from "./../../images/skills/react-native.png";
import Web3 from "./../../images/skills/web3js.png";
import Ethers from "./../../images/skills/ethers-logo.png";
import Waffle from "./../../images/skills/waffle.png";
import Next from "./../../images/skills/nextjs-logo.png";
import IPFS from "./../../images/skills/ipfs-logo.png";
import Graph from "./../../images/skills/thegraph-logo.png";
import Arweave from "./../../images/skills/arweave.png";
import Flutter from "./../../images/skills/flutter.png";
import NodeJS from "./../../images/skills/nodej-js.png";

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
        name: "Solidity",
        url: "https://soliditylang.org/",
        img: Solidity,
    },
    {
        name: "Hardhat",
        url: "https://hardhat.org/",
        img: Hardhat,
    },
    {
        name: "Waffle",
        url: "https://getwaffle.io/",
        img: Waffle,
    },
    {
        name: "Truffle",
        url: "https://trufflesuite.com/",
        img: Truffle,
    },
    {
        name: "Ganache",
        url: "https://trufflesuite.com/ganache/",
        img: Ganache,
    },
    {
        name: "Chainlink",
        url: "https://chain.link/",
        img: Chainlink,
    },
    {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        img: JS,
    },
    {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        img: TS,
    },
    {
        name: "NodeJS",
        url: "https://nodejs.org/en/",
        img: NodeJS,
    },
    {
        name: "Flutter",
        url: "https://flutter.dev/",
        img: Flutter,
    },
    {
        name: "React",
        url: "https://reactjs.org/",
        img: React,
    },
    {
        name: "EthersJS",
        url: "https://docs.ethers.io/v5/",
        img: Ethers,
    },
    {
        name: "IPFS",
        url: "https://ipfs.io/",
        img: IPFS,
    },
    {
        name: "React Native",
        url: "https://reactnative.dev/",
        img: Native,
    },
    {
        name: "YARN",
        url: "https://yarnpkg.com/",
        img: YARN,
    },
    {
        name: "Git",
        url: "https://git-scm.com/",
        img: Git,
    },
];