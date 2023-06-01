import "./BerryOverviewPage.css";
import PageHeader from "../../components/header/PageHeader";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Berry from "../../components/berry/Berry";
import Button from "../../components/button/Button";
import FilterButton from "../../components/filter-button/FilterButton";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import {Link} from "react-router-dom";




function BerryOverviewPage({ oneBerryData }) {
    const [berry, setBerry] = useState([]);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/berry");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");
    const [menuItem, setMenuItem] = useState(null);


    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);


            try {
                const result = await axios.get(endpoint);
                setBerry(result.data);
                setMenuItem(result.data);

            } catch(e) {
                console.error(e);
                setError(true);
            }
            toggleLoading(false);

        }
        fetchData();


    }, [endpoint]);



    return(
        <>
            <PageHeader
                message="Berry Paradise"
            />

            <Main>


                <div className="buttons-container">
                    <Button
                        disabled={!berry.previous}
                        clickHandler={() => setEndpoint(berry.previous)}
                    >Previous
                    </Button>

                    <Button
                        disabled={!berry.next}
                        clickHandler={() => setEndpoint(berry.next)}
                    >Next
                    </Button>

                    {/*filter button still not functional*/}
                    <FilterButton
                        type="button"
                        //clickHandler={() => filterBerries()}
                    >Filter Button
                    </FilterButton>

                </div>


            <div className="all-berries-container">
                {berry &&
                    berry.results
                    &&
                    berry.results.map((oneBerry) => {

                        return(
                            <>
                                <Berry
                                    key={`${oneBerry.name}-${oneBerry.url}`}
                                    endpointOneBerry={oneBerry.url}
                                    query={query}
                                />

                            </>
                        )
                    })

                }
            </div>

                <div className="buttons-container">
                    {loading && <p>Berry page is loading...</p>}
                    {error && <p>Oooops...something went wrong...Please try again</p>}
                </div>

                <div className="profile-article">
                    <p>Go to <Link to="/berry-search-page">Search Berry Page</Link></p>
                </div>




            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />



            </>

    );
}

export default BerryOverviewPage;