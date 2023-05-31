import "./BerryOverviewPage.css";
import PageHeader from "../../components/header/PageHeader";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Berry from "../../components/berry/Berry";
import Button from "../../components/button/Button";
import FilterButton from "../../components/filter-button/FilterButton";




function BerryOverviewPage({ oneBerryData }) {
    const [berry, setBerry] = useState([]);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/berry");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");
    const [menuItem, setMenuItem] = useState(null);
    const [button, setButton] = useState([]);


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
                message="This is Berry Overview Page"
            />

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

            <FilterButton
                type="button"
                //clickHandler={() => filterBerries()}
            >Filter Button
            </FilterButton>

            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    value={query}
                />

            </div>

            <div>
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

            {loading && <p>Berry page is loading...</p>}
            {error && <p>Oooops...something went wrong...</p>}

            </>

    );
}

export default BerryOverviewPage;