import { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Project from "./components/Project";
import { throttle } from "lodash";

const App = () => {
    const navRef = useRef<HTMLDivElement[]>([]);

    const scrollHandler = (refIndex: number) => {
        if (navRef.current[refIndex])
            navRef.current[refIndex].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    useEffect(() => {
        const checkPagePosition = () => {
            const vPTop = window.pageYOffset + window.innerHeight * 0.25;

            navRef.current.forEach((item, index) => {
                const selectLink = document.querySelector(
                    `.nav-bar li:nth-child(${index + 1})`
                );
                if (
                    vPTop >= item.offsetTop &&
                    vPTop < item.offsetTop + item.offsetHeight
                ) {
                    selectLink?.classList.add("active");
                } else selectLink?.removeAttribute("class");
            });
        };

        const throttleScroll = throttle(checkPagePosition, 200);

        window.addEventListener("scroll", throttleScroll);

        return () => {
            window.removeEventListener("scroll", throttleScroll);
        };
    }, []);

    return (
        <div className="app">
            <Home
                ref={(element) =>
                    (navRef.current[0] = element as HTMLDivElement)
                }
                scrollHandler={scrollHandler}
            />
            <NavBar scrollHandler={scrollHandler} />
            <About
                ref={(element) =>
                    (navRef.current[1] = element as HTMLDivElement)
                }
            />
            <Project
                ref={(element) =>
                    (navRef.current[2] = element as HTMLDivElement)
                }
            />
            <Contact
                ref={(element) =>
                    (navRef.current[3] = element as HTMLDivElement)
                }
            />
        </div>
    );
};

export default App;
