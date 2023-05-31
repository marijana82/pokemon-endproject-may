import "./BerryCard.css";
import React, {useState} from "react";



function BerryCard({ oneBerry }) {

    /*function filterOneBerry(oneBerry) {
        oneBerry.filter((berry) => {
            return berry.name.toLowerCase().includes(value);
        })
    }*/


    return(
        <>

            {oneBerry &&

        <div className="berry-container">
            <ul>
                <li> Berry name: {oneBerry.name} </li>
                <li> Size: {oneBerry.size} </li>
                <li> Smoothness: {oneBerry.smoothness} </li>
                <li> Firmness: {oneBerry.firmness.name}</li>
                <li> Natural gift type: {oneBerry.natural_gift_type.name}</li>

                <>
                    {oneBerry && oneBerry.flavors.map((flavor) => {
                        return(
                            <ul key={`${flavor.flavor.name}-${oneBerry.name}`} className="berry-results">
                                {flavor.potency > 0
                                    &&
                                    <>
                                        <li>Flavor: {flavor.flavor.name}</li>
                                        <li>Potency: {flavor.potency}</li>
                                    </>
                                }
                            </ul>
                        )
                    })
                    }
                </>


            </ul>


        </div>

            }

        </>


    );
}


export default BerryCard;