import { useEffect, useState } from "react";
import sData from "./skills";
import styles from "@/styles/carousel.module.scss";

interface Skills {
    skill: {
        name: string;
        svg: string;
    };
}

const CarouselItem = ({ skill }: Skills) => {
    return (
        <div className={styles.carousel_item} style={{ width: "20%" }}>
            <img src={skill.svg} alt={skill.name} />
            <div>{skill.name}</div>
        </div>
    );
};

export default function Carousel() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const activeScroll = (next: number) => {
        if (next < 0) {
            next = sData.length - 5;
        } else if (next >= sData.length - 4) {
            next = 0;
        }

        setActive(next);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) activeScroll(active + 1);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [active, paused]);

    return (
        <div
            className={styles.carousel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className={styles.carousel_container}
                style={{ transform: `translateX(-${active * 20}%)` }}
            >
                {sData.map((item, index) => {
                    return <CarouselItem skill={item} key={index} />;
                })}
            </div>
        </div>
    );
}
