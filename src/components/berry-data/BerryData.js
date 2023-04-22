import "./BerryData.css";
import React from "react";
import axios from "axios";


function BerryData({ berryDetails }) {
    return(
        <>
            {berryDetails.flavors && berryDetails.flavors.map((flavorBerry) => {
                if (flavorBerry.potency > 0) {
                    return (
                        <div className="berry-results">
                            <h2>Berry Name:</h2>
                            <h3>{berryDetails.name}</h3>
                            <h2>Flavor:</h2>
                            <h3>{flavorBerry.flavor.name}</h3>
                            <h2>Natural Gift Type:</h2>
                            <h3>{berryDetails.natural_gift_type.name}</h3>
                            <h2>Pokemon that likes {flavorBerry.flavor.name} taste:</h2>
                            <h3>{berryDetails.natural_gift_type.name}</h3>
                        </div>
                    )
                }
            })
            }

        </>
    )
}

export default BerryData;

