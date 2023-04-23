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
                        path="/start-page"
                        activeClass="active-link"
                        labelNav="Start Page"
                    />

                    <NavigationLink
                        path="/"
                        activeClass="active-link"
                        labelNav="Home"
                    />


                    <NavigationLink
                        path="/login"
                        activeClass="active-link"
                        labelNav="Login"
                    />

                    <NavigationLink
                        path="/register"
                        activeClass="active-link"
                        labelNav="Register"

                    />

                    <NavigationLink
                        path="/berry-search"
                        activeClass="active-link"
                        labelNav="Berry"
                    />

                    <NavigationLink
                        path="/pokemon-search"
                        activeClass="active-link"
                        labelNav="Pokemon"
                    />

                    <NavigationLink
                        path="/all-berries"
                        activeClass="active-link"
                        labelNav="Berry List"
                    />

                    <NavigationLink
                        path="/one-berries"
                        activeClass="active-link"
                        labelNav="Berry Info Page"
                    />



                </ul>
            </div>

        </nav>

    );
}

export default NavBar;

