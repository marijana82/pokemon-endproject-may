import "./FlippableLanding.css";
import React from "react";
import CardLanding from "../../card-to-flip/card-for-landing-page/CardLanding";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";


function FlippableLanding() {

    const [showFrontLanding, setShowFrontLanding] = useState(true);

    return(
        <div className="flippable-landing-container">
            <CSSTransition
                in={showFrontLanding}
                timeout={300}
                classNames="flip"
            >
                <CardLanding
                onClick={() => {
                    setShowFrontLanding((valueCard) => !valueCard)
                }}
                />

            </CSSTransition>

        </div>
    )
}

export default FlippableLanding;