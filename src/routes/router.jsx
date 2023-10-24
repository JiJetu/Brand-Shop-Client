import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import ErrorPage from "../components/error/Error";
import Home from "../components/pages/home/Home";
import LogIn from "../components/auth/LogIn";
import Register from "../components/auth/Register";
import AddProduct from "../components/pages/addProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import BrandDesign from "../components/pages/home/brand/BrandDesign/BrandDesign";
import BrandCards from "../components/pages/home/brand/BrandDesign/BrandsCards/BrandCards";
import UpdateProduct from "../components/pages/updateProduct/UpdateProduct";
import DetailsCard from "../components/pages/home/brand/BrandDesign/DetailsCard/DetailsCard";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path: '/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: '/updateProduct/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/product/single/${params.id}`)
            },
            {
                path: '/detailsProduct/:id',
                element:<DetailsCard></DetailsCard>,
                loader: ({params}) => fetch(`http://localhost:5000/product/single/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            },
            {
                path: '/brand/:name',
                element:<BrandDesign></BrandDesign>,
                loader: ({params}) => fetch(`http://localhost:5000/brand/${params.name}`)
            },
            {
                path: '/product',
                element:<BrandCards></BrandCards>,
            },
        ]
    },
]);

export default router;