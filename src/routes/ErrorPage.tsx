import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error: any = useRouteError();

    return (
        <div>
            <div className="error-page">
                <div className="error-box">
                    <div>Oops!</div>
                    <div>An unexpected error has occured.</div>
                    <div>{error.statusText || error.message}</div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
