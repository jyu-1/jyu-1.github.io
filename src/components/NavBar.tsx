import "../styles/nav.scss";

interface VoidFunction {
    scrollHandler: (refArg: string) => void;
}

const NavBar = ({ scrollHandler }: VoidFunction) => {
    return (
        <ul className="nav-bar">
            <li
                onClick={() => {
                    scrollHandler("homeRef");
                }}
            >
                Home
            </li>
            <li
                onClick={() => {
                    scrollHandler("aboutRef");
                }}
            >
                About
            </li>
            <li
                onClick={() => {
                    scrollHandler("projectRef");
                }}
            >
                Projects
            </li>
            <li
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
