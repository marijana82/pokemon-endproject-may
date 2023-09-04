import "./CheckboxForm.css";
import React, { useState } from "react";


//this is a component, i imported it in the parent, i gave it a prop and the prop description, and then i passed the prop to this component
//and now, how to do the same but with data?
//make a new component where i will only have a list of berry names
//in this case, initialBerries is a destructured prop from another component
const initialBerries = {
    cheri: false,
    chesto: false,
    pinap: false,
}
function CheckboxForm({textLabel}) {

    //const [importedBerries, setImportedBerries] = useState("");
    const [pokemonBerries, setPokemonBerries] = useState(initialBerries);
    //const [pokeBerries, setPokeBerries] = useState([]);

    //get a list of all berries
    const berryList = Object.keys(initialBerries);

    return(
        <>
        {/*check this out!*/}
    <form className="textarea-form">
        <fieldset>
            <legend>
                {textLabel}
            </legend>

            {/*Iterate over berries and create a checkbox for each one:*/}

            {berryList.map(option => (
                <div key={option}>
                    <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={pokemonBerries[option] === true}
                        onChange={(event) => setPokemonBerries({
                            ...pokemonBerries,
                            [option]: event.target.checked,
                        })}
                    />
                    <label
                        htmlFor={option}
                    >{option}
                    </label>
                </div>
            ))}
        </fieldset>

        <p>
            <strong>Stored state:</strong>
        </p>
        <p className="output">
            {JSON.stringify(pokemonBerries, null, 2)}
        </p>


    </form>

        </>
    )
}

export default CheckboxForm;