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
                            <h2>Berry Name: {berryDetails.name}</h2>
                            <h2>Flavor:{flavorBerry.flavor.name}</h2>
                            <h2>Natural gift type: {berryDetails.natural_gift_type.name}</h2>
                            <h2>Type of Pokemon that
                                likes {flavorBerry.flavor.name} taste: {berryDetails.natural_gift_type.name}</h2>
                        </div>
                    )
                }
            })
            }




        </>
    )
}

export default BerryData;

