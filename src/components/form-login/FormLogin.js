import "./FormLogin.css";
import React, {useContext, useState} from "react";
import InputForm from "../input-form/InputForm";
import Button from "../button/Button";
import {Link, useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginContext";


function FormLogin({ toggleAuth }) {
    const [nameLogin, setNameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const { loginFunction } = useContext(LoginContext);

    const navigate = useNavigate();

//toggleAuth works ok!
    function handleSubmit(e) {
        e.preventDefault();
        loginFunction();
        navigate("/berry-search-page");
    }

    function handleReset() {
        setNameLogin("");
        setPasswordLogin("");
    }


    return(

            <form
                className="registration-form"
                onSubmit={handleSubmit}
            >
                <div className="container-register-form">
                    <p className="title-registration-form">Login form</p>
                    <p>Please fill in the login form and press the Log in button in order to log in.</p>

                    <InputForm
                        labelText="Your precious name"
                        idAttribute="name"
                        inputType="text"
                        placeholder="Name please"
                        nameAttribute="name"
                        stateValue={nameLogin}
                        stateSetter={setNameLogin}
                    />

                    {/*Check how to write this more economically
                {nameValue.length > 20 && <p>Your seems to be getting longer and longer, are you sure you are typing it correctly?</p>}
                {nameValue.length === 0 && <p>Please type in your first and last name.</p>}*/}



                    <InputForm
                        labelText="Your secret password"
                        idAttribute="password"
                        inputType="password"
                        placeholder="Psssst...your password"
                        nameAttribute="password"
                        stateValue={passwordLogin}
                        stateSetter={setPasswordLogin}
                    />

                    {/*Write conditional rendering for checking is password is valid*/}


                    <Button
                        className="registration-button"
                        type="submit"
                        clickHandler={handleSubmit}
                        disabled={nameLogin === "" &&
                            passwordLogin === ""
                        }
                    >Log in
                    </Button>

                    <Button
                        type="button"
                        clickHandler={handleReset}
                    >Reset All
                    </Button>

                </div>


                <div className="container-sign-in">
                    <p>Don't have an account yet? <Link to="/registration-page"><p className="link-text">Register here!</p></Link></p>

                </div>


            </form>

    );
}

export default FormLogin;