import "./BerrySearch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Query from "../../components/query-field/Query";
import NaturalGiftType from "../../components/pokemon-result-list/NaturalGiftType";
import BerryData from "../../components/berry-data/BerryData";
import Main from "../../components/main/Main";
import PageHeader from "../../components/header/PageHeader";
import Footer from "../../components/footer/Footer";
import {Link} from "react-router-dom";


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

        // ===> this is update-effect, meaning that:
        // this useEffect depends on the state variable,
        // so when this state variable gets updated,
        // then this use-Effect gets called for
        // and the function within it gets executed!

    }, [searchItem]);

    return(
        <>
            <PageHeader
                message="Search Your Berry!"
            />

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
                    <p>Or click <Link to={"/berry-overview-page"}>here</Link> for a full berry list.</p>
                </div>

            }

            </Main>


            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    );

}

export default BerrySearch;
