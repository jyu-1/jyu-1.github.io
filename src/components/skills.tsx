import JavascriptSVG from "../assets/icons/javascript.svg";
import TypeScriptSVG from "../assets/icons/typescript.svg";
import ReactSVG from "../assets/icons/react.svg";
import NodeSVG from "../assets/icons/nodejs.svg";
import MongoDBSVG from "../assets/icons/mongodb.svg";
import ExpressSVG from "../assets/icons/express.svg";
import HTMLSVG from "../assets/icons/html5.svg";
import CSSSVG from "../assets/icons/css3.svg";
import SASSSVG from "../assets/icons/sass.svg";
import GitSVG from "../assets/icons/git.svg";
import NPMSVG from "../assets/icons/npm.svg";
import JestSVG from "../assets/icons/jest.svg";
import WebpackSVG from "../assets/icons/webpack.svg";

interface Skills {
    name: string;
    svg: string;
}

const sData: Skills[] = [
    { name: "JavaScript", svg: JavascriptSVG },
    { name: "TypeScript", svg: TypeScriptSVG },
    { name: "React", svg: ReactSVG },
    { name: "Node.js", svg: NodeSVG },
    { name: "MongoDB", svg: MongoDBSVG },
    { name: "Express.js", svg: ExpressSVG },
    { name: "HTML", svg: HTMLSVG },
    { name: "CSS", svg: CSSSVG },
    { name: "SASS", svg: SASSSVG },
    { name: "Git", svg: GitSVG },
    { name: "NPM", svg: NPMSVG },
    { name: "Jest", svg: JestSVG },
    { name: "Webpack", svg: WebpackSVG },
];

export default sData;
