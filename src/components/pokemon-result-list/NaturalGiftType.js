import "./NaturalGiftType.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function NaturalGiftType({ berryToPoke }) {

    const [naturalGift, setNaturalGift] = useState("");

    useEffect(() => {
        async function fetchNaturalTypeUrl() {

            try {
                const responseNaturalGift = await axios.get(berryToPoke);
                console.log(responseNaturalGift.data);
                setNaturalGift(responseNaturalGift.data);
                getTypesUrl(responseNaturalGift.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchNaturalTypeUrl();

        function getTypesUrl(urlTypes) {
            urlTypes.map((type) => {
                async function fetchUrlType() {
                    try {
                        const responseType = await axios.get(`${type.url}`);
                        console.log(responseType.data.results);

                    } catch(e) {
                        console.error(e);
                    }
                }
                fetchUrlType();

            });

        }

    }, [berryToPoke]);



    return(

        <div className="container-pokemon-results">
            {naturalGift.name ?

                <>
                    <h2>List of {naturalGift.name} pokemon: </h2>
                    <ol className="pokemon-result-list">
                        {naturalGift && naturalGift.pokemon.slice(0,20).map((name) => {
                            return(
                                <li key={name.pokemon.name}>
                                   <h3>{name.pokemon.name}</h3>
                                </li>
                            )
                        })}
                    </ol>
                </>

                :

                <p>No Pokemon names found! Please try again or go <Link to={"/berry-overview-page"}>here</Link> for a full berry list.</p>

            }

        </div>


    );
}
export default NaturalGiftType;