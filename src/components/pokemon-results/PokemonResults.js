import "./PokemonResults.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//FIND MISTAKES IN THIS CODE!!!
function PokemonResults( { pokeToBerry }) {
    const [pokeResults, setPokeResults] = useState("");

    useEffect(() => {

        async function fetchPokeResultsUrl() {

            try {
                const responsePokeResults = await axios.get(pokeToBerry);
                console.log(pokeToBerry.data);
                setPokeResults(pokeToBerry.data);
                getTypesUrl();

            } catch (e) {
                console.error(e);
            }
        }
        fetchPokeResultsUrl();

        function getTypesUrl(urlTypes) {
            urlTypes.map((type) => {
                async function fetchUrlType() {

                    try {
                        const responseType = await axios.get(`${type.url}`);
                        console.log(responseType.data.results);

                    } catch (e) {
                        console.error(e);
                    }
                }
                fetchUrlType();


            });
        }

    }, [pokeToBerry]);


    return(
        <>
            <div className="container-pokemon-results">
                {pokeResults.name ?

                    <>
                        <h2>{pokeResults.name}</h2>

                    </>

                    :

                    <p>No Pokemon names found! Please try again or go <Link to={"/berry-overview-page"}>here</Link> for a full berry list.</p>


                }

            </div>


        </>


    );


}

export default PokemonResults;