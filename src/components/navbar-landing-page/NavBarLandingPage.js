import "./NavBarLandingPage.css";
import NavigationLink from "../navigation-link/NavigationLink";
import React from "react";

function NavBarLandingPage() {
    return(
        <nav className="outer-container">
            <div className="inner-container">
                <ul className="nav-container">

                    <NavigationLink
                        path="/landing-page"
                        activeClass="active-link"
                        labelNav="Landing Page"
                    />


                    <NavigationLink
                        path="/login-page"
                        activeClass="active-link"
                        labelNav="Login"
                    />

                    <NavigationLink
                        path="/register-page"
                        activeClass="active-link"
                        labelNav="Register"

                    />

                </ul>
            </div>
        </nav>


    );
}

export default NavBarLandingPage;
