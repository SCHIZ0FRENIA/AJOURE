import ReactDOM from 'react-dom/client';
import React from 'react';
import Root from "./routes/root";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './main.css';
import Admin from "./Admin/Admin.jsx";
import PassComponent from "./Admin/passComponent.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/manager",
        element: <PassComponent/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
