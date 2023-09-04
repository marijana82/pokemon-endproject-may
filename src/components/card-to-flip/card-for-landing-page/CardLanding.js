import "./CardLanding.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";


function CardLanding() {
    const navigate = useNavigate();
    return(
        <div className="card-landing">
            <div className="card-back">
                <Button>
                    Play!
                </Button>
                <p>Or flip to Start using the application now.</p>


            </div>

            <div className="card-front">
                <Button>
                    Start now!
                </Button>
                <p>Or flip to learn more about this application.</p>

            </div>


        </div>
    )
}

export default CardLanding;
