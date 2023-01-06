import { FC, useEffect, useState } from "react";
import sData from "./skills";
import "../styles/carousel.scss";

interface Skills {
    skill: {
        name: string;
        svg: string;
    };
}

const CarouselItem = ({ skill }: Skills) => {
    return (
        <div className="carousel-item" style={{ width: "20%" }}>
            <img src={skill.svg} alt={skill.name} />
            <div>{skill.name}</div>
        </div>
    );
};

const Carousel = () => {
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
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [active, paused]);

    return (
        <div
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="carousel-container"
                style={{ transform: `translateX(-${active * 20}%)` }}
            >
                {sData.map((item, index) => {
                    return <CarouselItem skill={item} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Carousel;
