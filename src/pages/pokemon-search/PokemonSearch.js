import "./PokemonSearch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/main/Main";
import Query from "../../components/query-field/Query";
import {Link} from "react-router-dom";
import PokemonData from "../../components/pokemon-data/PokemonData";
import PokemonResults from "../../components/pokemon-results/PokemonResults";
import SearchBar from "../../components/search-bar/SearchBar";
import Card from "../../components/card-to-flip/Card";


function PokemonSearch() {

    const [endpointPoke, setEndpointPoke] = useState("https://pokeapi.co/api/v2/pokemon");
    const [searchItem, setSearchItem] = useState("");
    const [pokeDetails, setPokeDetails] = useState([]); //i first had {} then changed it to []

    useEffect(() => {

        async function fetchPokeData() {
            try {
                const result = await axios.get(endpointPoke);
                console.log(result.data.results);
                getPokeDetails(result.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        if(searchItem) {
            fetchPokeData();
        }

        function getPokeDetails(pokemons) {
            pokemons.map((pokemon) => {
                async function pokeDetailsUrl() {
                    try {
                        const response = await axios.get(`${pokemon.url}`);
                        console.log(response.data);
                        setPokeDetails(response.data);
                    } catch (e) {
                        console.error(e);
                    }
                }

                if (pokemon.name === searchItem) {
                    pokeDetailsUrl();
                }
            });
        }


    }, [searchItem]);


    return (
        <>
            <PageHeader
                message="Search Your Pokemon!"
            />

            <Main>

                <Query searchItemHandler={setSearchItem}/>

                <SearchBar
                    placeholder = "Enter a pokemon name"
                    pokeDetails={pokeDetails}
                />

                {Object.keys(pokeDetails).length > 0
                    && pokeDetails.name === searchItem ?

                    <article className="berry-result-container">


                        {/*PokemonData is working!*/}
                        <PokemonData pokeDetails={pokeDetails}/>

                        {/*PokemonResults is not working!*/}
                        {/*<PokemonResults key={pokeDetails.name} pokeToBerry={pokeDetails.url}/>*/}

                    </article>

                    :

                    <div className="empty-berry-card">
                        <p>Or click <Link to={"/berry-overview-page"}>here</Link> for a full berry list.</p>
                    </div>


                }


            </Main>




        </>
    );
}

export default PokemonSearch;
