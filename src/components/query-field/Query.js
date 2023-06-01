import "./Query.css";
import React, { useState } from "react";
import Button from "../button/Button";


function Query({ searchItemHandler }) {

    const [query, setQuery] = useState("");
    function onFormSubmit(e) {
        e.preventDefault();
        console.log("I am searching for something!");
        searchItemHandler(query);

    }

    return(
        <article className="query-container">

            <form id="search-form" onSubmit={onFormSubmit}>
                <label
                    htmlFor="query-field">

                    <input
                        type="text"
                        name="query"
                        id="query-field"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        placeholder="cheri, rawst, figy, wiki ..."
                    />
                </label>
                <Button
                    type="submit"
                    className="berry-search-button"
                >search me!</Button>

            </form>

            <div id="search-result">

            </div>

        </article>

    );

}

export default Query;

