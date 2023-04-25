import "./Form.css";
import React, { useState } from "react";
import Button from "../button/Button";
import InputForm from "../input-form/InputForm";


function Form() {

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [repeatPassValue, setRepeatPassValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Info:" + nameValue )
        //is this function still missing something?
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
                >
                    Register
                </Button>

            </div>


                <div className="container-sign-in">
                    <p>Already have an account? <a>Sign in here!</a></p>

                </div>


        </form>

    );
}

export default Form;