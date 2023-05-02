import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React, {useContext} from "react";
import Button from "../button/Button";
import {LoginContext} from "../../context/LoginContext";


function NavBar() {

    const {isAuthenticated, logoutFunction} = useContext(LoginContext);

    return(
        <nav className="outer-container">
            <div className="inner-container">
                <ul className="nav-container">

                    {isAuthenticated ?

                        <>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                                >Home
                                </NavLink>
                            </li>

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
                                    clickHandler={logoutFunction}
                                >Sign Out
                                </Button>
                            </li>

                        </>

                        :

                        <>
                            <li>
                        <NavLink
                            to="/landing-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Landing Page
                        </NavLink>
                             </li>


                            <li>
                        <NavLink
                            to="/registration-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Register
                        </NavLink>
                    </li>


                            <li>
                        <NavLink
                            to="/login-page"
                            className={({isActive}) => isActive === true ? "active-link" : "default-link"}
                        >Login
                        </NavLink>
                    </li>

                        </>
            }

                </ul>
            </div>
        </nav>

    );
}

export default NavBar;

