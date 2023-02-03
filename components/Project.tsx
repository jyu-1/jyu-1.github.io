import { forwardRef } from "react";
import pData from "./data";

const Project = forwardRef<HTMLDivElement>(function projectRef(props, ref) {
    return (
        <div ref={ref} className="project">
            <div className="project-content">
                <h1>Projects</h1>
                {pData.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={
                                    index % 2 === 0 ? "left-gif" : "right-gif"
                                }
                            >
                                <div>
                                    <div className="project-title">
                                        {item.name}
                                    </div>
                                    <div className="project-description">
                                        {item.description}
                                    </div>
                                    <div>
                                        <a href={item.preview}>Live Preview</a>
                                        <a href={item.source}>Source Code</a>
                                    </div>
                                </div>
                                <img src={item.gif} alt={item.name} />
                            </div>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default Project;
