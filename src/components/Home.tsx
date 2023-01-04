import { forwardRef } from "react";
import "../styles/home.scss";

const Home = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="home">
            <p>Hey there, I'm Jia</p>
            <p>You can also call me Nathan</p>
            <p>I'm a Full Stack Developer</p>
            <button>Get to know me</button>
        </div>
    );
});

export default Home;
