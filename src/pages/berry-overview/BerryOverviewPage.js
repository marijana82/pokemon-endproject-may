import "./BerryOverviewPage.css";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/header/PageHeader";
import React, {useState, useEffect} from "react";
import NavBar from "../../components/navbar/NavBar";
import axios from "axios";
import Berry from "../../components/berry/Berry";
import Button from "../../components/button/Button";


function BerryOverviewPage() {
    const [berry, setBerry] = useState([]);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/berry");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);

            try {
                const result = await axios.get(endpoint);
                setBerry(result.data);

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
            <NavBar/>
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



            <div>
                {berry &&
                    berry.results && berry.results.map((oneBerry) => {
                        return(
                            <>
                                {/*<li key={`${oneBerry.name}-${oneBerry.url}`}>
                                <h3>{oneBerry.name}</h3>
                                <h2>{oneBerry.url}</h2>
                            </li>*/}
                                <Berry key={`${oneBerry.name}`} endpointOneBerry={oneBerry.url}/>
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