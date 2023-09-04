import "./SearchBar.css";
import PokemonData from "../pokemon-data/PokemonData";
import {Link} from "react-router-dom";
import React from "react";

function SearchBar({ placeholder, pokeDetails }) {

    //here we put everything related to searching and filtering the data
    return(
        <div className="search">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder={placeholder}
                />
                <div className="search-icon"></div>
            </div>
            <div className="data-result">
                {Object.keys(pokeDetails).length > 0

                    &&

                    <article className="berry-result-container">

                        <p>Pokemon type:</p>

                        {pokeDetails.types && pokeDetails.types.map((typePoke) => {
                            return(
                                <>
                                    <ul className="pokemon-result-list">
                                        <li key={typePoke.type.name}>
                                            <h3>{typePoke.type.name}</h3>
                                        </li>
                                    </ul>


                                </>

                            );
                        })}



                    </article>



                }


            </div>
        </div>
    )
}

export default SearchBar;