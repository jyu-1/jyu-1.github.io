import { useRef, useState } from "react";
import styles from "@/styles/nav.module.scss";

interface VoidFunction {
    scrollHandler: (refIndex: number) => void;
}

export default function NavBar({ scrollHandler }: VoidFunction) {
    const navItems = ["Home", "About", "Projects", "Contact"];
    const [openMenu, setShowMenu] = useState(false);
    const navRef = useRef<HTMLUListElement>(null);

    const menuHandler = () => {
        const visibility = navRef.current?.getAttribute("data-visible");
        if (visibility === "false") {
            navRef.current?.setAttribute("data-visible", "true");
            setShowMenu(true);
        } else {
            navRef.current?.setAttribute("data-visible", "false");
            setShowMenu(false);
        }
    };

    return (
        <>
            <div
                className={`${styles.menu_icon} ${
                    openMenu ? styles.hide_icon : ""
                }`}
                onClick={menuHandler}
            >
                <img
                    src="/assets/icons/menu.png"
                    alt=""
                    width="75px"
                    height="75px"
                />
            </div>
            <ul className={styles.nav_bar} data-visible="false" ref={navRef}>
                <div className={styles.close_button} onClick={menuHandler}>
                    <img
                        src="/assets/icons/close.png"
                        alt=""
                        width="50px"
                        height="50px"
                    />
                </div>
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
                                            className={styles.nav_out}
                                            style={{
                                                transitionDelay: `${delay}s`,
                                            }}
                                        >
                                            {letter}
                                        </span>
                                        <span
                                            className={styles.nav_in}
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
        </>
    );
}
