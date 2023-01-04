import { forwardRef } from "react";
import "../styles/contact.scss";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="contact">
            Contact
        </div>
    );
});

export default Contact;
