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
import MyCart from "../components/pages/myCart/MyCart";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('https://assignment-10-puce.vercel.app/brand')
            },
            {
                path: '/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: '/updateProduct/:id',
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-puce.vercel.app/product/single/${params.id}`)
            },
            {
                path: '/detailsProduct/:id',
                element:<PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-puce.vercel.app/product/single/${params.id}`)
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
                path: '/myCart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch(`https://assignment-10-puce.vercel.app/addedProduct`)
            },
            {
                path: '/brand/:name',
                element:<BrandDesign></BrandDesign>,
                loader: ({params}) => fetch(`https://assignment-10-puce.vercel.app/brand/${params.name}`)
            },
            {
                path: '/product',
                element:<BrandCards></BrandCards>,
            },
        ]
    },
]);

export default router;