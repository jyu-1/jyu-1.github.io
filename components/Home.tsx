import { forwardRef, useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

const Home = forwardRef<HTMLDivElement, VoidFunction>(function HomeRef(
    props,
    ref
) {
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
                        .changeDelay(50)
                        .pauseFor(500)
                        .typeString(
                            `Hi, I'm <span class="name-animation" style="color: #FF9696"></div>Jia</span><br>`
                        )
                        .pauseFor(500)
                        .typeString(
                            'You can also call me <span class="name-animation" style="color: #FF9696">Nathan</span><br>'
                        )
                        .pauseFor(500)
                        .typeString("I'm a Full Stack Developer")
                        .pauseFor(500)
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
