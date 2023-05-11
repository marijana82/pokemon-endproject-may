import "./FormLogin.css";
import React, {useContext, useState} from "react";
import InputForm from "../input-form/InputForm";
import Button from "../button/Button";
import {Link, useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginContext";
import axios from "axios";

//LOGIN FORM!!!
function FormLogin({ toggleAuth }) {
    //const [nameLogin, setNameLogin] = useState("");
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const { isAuthenticated, loginFunction } = useContext(LoginContext);

    const navigate = useNavigate();


    async function logUserIn(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {

                email: emailLogin,
                password: passwordLogin,
            });
            console.log(response.data.accessToken);
            //1. roep de login-functie van de context aan, zodat de rest geregeld kan worden
            //2. pass the following argument to the loginFunction: response.data.accessToken
            //3. pass parameter "token" to function login() in the contect
            loginFunction(response.data.accessToken);


        } catch(e) {
            console.error(e);
        }
    }

    /*function handleSubmit() {
        loginFunction();
        navigate("/berry-search-page");
    }*/


    function handleReset() {
        //setNameLogin("");
        setPasswordLogin("");
        setEmailLogin("");
    }

    //===>POST-request om de ingevulde gegevens naar de backend te versturen
    //==>dan krijgen we een token terug
    //=>en die geven we door aan de context


    return(

            <form
                className="registration-form"
                onSubmit={logUserIn}
            >
                <div className="container-register-form">
                    <p className="title-registration-form">Login form</p>
                    <p>Please fill in the login form and press the Log in button in order to log in.</p>

                    {/*<InputForm
                        labelText="Your precious name"
                        idAttribute="name"
                        inputType="text"
                        placeholder="Name please"
                        nameAttribute="name"
                        stateValue={nameLogin}
                        stateSetter={setNameLogin}
                    />*/}

                    {/*Check how to write this more economically
                {nameValue.length > 20 && <p>Your seems to be getting longer and longer, are you sure you are typing it correctly?</p>}
                {nameValue.length === 0 && <p>Please type in your first and last name.</p>}*/}


                    <InputForm
                        labelText="Your email"
                        idAttribute="email"
                        inputType="email"
                        placeholder="Email please"
                        nameAttribute="email"
                        stateValue={emailLogin}
                        stateSetter={setEmailLogin}

                    />

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
                        //clickHandler={handleSubmit}
                        disabled={emailLogin === "" &&
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
                    <p>Don't have an account yet? <Link to="/registration-page">Register here!</Link></p>

                </div>


            </form>

    );
}

export default FormLogin;