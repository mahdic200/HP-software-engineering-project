import Home from "@/pages/Home";
import ErrorPage from "../ErrorPage";
import Master from "@/components/layout/Master";
import { createBrowserRouter } from "react-router-dom";
import Bmi from "@/pages/Bmi";
import About from "@/pages/About";
import Help from "@/pages/Help";

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
        ],
    }
]);

export default router;
