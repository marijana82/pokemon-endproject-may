import "./InputTest.css";
import React from "react";


function InputTest({ name, label, inputType, value, handleChange }) {
    return(
        <>
            <label htmlFor={`${name}-field`}>{label}</label>
            <input
                name={name}
                id={`${name}-field`}
                type={inputType}
                value={value}
                onChange={handleChange}

            />
        </>
    );
}

export default InputTest;