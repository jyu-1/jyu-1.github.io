import { useEffect } from "react";
import sData from "./skills";

export default function Cloud() {
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
                {sData.map((skill) => (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a href="/#" key={skill.name}>
                        {skill.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
