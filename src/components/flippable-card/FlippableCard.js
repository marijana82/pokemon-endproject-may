import "./FlippableCard.css";

import React from "react";
import Card from "../card-to-flip/Card";
import {CSSTransition} from "react-transition-group";
import { useState} from "react";

function FlippableCard() {

    const [showFront, setShowFront] = useState(true);


    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames="flip"
            >
                <Card
                    onClick={() => {
                    setShowFront((valueCard) => !valueCard );

                }}
                />
            </CSSTransition>


        </div>
    )
}

export default FlippableCard;