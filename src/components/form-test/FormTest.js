import "./FormTest.css";
import React, {useState} from "react";
import InputTest from "../input-test/InputTest";
import Button from "../button/Button";

function FormTest() {

    //const [auth, setAuth] = useState(false);

    //this is also a correct initial state
    const [formState, setFormState] = useState({
        firstname: "",
        password: "",
        agreeTerms: false,
    });

    function handleFormChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [inputName]: inputValue,

        });
    }


    function handleSubmit(e) {
        //here actually has to come axios post!!!!
        e.preventDefault();
        console.log(formState);
    }



    return(
        <form
        onSubmit={handleSubmit}>

            <section>
                <InputTest
                    name="firstname"
                    label="First Name"
                    inputType="text"
                    value={formState.firstname}
                    handleChange={handleFormChange}

                />
            </section>
            <section>
                <InputTest
                    name="password"
                    label="Password"
                    inputType="password"
                    value={formState.password}
                    handleChange={handleFormChange}
                />
            </section>

            <Button
                type="submit"
                clickHandler={handleSubmit}
            >Form Test Button
            </Button>

        </form>
    );
}

export default FormTest;