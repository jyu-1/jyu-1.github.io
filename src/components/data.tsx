import discussgif from "../assets/projects/discuss.gif";
import shoppinggif from "../assets/projects/shop.gif";
import weathergif from "../assets/projects/weather.gif";
import resumejpg from "../assets/projects/cv.jpg";
import memorygif from "../assets/projects/memory.gif";

interface Project {
    name: string;
    description: string;
    preview: string;
    source: string;
    gif: string;
}

const pData: Project[] = [
    {
        name: "Discuss App",
        description:
            "A clone of the popular communication app, Discord. Features user authentication, channel selection, channel creation, and more. Build with React, React Router, and Firebase.",
        preview: "https://jyu-1.github.io/discuss/",
        source: "https://github.com/jyu-1/discuss",
        gif: discussgif,
    },
    {
        name: "Shopping Cart",
        description:
            "Front-end solution for a shopping website. The store allows users to browse, add, and remove items from the cart. Built using React and React Router.",
        preview: "https://jyu-1.github.io/shopping-cart/",
        source: "https://github.com/jyu-1/shopping-cart",
        gif: shoppinggif,
    },
    {
        name: "Weather App",
        description:
            "Weather app to check forecast of the next five days. Features searching any city in the world and unit selection. Forecast data is provided by OpenWeatherAPI. Bundled using Webpack.",
        preview: "https://jyu-1.github.io/weather/",
        source: "https://github.com/jyu-1/weather",
        gif: weathergif,
    },
    {
        name: "Resume Maker",
        description:
            "An easy solution to making personal resume (CV). Build resume using the left side of the app and real-time feedback will be provided on the right. Build using React.",
        preview: "https://jyu-1.github.io/cv-project/",
        source: "https://github.com/jyu-1/cv-project",
        gif: resumejpg,
    },
    {
        name: "Memory Card",
        description:
            "Select a card without picking the same one. Every successful selection gives 1 point. Picking an already picked card resets point back to zero. Built using React.",
        preview: "https://jyu-1.github.io/memory-card/",
        source: "https://github.com/jyu-1/memory-card",
        gif: memorygif,
    },
];

export default pData;
