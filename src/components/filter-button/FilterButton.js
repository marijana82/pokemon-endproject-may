import React from "react";



function FilterButton({  type, value, clickHandler, children }) {

    return(
        <button
            type={type}
            value={value}
            onClick={clickHandler}
        >
            {children}
        </button>
    )
}

export default FilterButton;