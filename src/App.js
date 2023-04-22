import React, { useState } from "react";
import './App.css';
import axios from "axios";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import BerrySearch from "./pages/berry-search/BerrySearch";
import PageHeader from "./components/header/PageHeader";


function App() {
  return (

      <>

          <PageHeader
              message="Poke Berry Page"
              description="The best place to search for the tastiest berries for your Pokemons"
          />

          <BerrySearch/>

      </>

  );
}

export default App;
