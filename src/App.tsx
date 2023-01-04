import { useEffect, useRef } from "react";
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

    useEffect(() => {
        const checkPagePosition = () => {
            const navLinks = document.querySelectorAll(".nav-bar li");
            const viewPortTop = window.pageYOffset + window.innerHeight * 0.25;
            const coords = [
                {
                    top: homeRef.current?.offsetTop ?? 0,
                    bottom:
                        (homeRef.current?.offsetTop ?? 0) +
                        (homeRef.current?.offsetHeight ?? 0),
                },
                {
                    top: aboutRef.current?.offsetTop ?? 0,
                    bottom:
                        (aboutRef.current?.offsetTop ?? 0) +
                        (aboutRef.current?.offsetHeight ?? 0),
                },
                {
                    top: projectRef.current?.offsetTop ?? 0,
                    bottom:
                        (projectRef.current?.offsetTop ?? 0) +
                        (projectRef.current?.offsetHeight ?? 0),
                },
                {
                    top: contactRef.current?.offsetTop ?? 0,
                    bottom:
                        (contactRef.current?.offsetTop ?? 0) +
                        (contactRef.current?.offsetHeight ?? 0),
                },
            ];

            navLinks.forEach((item) => {
                if (
                    viewPortTop >= coords[0].top &&
                    viewPortTop < coords[0].bottom &&
                    item.classList.contains("home-link")
                )
                    item.classList.add("active");
                else if (
                    viewPortTop >= coords[1].top &&
                    viewPortTop < coords[1].bottom &&
                    item.classList.contains("about-link")
                )
                    item.classList.add("active");
                else if (
                    viewPortTop >= coords[2].top &&
                    viewPortTop < coords[2].bottom &&
                    item.classList.contains("project-link")
                )
                    item.classList.add("active");
                else if (
                    viewPortTop >= coords[3].top &&
                    item.classList.contains("contact-link")
                )
                    item.classList.add("active");
                else item.classList.remove("active");
            });
        };

        window.addEventListener("scroll", checkPagePosition);
        return () => window.removeEventListener("scroll", checkPagePosition);
    }, []);

    return (
        <div className="app">
            <Home ref={homeRef} scrollHandler={scrollHandler} />
            <NavBar scrollHandler={scrollHandler} />
            <About ref={aboutRef} />
            <Project ref={projectRef} />
            <Contact ref={contactRef} />
        </div>
    );
};

export default App;
