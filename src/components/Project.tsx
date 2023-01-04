import { forwardRef } from "react";
import "../styles/project.scss";

const Project = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="project">
            Project
        </div>
    );
});

export default Project;
