import "../styles/nav.scss";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

const NavBar = ({ scrollHandler }: VoidFunction) => {
    return (
        <ul className="nav-bar">
            <li
                onClick={() => {
                    scrollHandler(0);
                }}
            >
                Home
            </li>
            <li
                onClick={() => {
                    scrollHandler(1);
                }}
            >
                About
            </li>
            <li
                onClick={() => {
                    scrollHandler(2);
                }}
            >
                Projects
            </li>
            <li
                onClick={() => {
                    scrollHandler(3);
                }}
            >
                Contact
            </li>
        </ul>
    );
};

export default NavBar;
