import "./FirstTab.css";
import React from "react";
import PokemonSearch from "../../pages/pokemon-search/PokemonSearch";


function FirstTab() {
    return(
        <div className="first-tab">
            {/*First tab content will go here*/}
            <PokemonSearch/>
        </div>
    )
}

export default FirstTab;