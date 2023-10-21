import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import ErrorPage from "../components/error/Error";
import Home from "../components/pages/home/Home";
import LogIn from "../components/auth/LogIn";
import Register from "../components/auth/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            },
        ]
    },
]);

export default router;