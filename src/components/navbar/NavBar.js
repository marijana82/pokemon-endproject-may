import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React from "react";


function NavBar() {
    return(
        <nav className="outer-container">
            <div className="inner-container">
                <ul className="nav-container">

                    <NavLink
                        to="/landing-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Landing Page
                    </NavLink>

                    <NavLink
                        to="/"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Home
                    </NavLink>


                    <NavLink
                        to="/registration-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Register
                    </NavLink>

                    <NavLink
                        to="/login-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Login
                    </NavLink>

                    <NavLink
                        to="/berry-search-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Search Berry
                    </NavLink>


                    <NavLink
                        to="/berry-overview-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Berry List
                    </NavLink>


                </ul>
            </div>

        </nav>

    );
}

export default NavBar;

