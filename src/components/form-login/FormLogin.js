import "./FormLogin.css";
import React, {useState} from "react";
import InputForm from "../input-form/InputForm";
import Button from "../button/Button";
import {Link} from "react-router-dom";


function FormLogin() {

    const [nameLogin, setNameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        console.log("Info:" + nameLogin )
        //is this function still missing something?
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
                    >
                        Log in
                    </Button>

                </div>


                <div className="container-sign-in">
                    <p>Don't have an account yet? <Link to="/registration-page"><p className="link-text">Register here!</p></Link></p>

                </div>


            </form>

    );
}

export default FormLogin;