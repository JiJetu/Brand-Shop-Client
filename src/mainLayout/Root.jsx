import { Outlet } from "react-router-dom";
import Navbar from "../components/pages/Navbar";

const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;