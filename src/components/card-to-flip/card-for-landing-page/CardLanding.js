import "./CardLanding.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";


function CardLanding({ onClick }) {
    const navigate = useNavigate();

    return(
        <div className="card" onClick={onClick}>
            <div className="card-back">

                <div>
                    <p>Click on the button to learn more about this application.</p>
                </div>

                    <Button>
                        Play!
                    </Button>

                <div>
                    <p>Or flip to Start using the application now.</p>
                </div>

            </div>

            <div className="card-front">
                <div>
                    <p>Click on the button to start using this application.</p>
                </div>

                <Button>
                    Start now!
                </Button>

                <div>
                    <p>Or flip to learn more about this application.</p>
                </div>


            </div>


        </div>
    )
}

export default CardLanding;
