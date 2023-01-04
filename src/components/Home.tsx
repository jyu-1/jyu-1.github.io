import { forwardRef } from "react";
import "../styles/home.scss";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

const Home = forwardRef<HTMLDivElement, VoidFunction>((props, ref) => {
    return (
        <div ref={ref} className="home">
            <p>Hey there, I'm Jia</p>
            <p>You can also call me Nathan</p>
            <p>I'm a Full Stack Developer</p>
            <button
                onClick={() => {
                    props.scrollHandler(1);
                }}
            >
                Get to know me
            </button>
        </div>
    );
});

export default Home;
