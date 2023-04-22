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


function App() {
  return (

      <>
          <HomePage/>

          <BerrySearch/>

      </>



  );
}

export default App;
