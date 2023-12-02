import Home from "@/pages/Home";
import ErrorPage from "../ErrorPage";
import Master from "@/components/layout/Master";
import { createBrowserRouter } from "react-router-dom";
import Bmi from "@/pages/Bmi";
import About from "@/pages/About";
import Help from "@/pages/Help";
import Date from "@/pages/DateTransform";
import Notes from "@/pages/Notes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Master />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "bmi",
                element: <Bmi />
            },
            {
                path: "calc",
                element: <Bmi />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "help",
                element: <Help />
            },
            {
                path: "date",
                element: <Date />
            },
            {
                path: "notes",
                element: <Notes />
            },
        ],
    }
]);

export default router;
