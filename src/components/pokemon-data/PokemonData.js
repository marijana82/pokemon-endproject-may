import "./PokemonData.css";
import React from "react";
import Card from "../card-to-flip/Card";
import HoverCard from "../hover-card/HoverCard";


function PokemonData({ pokeDetails }) {
    return(
        <>
            {/*<div className="hover-card-container">
                <div className="card-hover">
                    <div className="image-container">
                        <img src={pokeDetails.sprites.other.dream_world.front_default} alt="image-of-pokemon"/>
                    </div>
                    <div className="content">
                        <h2>{pokeDetails.name}</h2>
                        <p>Height: {pokeDetails.height} cm</p>
                        <p>Weight: {pokeDetails.weight} kg</p>*/}

                        {pokeDetails.types && pokeDetails.types.map((typePoke) => {
                            return(
                                <>
                                    <HoverCard
                                        assets={pokeDetails.sprites.other.dream_world.front_default}
                                        title={pokeDetails.name}
                                        height={pokeDetails.height}
                                        weight={pokeDetails.weight}
                                        type={typePoke.type.name}
                                    />

                                    {/*<ul>
                                        <li key={typePoke.type.name}>
                                            <p>{typePoke.type.name}</p>
                                        </li>
                                    </ul>*/}
                                </>
                            )
                        })}

                 {/*   </div>
                </div>
            </div>*/}

          {/* <p>Pokemon type:</p>
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
            })}*/}


        </>
    )
}

export default PokemonData;