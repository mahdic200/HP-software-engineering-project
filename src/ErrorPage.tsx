import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    var status = null;
    var message = "";

    if (isRouteErrorResponse(error)) {
        if (error.status === 401) {
            message = "unauthenticated !";
        } else if (error.status === 404) {
            status = 404;
            message = "404 not found !";
        }
    } else if (error instanceof Error) {
        message = "Sorry, an unexpected error has occurred.";
    } else {
        message = "there is a trouble with this page !";
    }

    document.title = "Error " + (status ? status : "");

    return (
        <div
            id="error-page"
            className="h-[100vh] text-white bg-cyan-800 flex flex-col justify-center items-center"
        >
            <h1 className="text-[5.5rem] text-teal-300">
                {status || "Oops !"}
            </h1>
            <p className="text-[2.5rem]">{message}</p>
            <p>
                <Link to="/" className="hover:text-teal-400 duration-150">
                    <i>click to go home page</i>
                </Link>
            </p>
        </div>
    );
}
