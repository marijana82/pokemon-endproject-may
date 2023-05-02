import React from 'react';
import "./Button.css";


function Button({ type, clickHandler, disabled, children }) {
    return (
        <button
            type={type}
            onClick={clickHandler}
            disabled={disabled || false}

        >
            {children}
        </button>
    );
}

export default Button;