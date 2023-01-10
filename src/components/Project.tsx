import { forwardRef } from "react";
import "../styles/project.scss";
import pData from "./data";

const Project = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="project">
            <div className="project-content">
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
                                    <div>{item.description}</div>
                                    <div>
                                        <a href={item.preview}>Live Preview</a>
                                        <a href={item.source}>Github</a>
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
