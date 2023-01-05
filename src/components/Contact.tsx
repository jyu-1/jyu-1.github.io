import { forwardRef } from "react";
import "../styles/contact.scss";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="contact">
            <div>
                For business inquiries, or if you just want to chat, feel free
                to send me a message and I will get back to you!
            </div>
            <div>My email: jia@nateyu.com</div>
        </div>
    );
});

export default Contact;
