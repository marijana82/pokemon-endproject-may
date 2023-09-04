import "./Checkbox.css";
import React from "react";

function Checkbox({ label, value, onChange}) {

    return(
        <>
            <label>
                <h3>{label}</h3>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={onChange}
                />
            </label>
        </>
    );
}
export default Checkbox;