import { forwardRef } from "react";
import Cloud from "./Cloud";
import Carousel from "./Carousel";
import styles from "@/styles/about.module.scss";

const About = forwardRef<HTMLDivElement>(function AboutRef(props, ref) {
    return (
        <div ref={ref} className={styles.about}>
            <div className={styles.about_content}>
                <div className="hidden_item left">
                    <h1>About Me</h1>
                    <p>
                        Hi, I&#39;m Jia, an Electrical Engineering graduate from
                        the University of California, Riverside. When I first
                        learned about web development, I was fascinated by its
                        similarities to my studies and the endless possibilities
                        it offers. With my background in research and
                        collaboration with others, I bring a strong foundation
                        in problem-solving and critical thinking to my work in
                        software development.
                    </p>
                    <br />
                    <br />
                    <p>
                        Driven by curiosity and a desire to explore new
                        technologies, I&#39;m constantly finding new ways to
                        build new experiences. Whether I&#39;m experimenting
                        with new frameworks or diving into the latest APIs,
                        I&#39;m always looking for ways to push the boundaries
                        of what&#39;s possible with web development.
                    </p>
                    <br />
                    <br />
                    <p>
                        Outside of coding, I enjoy playing tennis, trying new
                        foods, and traveling.
                    </p>
                </div>
                <div className={`${styles.about_skills} hidden_item right`}>
                    <Cloud />
                    <Carousel />
                </div>
            </div>
        </div>
    );
});

export default About;
