import "./Berry.css";
import React, { useState, useEffect } from "react";
import axios from "axios";



function Berry({ endpointOneBerry }) {
    const [oneBerry, setOneBerry] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(endpointOneBerry);
                console.log(result.data);
                setOneBerry(result.data);

            } catch(e) {
                console.error(e);
            }
        }

        fetchData();


    }, [endpointOneBerry]);




    return(
        <section className="berry-container">
            {oneBerry &&
                <>
                    <div className="berry-list">
                        <h2>Name: </h2>
                        <p>{oneBerry.name}</p>
                        <h4>Size: </h4>
                        <p>{oneBerry.size}</p>
                        <h4>Smoothness: </h4>
                        <p>{oneBerry.smoothness}</p>
                    </div>

                    <ul className>
                        {oneBerry.flavors.map((flavor) => {
                            return(
                                <li key={`${flavor.flavor.name}-${oneBerry.name}`}>
                                    {flavor.potency > 0
                                        &&
                                        <>
                                            <p>Flavor: {flavor.flavor.name}</p>
                                            <p>Potency: {flavor.potency}</p>

                                        </>
                                    }
                                </li>
                            )
                        })

                        }
                    </ul>
                </>

            }

        </section>
    )
}


export default Berry;