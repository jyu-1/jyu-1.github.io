import { forwardRef } from "react";
import "../styles/contact.scss";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="contact">
            <div>
                <div>
                    For business inquiries, or if you just want to chat, feel
                    free to send me a message and I will get back to you!
                </div>
                <div>My email: jia@nateyu.com</div>
            </div>
            <footer>
                <a href="https://github.com/jyu-1" title="github page">
                    Copyright © 2022 Nateyu
                </a>
            </footer>
        </div>
    );
});

export default Contact;
