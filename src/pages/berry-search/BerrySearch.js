import "./BerrySearch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Query from "../../components/query-field/Query";
import NaturalGiftType from "../../components/pokemon-result-list/NaturalGiftType";
import BerryData from "../../components/berry-data/BerryData";
import Main from "../../components/main/Main";


function BerrySearch() {

    const [endpointBerry, setEndpointBerry] = useState(`https://pokeapi.co/api/v2/berry`);
    const [searchItem, setSearchItem] = useState("");
    const [berryDetails, setBerryDetails] = useState({});
    //how to catch errors with state?

    useEffect(() => {
        async function fetchBerryData() {
            try {
                const result = await axios.get(endpointBerry);
                console.log(result.data.results);
                getBerryDetails(result.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        if (searchItem) {
            fetchBerryData();
        }

        function getBerryDetails(berries) {

            berries.map((berry) => {

                async function berryDetailsUrl() {
                    try {
                        const response = await axios.get(`${berry.url}`);
                        console.log(response.data);
                        setBerryDetails(response.data);

                    } catch (e) {
                        console.error(e);
                    }
                }


                if (berry.name === searchItem) {
                    berryDetailsUrl();
                }
            });
        }

    }, [searchItem]);

    return(
        <>
            <Main>

            <Query searchItemHandler={setSearchItem}/>

            {Object.keys(berryDetails).length > 0
            && berryDetails.name === searchItem ?

                <article className="berry-result-container">

                    <BerryData berryDetails={berryDetails}/>

                    <NaturalGiftType key={berryDetails.name} berryToPoke={berryDetails.natural_gift_type.url}/>

                </article>

                :

                <div className="empty-berry-card">
                    <p>Or click here for a full berry list.</p>
                </div>

            }

            </Main>

        </>
    );

}

export default BerrySearch;
