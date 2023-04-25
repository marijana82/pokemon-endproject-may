import "./Form.css";
import Label from "../label/Label";
import Input from "../input/Input";
import Card from "../card/Card";
import Button from "../button/Button";


function Form() {
    return(
        <form className="registration-form">
            <div className="container-register-form">
                <p className="title-registration-form">Registration form</p>
                <p>Please fill in the registration form and press the Register button in order to create account.</p>

                <Label
                    htmlFor="name"
                > Name
                </Label>


                <Input
                    type="text"
                    placeholder="Beautiful Name Here"
                    name="name"
                    id="name"
                />

                <Label
                    htmlFor="email"
                > Pretty Email
                </Label>

                <Input
                    type="email"
                    placeholder="Beautiful Email Here"
                    name="email"
                    id="email"
                />

                <Label
                    htmlFor="password"
                > Pretty Little Password
                </Label>

                <Input
                    type="password"
                    placeholder="Cool Password here"
                    name="password"
                    id="password"
                />

                <Label
                    htmlFor="password-repeat"
                > Repeat Pretty Password
                </Label>

                <Input
                    type="password"
                    placeholder="Repeat Beautiful Password Here"
                    name="password-repeat"
                    id="password-repeat"
                />

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