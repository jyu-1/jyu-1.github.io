import { forwardRef } from "react";
import "../styles/project.scss";
import pData from "./data";

const Project = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="project">
            <div>Projects: </div>
            {pData.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={index % 2 === 0 ? "left-gif" : "right-gif"}
                    >
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.preview}</div>
                        <div>{item.source}</div>
                        <div>{item.gif}</div>
                    </div>
                );
            })}
        </div>
    );
});

export default Project;
