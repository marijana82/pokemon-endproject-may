import "./NavBar.css";
import NavigationLink from "../navigation-link/NavigationLink";
import React from "react";



//example for NavBar function/component:

function NavBar() {
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
                        path="/"
                        activeClass="active-link"
                        labelNav="Home"
                    />


                    <NavigationLink
                        path="/registration-page"
                        activeClass="active-link"
                        labelNav="Register"
                    />

                    <NavigationLink
                        path="/login-page"
                        activeClass="active-link"
                        labelNav="Login"
                    />

                    <NavigationLink
                        path="/berry-search-page"
                        activeClass="active-link"
                        labelNav="Berry Search"
                    />

                    <NavigationLink
                        path="/berry-overview-page"
                        activeClass="active-link"
                        labelNav="Berry Overview"
                    />

                   {/* <NavigationLink
                        path="/berry-individual-page"
                        activeClass="active-link"
                        labelNav="Berry Individual"
                    />

                    <NavigationLink
                        path="/error-page"
                        activeClass="active-link"
                        labelNav="Error"
                    />*/}



                </ul>
            </div>

        </nav>

    );
}

export default NavBar;

