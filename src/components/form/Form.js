import "./Form.css";
import React, { useState } from "react";
import Button from "../button/Button";
import InputForm from "../input-form/InputForm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//REGISTRATION FORM!!!
function Form() {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [optionalInfoUser, setOptionalInfoUser] = useState("");
    const [userRole, setUserRole] = useState("");
    //state for functionality
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    //state for registration
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const navigate = useNavigate();

    //async function made to handle registration, connected to the form and the submit button
    async function onSubmitRegistration(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            //endpoint for registration
                const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                //data we need to send to backend
                    username: nameValue,
                    email: emailValue,
                    password: passwordValue,
                    info: optionalInfoUser,
                    role: userRole,

            });
                //no authorization header!
            console.log(response);
            setRegisterSuccess(true);
            navigate("/login-page");

        } catch(error) {
            console.error(error);
        }
    }

    function handleReset() {
        setNameValue("");
        setEmailValue("");
        setPasswordValue("");
        setUserRole("");
        setOptionalInfoUser("");
    }


    return(

        <form
            className="registration-form"
            onSubmit={onSubmitRegistration}
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

                {/*Write conditional rendering for checking if email is valid*/}

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
                    labelText="Additional information"
                    idAttribute="text"
                    inputType="text"
                    placeholder="Where do you come from?"
                    nameAttribute="additional information"
                    stateValue={optionalInfoUser}
                    stateSetter={setOptionalInfoUser}
                />

                <InputForm
                    labelText="Your role"
                    idAttribute="text"
                    inputType="text"
                    placeholder="What is your role?"
                    nameAttribute="role"
                    stateValue={userRole}
                    stateSetter={setUserRole}
                />

                {error && <p>This account already exists. Try registering with a different username and email.</p>}

                <Button
                    className="registration-button"
                    type="submit"
                    disabled={nameValue === "" &&
                        emailValue === "" &&
                        passwordValue === "" &&
                        userRole === "" &&
                        optionalInfoUser === ""
                }
                > Register
                </Button>


                <Button
                    type="button"
                    clickHandler={handleReset}
                >Reset All
                </Button>

            </div>

            {registerSuccess && <p>You have been successfully registered! <Link to={"/login-page"}>You can now log in!</Link></p>}


                <div className="container-sign-in">
                    <p>Already have an account? <Link to={"/login-page"}>Log in here!</Link></p>
                </div>


        </form>

    );
}

export default Form;