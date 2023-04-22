import "./Query.css";
import React, { useState } from "react";


function Query({ searchItemHandler }) {

    const [query, setQuery] = useState("");
    function onFormSubmit(e) {
        e.preventDefault();
        console.log("I am searching for something!");
        searchItemHandler(query);

    }

    return(
        <article className="query-container">
            <h1>Search Poke-Berries!</h1>
            <form id="search-form" onSubmit={onFormSubmit}>
                <label
                    htmlFor="query-field">

                    <input
                        type="text"
                        name="query"
                        id="query-field"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        placeholder="Type poke berry here! Example: cheri, figy, pinap, mago, wiki ... "
                    />
                </label>
                <button type="submit" className="berry-search-button">search!</button>
            </form>

            <div id="search-result">

            </div>

        </article>

    );

}

export default Query;

