import { forwardRef, useRef, useState } from "react";
import "../styles/home.scss";
import Typewriter from "typewriter-effect";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

const Home = forwardRef<HTMLDivElement, VoidFunction>((props, ref) => {
    const [showButton, setShowButton] = useState(false);
    const meButton = useRef<HTMLButtonElement>(null);

    return (
        <div ref={ref} className="home">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(1000)
                        .typeString("Hi, I'm Jia<br>")
                        .pauseFor(1000)
                        .typeString("You can also call me Nathan<br>")
                        .pauseFor(1000)
                        .typeString("I'm a Full Stack Developer")
                        .pauseFor(1000)
                        .callFunction(() => {
                            setShowButton(true);
                            if (meButton.current) {
                                meButton.current.style.opacity = "1";
                                meButton.current.style.left = "0";
                            }
                        })
                        .start();
                }}
            />
            {showButton ? (
                <button
                    ref={meButton}
                    onClick={() => {
                        props.scrollHandler(1);
                    }}
                >
                    Get to know me
                </button>
            ) : null}
        </div>
    );
});

export default Home;
