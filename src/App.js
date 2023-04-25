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
import NavBar from "./components/navbar/NavBar";
import RegistrationPage from "./pages/register/RegistrationPage";
import Main from "./components/main/Main";
import Button from "./components/button/Button";
import Form from "./components/form/Form";


function App() {
  return (

      <>
         <NavBar/>

              <PageHeader
                  message="Poke Berry App"
                  description="The tastiest berries for your Pokemon"
              />

              <BerrySearch/>


          <RegistrationPage/>

          <Form/>


              <Footer
                  message="Copyright PokeBerryApp"
                  description="All Rights Reserved"
              />






      </>

  );
}

export default App;
