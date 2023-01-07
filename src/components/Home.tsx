import { forwardRef, useEffect, useState } from "react";
import "../styles/home.scss";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

const Home = forwardRef<HTMLDivElement, VoidFunction>((props, ref) => {
    const [heroText, setHeroText] = useState<string[]>(["", "", "", ""]);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const headerText = [
            "Hi, I'm Jia",
            "You can also call me Nathan",
            "I'm a Full Stack Developer",
        ];

        function timeout(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        const typeWriter = async () => {
            for (let i = 0; i < headerText.length; i++) {
                for (let j = 0; j < headerText[i].length; j++) {
                    setHeroText((prev) =>
                        prev.map((item, index) =>
                            index === i ? item + headerText[i].charAt(j) : item
                        )
                    );
                    await timeout(100);
                }
                await timeout(1000);
            }

            setShowButton(true);
        };

        window.addEventListener("load", typeWriter);

        return () => {
            window.removeEventListener("load", typeWriter);
        };
    }, []);

    return (
        <div ref={ref} className="home">
            <div>
                {heroText.map((item, index) => {
                    return item !== "" ? (
                        <p key={index}>
                            {item}
                            {heroText[index + 1] === "" ? (
                                <span className="input-cursor"></span>
                            ) : null}
                        </p>
                    ) : null;
                })}
            </div>
            {showButton ? (
                <button
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
