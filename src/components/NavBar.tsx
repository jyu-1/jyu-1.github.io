import "../styles/nav.scss";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

const NavBar = ({ scrollHandler }: VoidFunction) => {
    const navItems = ["Home", "About", "Projects", "Contact"];

    return (
        <ul className="nav-bar">
            {navItems.map((item, index) => {
                return (
                    <li key={index} onClick={() => scrollHandler(index)}>
                        {item.split("").map((letter, letterIndex) => {
                            let delay = (letterIndex + 1) / 20;
                            if (letterIndex % 2 === 0) delay -= 0.1;
                            else delay += 0.05;
                            return (
                                <span key={letterIndex}>
                                    <span
                                        className="nav-out"
                                        style={{ transitionDelay: `${delay}s` }}
                                    >
                                        {letter}
                                    </span>
                                    <span
                                        className="nav-in"
                                        style={{
                                            transitionDelay: `${delay}s`,
                                        }}
                                    >
                                        {letter}
                                    </span>
                                </span>
                            );
                        })}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavBar;
