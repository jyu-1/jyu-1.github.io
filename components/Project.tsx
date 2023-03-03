import { forwardRef } from "react";
import pData from "./data";
import styles from "@/styles/project.module.scss";

const Project = forwardRef<HTMLDivElement>(function projectRef(props, ref) {
    return (
        <div ref={ref} className={styles.project}>
            <div className={styles.project_content}>
                <h1>Projects</h1>
                {pData.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={
                                    index % 2 === 0
                                        ? styles.left_gif
                                        : styles.right_gif
                                }
                            >
                                <div
                                    className={
                                        index % 2 === 0
                                            ? "hidden_item left"
                                            : "hidden_item right"
                                    }
                                >
                                    <div className={styles.project_title}>
                                        {item.name}
                                    </div>
                                    <div className={styles.project_description}>
                                        {item.description}
                                    </div>
                                    <div>
                                        <a href={item.preview}>Live Preview</a>
                                        <a href={item.source}>Source Code</a>
                                    </div>
                                </div>
                                <img
                                    src={item.gif}
                                    alt={item.name}
                                    className={
                                        index % 2 === 0
                                            ? "hidden_item right"
                                            : "hidden_item left"
                                    }
                                />
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
