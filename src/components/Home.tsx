import { forwardRef } from "react";
import "../styles/home.scss";

interface VoidFunction {
    scrollHandler: (refArg: string) => void;
}

const Home = forwardRef<HTMLDivElement, VoidFunction>((props, ref) => {
    return (
        <div ref={ref} className="home">
            <p>Hey there, I'm Jia</p>
            <p>You can also call me Nathan</p>
            <p>I'm a Full Stack Developer</p>
            <button
                onClick={() => {
                    props.scrollHandler("aboutRef");
                }}
            >
                Get to know me
            </button>
        </div>
    );
});

export default Home;
