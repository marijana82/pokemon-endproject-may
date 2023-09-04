import "./Compare.css";
import React, { useState } from "react";



function Compare({products}) {

    const [selectedItems, setSelectedItems] = useState([]);

    function addToCompare(item) {
        setSelectedItems((selectedItems) => [...selectedItems, item]);
    }
    //addToCompare();

    function removeFromCompare(item) {
        const filteredItems = selectedItems.filter((product) => product.id !== item.id)
        setSelectedItems(filteredItems);
    }
    //removeFromCompare();


    return(
        <>
        </>
    );
}

export default Compare;