import "../styles/nav.scss";

interface VoidFunction {
    scrollHandler: (refArg: string) => void;
}

const NavBar = ({ scrollHandler }: VoidFunction) => {
    return (
        <ul className="nav-bar">
            <li
                className="home-link"
                onClick={() => {
                    scrollHandler("homeRef");
                }}
            >
                Home
            </li>
            <li
                className="about-link"
                onClick={() => {
                    scrollHandler("aboutRef");
                }}
            >
                About
            </li>
            <li
                className="project-link"
                onClick={() => {
                    scrollHandler("projectRef");
                }}
            >
                Projects
            </li>
            <li
                className="contact-link"
                onClick={() => {
                    scrollHandler("contactRef");
                }}
            >
                Contact
            </li>
        </ul>
    );
};

export default NavBar;
