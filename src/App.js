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
import Footer from "./components/footer/Footer";


function App() {
  return (

      <>

          <PageHeader
              message="Poke Berry App"
              description="The tastiest berries for your Pokemon"
          />

          <BerrySearch/>

          <Footer
              message="All Rights Reserved"
              description="Copyright PokeBerryApp"
          />

      </>

  );
}

export default App;
