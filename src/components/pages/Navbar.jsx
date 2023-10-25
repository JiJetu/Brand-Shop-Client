import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../assets/user.png"
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [mode, setMode] = useState("light");
    console.log(user);
    const handleMode = () => {
        const html = document.documentElement
        console.log("object");

        if (mode == "light") {
            html.classList.remove("light")
            html.classList.add("dark")
            setMode("dark")
        }
        else {
            html.classList.remove("dark")
            html.classList.add("light")
            setMode("light")
        }
    }

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>

        {
            user && <>
                <li><NavLink to="/addProduct">Add Product</NavLink></li>
                <li><NavLink to="/myCart">My Cart</NavLink></li>
            </>

        }
    </>

    return (
        <div className="bg-base-200 dark:bg-zinc-800 dark:text-white">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            <div>
                                {
                                    mode == "light" ? <>
                                        <button onClick={handleMode}>
                                            <FaMoon className="text-xl mr-1 md:mr-5"></FaMoon>
                                        </button>
                                    </>
                                        :
                                        <>
                                            <button onClick={handleMode}>
                                                <FaSun className="text-xl mr-1 md:mr-5"></FaSun>
                                            </button>
                                        </>
                                }
                            </div>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn normal-case text-xl">WiredInnovators</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="invisible md:flex items-center justify-center md:visible">
                        {
                            mode == "light" ? <>
                                <button onClick={handleMode}>
                                    <FaMoon className="text-xl mr-1 md:mr-5"></FaMoon>
                                </button>
                            </>
                                :
                                <>
                                    <button onClick={handleMode}>
                                        <FaSun className="text-xl mr-1 md:mr-5"></FaSun>
                                    </button>
                                </>
                        }
                    </div>
                    {
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost hidden md:inline-block btn-circle avatar mr-3">
                                    <div className="w-full rounded-full">
                                        <img
                                            src={user?.photoURL || "./placeholder.svg"}
                                            alt="User photo"
                                            className="h-7 w-7 rounded-full object-cover"
                                        />
                                    </div>
                                </label>
                                <button onClick={handleSignOut} className="btn">SignOut</button>
                            </>

                            : <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle hidden md:inline-block  avatar mr-3">
                                    <div className="w-full rounded-full">
                                        <img src={userDefaultPicture} />
                                    </div>
                                </label>
                                <Link to='/login'>
                                    <button className="btn">LogIn</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;