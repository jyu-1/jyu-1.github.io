import { useEffect } from "react";

const skills = [
    { title: "JavaScript" },
    { title: "TypeScript" },
    { title: "React" },
    { title: "Node.js" },
    { title: "MongoDB" },
    { title: "Express.js" },
    { title: "Next.js" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "SASS" },
    { title: "Git" },
    { title: "NPM" },
    { title: "Jest" },
    { title: "Webpack" },
];

const Cloud = () => {
    useEffect(() => {
        const tagCanvasOptions = {
            initial: [0.05, -0.05],
            minSpeed: 0.05,
            noSelect: true,
            shuffleTags: true,
            textColour: "#E1E1E1",
            zoomMax: 1.5,
            zoomMin: 0.5,
            zoomStep: 0.1,
        };
        try {
            // @ts-ignore
            TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
        } catch (e) {
            console.log("Canvas error.");
        }
    }, []);

    return (
        <div className="cloud-container">
            <canvas id="tagcanvas" width="600" height="600"></canvas>
            <div id="taglist">
                {skills.map((skill) => (
                    <a href="/#" key={skill.title}>
                        {skill.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Cloud;
