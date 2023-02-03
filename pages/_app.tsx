import "@/styles/global.scss";
import "@/styles/nav.scss";
import "@/styles/home.scss";
import "@/styles/about.scss";
import "@/styles/carousel.scss";
import "@/styles/project.scss";
import "@/styles/contact.scss";

import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Nathan | Full Stack Developer</title>
                <meta
                    name="description"
                    content="Full stack developer specializing in MERN Stack. Building modern and interactive apps."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
