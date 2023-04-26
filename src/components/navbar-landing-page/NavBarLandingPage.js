import "./NavBarLandingPage.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBarLandingPage() {
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
                        to="/registration-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Register
                    </NavLink>

                    <NavLink
                        to="/login-page"
                        className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                    >Login
                    </NavLink>





                </ul>
            </div>
        </nav>


    );
}

export default NavBarLandingPage;
