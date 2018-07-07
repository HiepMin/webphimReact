import React from "react";
import HomePage from "./../Pages/HomePage/HomePage.jsx";
import AminPage from "./../Pages/AdminPage/AdminPage.jsx";
import NotFoundPage from "./../Pages/NotFoundPage/NotFoundPage.jsx";

const RouterConfig = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage />
    },
    {
        path : "/home",
        exact : true,
        main : () => <HomePage />
    },
    {
        path : "/admin",
        exact : true,
        main : () => <AminPage />
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage />
    }
]
export default RouterConfig;