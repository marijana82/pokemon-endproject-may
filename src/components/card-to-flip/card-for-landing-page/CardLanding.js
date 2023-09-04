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
                    <p>To play some games...</p>
                    <p>...click on this button.</p>
                </div>

                    <Button>
                        Play games
                    </Button>

                <div>
                    <p>Or flip the card...</p>
                    <p>...to learn more about the application.</p>
                </div>

            </div>

            <div className="card-front">
                <div>
                    <p>To learn more about this application...</p>
                    <p>...click on this button.</p>
                </div>

                <Button>
                    Learn more
                </Button>

                <div>
                    <p>Or flip the card to play some games!</p>
                </div>


            </div>


        </div>
    )
}

export default CardLanding;
