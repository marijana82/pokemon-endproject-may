import "./Form.css";
import React, { useState } from "react";
import Button from "../button/Button";
import InputForm from "../input-form/InputForm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Form({ toggleAuth }) {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [repeatPassValue, setRepeatPassValue] = useState("");

    //use state for registration
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [endpointRegistration, setEndpointRegistration] = useState(" https://polar-lake-14365.herokuapp.com/api/auth/signup");

    const navigate = useNavigate();

    //async function made to handle registration, connected to the form and the submit button
    async function onSubmitRegistration() {
        try {
            //here comes endpoint for registration
            const response = await axios.post(endpointRegistration, {
                //here comes data we need to send to backend
                //at this moment it's hard coded data, but instead there should be state variables (the ones that the user fills in the form)
                username: {nameValue},
                email: {emailValue},
                password: {passwordValue},
                role: ["user"]
            });
            console.log(response);
            setRegisterSuccess(true);

        } catch(e) {
            console.error(e);

        }
    }

    //toggleAuth works ok!
    function handleSubmit(e) {
        e.preventDefault();
       // toggleAuth(true);
        navigate("/login-page");
        console.log("Info:" + nameValue )
        //is this function still missing something?
        onSubmitRegistration();
    }

    function handleReset() {
        setNameValue("");
        setEmailValue("");
        setPasswordValue("");
        setRepeatPassValue("");
    }


    return(

        <form
            className="registration-form"
            onSubmit={handleSubmit}
        >
            <div className="container-register-form">
                <p className="title-registration-form">Registration form</p>
                <p>Please fill in the registration form and press the Register button in order to create account.</p>

                <InputForm
                    labelText="Your precious name"
                    idAttribute="name"
                    inputType="text"
                    placeholder="Name please"
                    nameAttribute="name"
                    stateValue={nameValue}
                    stateSetter={setNameValue}
                />

                {/*Check how to write this more economically
                {nameValue.length > 20 && <p>Your seems to be getting longer and longer, are you sure you are typing it correctly?</p>}
                {nameValue.length === 0 && <p>Please type in your first and last name.</p>}*/}


                <InputForm
                    labelText="Your unique email"
                    idAttribute="email"
                    inputType="email"
                    placeholder="Email please"
                    nameAttribute="email"
                    stateValue={emailValue}
                    stateSetter={setEmailValue}
                />

                {/*Write conditional rendering for checking is email is valid*/}

                <InputForm
                    labelText="Your secret password"
                    idAttribute="password"
                    inputType="password"
                    placeholder="Psssst...your password"
                    nameAttribute="password"
                    stateValue={passwordValue}
                    stateSetter={setPasswordValue}
                />

                {/*Write conditional rendering for checking is password is valid*/}


                <InputForm
                    labelText="Repeat your password"
                    idAttribute="password-repeat"
                    inputType="password"
                    placeholder="Psssst...repeat your password"
                    nameAttribute="password-repeat"
                    stateValue={repeatPassValue}
                    stateSetter={setRepeatPassValue}
                />

                {/*Write conditional rendering for checking if repeated password is valid*/}


                <Button
                    className="registration-button"
                    type="submit"
                    clickHandler={handleSubmit}
                    disabled={nameValue === "" &&
                        emailValue === "" &&
                        passwordValue === "" &&
                        repeatPassValue === ""
                }
                >
                    Register
                </Button>

                <Button
                    type="button"
                    clickHandler={handleReset}
                >Reset All
                </Button>

            </div>

            {registerSuccess && <p>You have been successfully registered! <Link to={"/login-page"}>You can now log in!</Link></p>}


                <div className="container-sign-in">
                    <p>Already have an account? <Link to={"/login-page"}>Sign in here!</Link></p>
                </div>


        </form>

    );
}

export default Form;