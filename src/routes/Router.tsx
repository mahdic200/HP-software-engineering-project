import Home from "@/pages/Home";
import ErrorPage from "../ErrorPage";
import Master from "@/components/layout/Master";
import { createBrowserRouter } from "react-router-dom";
import Bmi from "@/pages/Bmi";
import About from "@/pages/About";
import Help from "@/pages/Help";
import Date from "@/pages/DateTransform";
import Notes from "@/pages/Notes";
import Calculator from "@/pages/Calculator";
import Time from "@/pages/Time";
import Todo from "@/pages/Todo";
import Stopwatch from "@/pages/Stopwatch";
import Area from "@/pages/Area";
import Metromap from "@/pages/Metromap";

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
                element: <Calculator />
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
                path: "time",
                element: <Time />
            },
            {
                path: "notes",
                element: <Notes />
            },
            {
                path: "todo",
                element: <Todo />
            },
            {
                path: "stopwatch",
                element: <Stopwatch />
            },
            {
                path: "area",
                element: <Area />
            },
            {
                path: "metromap",
                element: <Metromap />
            },
        ],
    }
]);

export default router;
