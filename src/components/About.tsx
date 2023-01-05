import { forwardRef } from "react";
import "../styles/about.scss";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="about">
            <div>
                Hi, I'm Jia, an Electrical Engineering graduate from the
                University of California, Riverside. When I first learned about
                web development, I was fascinated by its similarities to my
                major and the endless possibilities it offers. With my
                background in research and collaboration with others, I bring a
                strong foundation in problem-solving and critical thinking to my
                work in software development.
            </div>
            <div>
                Driven by curiosity and a desire to explore new technologies,
                I'm constantly finding new ways to build new experiences.
                Whether I'm experimenting with new frameworks or diving into the
                latest APIs, I'm always looking for ways to push the boundaries
                of what's possible with web development.
            </div>
            <div>
                Outside of coding, I enjoy playing tennis, trying new foods, and
                traveling.
            </div>
            <div>Javascript</div>
            <div>TypeScript</div>
            <div>React</div>
            <div>Node.js</div>
            <div>MongoDB</div>
            <div>Express.js</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>SASS</div>
            <div>Git</div>
            <div>NPM</div>
            <div>Jest</div>
            <div>Webpack</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
});

export default About;
