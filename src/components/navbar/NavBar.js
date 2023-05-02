import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import Button from "../button/Button";


function NavBar() {

    const navigate = useNavigate();

    function signOut() {
        //toggleAuth(false);
        navigate("/landing-page");
    }

    return(
        <nav className="outer-container">
            <div className="inner-container">
                <ul className="nav-container">

                    {/*<li>
                        <NavLink
                            to="/landing-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Landing Page
                        </NavLink>
                    </li>*/}

                    {/*Is de gebruiker ingelogd? Laat dan alle pagina's zien, en anders alleen de home, register en login knoop */}

                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Home
                        </NavLink>
                    </li>


                    {/*<li>
                        <NavLink
                            to="/registration-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Register
                        </NavLink>
                    </li>*/}


                    {/*<li>
                        <NavLink
                            to="/login-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Login
                        </NavLink>
                    </li>*/}


                    <li>
                        <NavLink
                            to="/berry-search-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Search Berry
                        </NavLink>
                    </li>


                    <li>
                        <NavLink
                            to="/berry-overview-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Berry List
                        </NavLink>
                    </li>

                            <li>
                                <Button
                                    type="button"
                                    clickHandler={signOut}
                                >Sign Out
                                </Button>
                            </li>


                </ul>
            </div>

        </nav>

    );
}

export default NavBar;

