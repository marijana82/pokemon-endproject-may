import "./RadiobuttonDynamic.css";
import React, { useState } from "react";
import Berry from "../berry/Berry";


function RadiobuttonDynamic({firm}) {
    //here comes state storing my full list of berries received from API
    //can I store that list in a variable?
   /* const BERRY_LIST = [
        "pecha",
        "cheri",
        "wiki",
    ];*/

    //this is state storing selected berry/berries
    const [input, setInput] = useState("no input selected");

    return (
        <>
            <form>
                <fieldset>
                    <legend>Select berries:</legend>
                </fieldset>

                    return(
                        <div key={firm}>
                            <input
                                type="radio"
                                name="berry-of-choice"
                                id={firm}
                                value={firm}
                                checked={firm === input}
                                onChange={(event) => setInput(event.target.value)}
                            />
                            <label
                                htmlFor={firm}
                            >{firm}</label>
                        </div>
                    )
            </form>

            <p>Selected berry: {input}</p>




        </>

    );
}
export default RadiobuttonDynamic;