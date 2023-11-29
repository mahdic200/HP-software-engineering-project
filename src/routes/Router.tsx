import Home from "@/pages/Home";
import ErrorPage from "../ErrorPage";
import Master from "@/components/layout/Master";
import { createBrowserRouter } from "react-router-dom";

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
        ],
    }
]);

export default router;
