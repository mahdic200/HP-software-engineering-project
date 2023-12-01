import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

// routes pages
import router from './routes/Router';
import applyCustomErrorMap from "./utils/ZodErrormap";
applyCustomErrorMap();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
            <ToastContainer />
    </React.StrictMode>
);
