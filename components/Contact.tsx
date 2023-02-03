import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>(function ContactRef(props, ref) {
    return (
        <div ref={ref} className="contact">
            <div>
                <div className="email-content">
                    <h1>Contact Me</h1>
                    <div>
                        <div>
                            <p>
                                I&#39;m interested in new opportunities.
                                However, if you have any feedback or just want
                                to chat, leave a message and I will get back to
                                you.
                            </p>
                            <br />
                            <p>
                                You can reach me using the contact form, or you
                                can also email me directly at: jia@nateyu.com
                            </p>
                            <br />
                            <div className="contact-logo">
                                <a
                                    href="https://github.com/jyu-1"
                                    title="Github Profile"
                                >
                                    <img
                                        src="/assets/icons/github.svg"
                                        alt="git icon"
                                    />
                                </a>
                                <a
                                    href="https://linkedin.com/in/jiajyu"
                                    title="LinkedIn"
                                >
                                    <img
                                        src="/assets/icons/linkedin.png"
                                        alt="git icon"
                                    />
                                </a>
                                <a
                                    href="mailto: jia@nateyu.com"
                                    title="Email Me"
                                >
                                    <img
                                        src="/assets/icons/email.png"
                                        alt="git icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <form
                            action="https://formsubmit.co/d260f1d245a26c75a9bce1d4f0d339a6"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="_next"
                                value="https://nateyu.com/contact"
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <textarea
                                className="contact-message"
                                name="message"
                                placeholder="Message"
                                required
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <a href="https://github.com/jyu-1" title="Github Profile">
                    Copyright © 2022 Nateyu
                </a>
            </footer>
        </div>
    );
});

export default Contact;
