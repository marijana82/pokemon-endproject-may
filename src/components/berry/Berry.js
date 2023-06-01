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


    return (

        <>

            {oneBerry &&

            <div className="berry-container">

                    <ul>
                        <li><h3>{oneBerry.name}</h3></li>
                        <li>Type: {oneBerry.natural_gift_type.name}</li>
                        <li>{oneBerry.firmness.name}</li>
                        <li>smooth: {oneBerry.smoothness} </li>
                        <li>size: {oneBerry.size}</li>


                    </ul>

                    {oneBerry && oneBerry.flavors.map((flavor) => {

                        return(
                            <ul key={`${flavor.flavor.name}-${oneBerry.name}`} className="berry-results">
                                {flavor.potency > 0

                                    &&

                                    <>
                                        <li>{flavor.flavor.name} | {flavor.potency}</li>
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



