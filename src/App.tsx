import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";

const App = () => {
    const myRef: any = useRef(null);

    const scroll = () => myRef.current.scrollIntoView();

    return (
        <div className="app">
            <Home />
            <About ref={myRef}>Hey</About>
            <Project />
            <Contact />
        </div>
    );
};

export default App;
