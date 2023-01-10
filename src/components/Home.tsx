import { forwardRef, useEffect, useRef, useState } from "react";
import "../styles/home.scss";
import Typewriter from "typewriter-effect";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

const Home = forwardRef<HTMLDivElement, VoidFunction>((props, ref) => {
    const [showButton, setShowButton] = useState(false);
    const meButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (meButton.current && showButton) {
            meButton.current.style.visibility = "visible";
            meButton.current.style.opacity = "1";
            meButton.current.style.left = "0";
        }
    }, [showButton]);

    return (
        <div ref={ref} className="home">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString(
                            `Hi, I'm <span style="color: #FF9696"></div>Jia</span><br>`
                        )
                        .pauseFor(1000)
                        .typeString(
                            'You can also call me <span style="color: #FF9696">Nathan</span><br>'
                        )
                        .pauseFor(1000)
                        .typeString("I'm a Full Stack Developer")
                        .pauseFor(1000)
                        .callFunction(() => {
                            setShowButton(true);
                        })
                        .start();
                }}
            />
            <button
                ref={meButton}
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
