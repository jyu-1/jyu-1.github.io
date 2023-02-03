import style from "@/styles/error.module.scss";

export default function Custom404() {
    return (
        <div className={style.error}>
            <div>
                <span className={style.bold}>404</span>Page not found
            </div>
            <a href="https://nateyu.com">Home Page</a>
        </div>
    );
}
