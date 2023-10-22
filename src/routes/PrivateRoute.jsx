import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import { AuthContext } from "../components/provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <>
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </>
    }

    if (user) {
        return children
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;