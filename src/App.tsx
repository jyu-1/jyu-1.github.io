import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Project from "./components/Project";

const App = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollHandler = (refArg: string) => {
        switch (refArg) {
            case "homeRef":
                if (homeRef.current !== null)
                    homeRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                break;
            case "aboutRef":
                if (aboutRef.current !== null)
                    aboutRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                break;
            case "projectRef":
                if (projectRef.current !== null)
                    projectRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                break;
            case "contactRef":
                if (contactRef.current !== null)
                    contactRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                break;
        }
    };

    return (
        <div className="app">
            <Home ref={homeRef} />
            <NavBar scrollHandler={scrollHandler} />
            <About ref={aboutRef} />
            <Project ref={projectRef} />
            <Contact ref={contactRef} />
        </div>
    );
};

export default App;
