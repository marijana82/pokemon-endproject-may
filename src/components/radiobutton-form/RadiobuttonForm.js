import "./RadiobuttonForm.css";
import React, { useState } from "react";

function RadiobuttonForm() {
    //multiple inputs bound to a single piece of state!
    const [input, setInput] = useState(false);

    //build a form in the return statement
    return(
        <>
            <form>
                <fieldset>
                    <legend>
                        Make your choice!
                    </legend>
                    {/*Input 1*/}
                    <input
                        id="choice-one"
                        type="radio"
                        name="radio-button-test" //name has to be the same for all radio buttons in the group
                        value="no" //insert value into checked
                        checked={input === "no"} //is there a different way of writing this?
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <label
                        htmlFor="choice-one"
                    >No</label>

                    {/*Input 2*/}
                    <input
                        id="choice-two"
                        type="radio"
                        name="radio-button-test"
                        value="yes" //insert value into checked
                        checked={input === "yes"}
                        onChange={(event) => setInput(event.target.value)} //insert event listener to state function setInput
                    />
                    <label
                        htmlFor="choice-two" //htmlFor has to match the id of <input/>
                    >Yes</label>

                    {/*Input 3*/}
                    <input
                        id="choice-three"
                        type="radio"
                        name="radio-button-test"
                        value="maybe"
                        checked={input === "maybe"}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <label
                        htmlFor="choice-three"
                    >Maybe</label>
                </fieldset>
            </form>

            <p>What is it going to be: {input || "Can you make your choice?"}</p>

        </>
    )
}

export default RadiobuttonForm;