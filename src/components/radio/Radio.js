import "./Radio.css";
import React from "react";


function Radio({ label, value, onChange, checked }) {
    return(
        <>

            <input
                type="radio"
                id={label}
                value={value}
                checked={value === checked}
                onChange={onChange}
            />
            <label htmlFor={label}>{label}</label>

            {/*<label>
                <h3>{label}</h3>
                <input
                    type="radio"
                    id={value}
                    checked={value === checked}
                    onChange={onChange}
                />
            </label>*/}

        </>

    );
}

export default Radio;
