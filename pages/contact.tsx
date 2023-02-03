import style from "@/styles/redircontact.module.scss";

export default function Contact() {
    return (
        <div className={style.main}>
            <div>Thank you for contacting me.</div>
            <div>I will get back to you as soon as possible.</div>
            <div>
                <a
                    href="https://nateyu.com"
                    title="Nathan | Full Stack Developer"
                >
                    Click here to go back to the home page.
                </a>
            </div>
        </div>
    );
}
