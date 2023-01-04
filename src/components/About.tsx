import { forwardRef } from "react";
import "../styles/about.scss";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="about">
            About
        </div>
    );
});

export default About;
