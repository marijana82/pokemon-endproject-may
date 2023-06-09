import "./InputForm.css";
import React from "react";


function InputForm({ labelText, inputType, placeholder, nameAttribute, idAttribute, stateValue, stateSetter }) {


    return(

        <div className="label-container">
            <label
                htmlFor={idAttribute}>
                {labelText}

                <input
                    type={inputType}
                    placeholder={placeholder}
                    name={nameAttribute}
                    id={idAttribute}
                    value={stateValue}
                    onChange={(e) => stateSetter(e.target.value)}
                />

            </label>
        </div>



    );
}

export default InputForm;