import "./NaturalGiftType.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "../card/BerryCard";

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
                    <ul className="pokemon-result-list">
                        {naturalGift && naturalGift.pokemon.slice(0,20).map((name) => {
                            return(
                                <li key={name.pokemon.name}>
                                    {name.pokemon.name}
                                </li>
                            )
                        })}
                    </ul>
                </>

                :

                <p>No Pokemon names found!</p>

            }

        </div>


    );
}
export default NaturalGiftType;