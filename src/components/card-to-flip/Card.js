import "./Card.css";
import Button from "../button/Button";
import { useNavigate} from "react-router-dom";
import React from "react";



function Card({onClick}) {
    const navigate = useNavigate();

    return(
        <div className="card" onClick={onClick}>

            <div className="card-back">

                <Button
                    type="button"
                    clickHandler={() => navigate("/login-page")}
                > Log in
                </Button>
                <p>or flip to register!</p>

            </div>
            <div className="card-front">

                <Button
                    type="button"
                    clickHandler={() => navigate("/registration-page")}
                >
                    Register
                </Button>
                <p>already registered? flip to log in!</p>

            </div>

        </div>
    )
}

export default Card;