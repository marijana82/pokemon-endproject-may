import "./Berry.css";
import React, { useState, useEffect } from "react";
import axios from "axios";




function Berry({ endpointOneBerry, query }) {
    const [oneBerry, setOneBerry] = useState(null);
    const [berryFlavor, setBerryFlavor] = useState("");



    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(endpointOneBerry);
                console.log(result.data);
                setOneBerry(result.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchData();


    }, [endpointOneBerry]);

    //const filteredFlavors = oneBerry.flavors.filter((flavor) => {
    //return(
    //flavor.flavor.name === {value}
    // )
    // })
    //AND THEN UNDER IN THE RETURN:
    //filteredFlavors.map((filteredFlavor) => {
    //return(
    // {filteredFlavor.potency > 10 &&
    //<li>{filteredFlavor.name}</li>
    // })
    // })


    return (

        <>

            {oneBerry &&

            <div className="berry-container">
                    <ul>
                        <li><strong>Berry name: {oneBerry.name}</strong></li>
                        <li>Size: {oneBerry.size}</li>
                        <li> Smoothness: {oneBerry.smoothness} </li>
                        <li> Firmness: {oneBerry.firmness.name}</li>
                        <li> Natural gift type: {oneBerry.natural_gift_type.name}</li>
                    </ul>

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
                </div>


            }

        </>
    );

}

export default Berry;



