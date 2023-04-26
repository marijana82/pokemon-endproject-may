import React, { useState } from "react";
import './App.css';
import axios from "axios";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import BerrySearch from "./pages/berry-search/BerrySearch";
import NavBar from "./components/navbar/NavBar";
import RegistrationPage from "./pages/register/RegistrationPage";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import BerryOverviewPage from "./pages/berry-overview/BerryOverviewPage";
import BerryIndividualPage from "./pages/berry-individual/BerryIndividualPage";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";



function App() {
  return (

      <>

          <NavBar/>

          <Switch>

              <Route path="/landing-page">
                  <LandingPage/>
              </Route>

              <Route exact path="/">
                  <HomePage/>
              </Route>

              <Route path="/registration-page">
                  <RegistrationPage/>
              </Route>

              <Route path="/login-page">
                  <LoginPage/>
              </Route>

              <Route path="/berry-search-page">
                  <BerrySearch/>
              </Route>

              <Route path="/berry-overview-page">
                  <BerryOverviewPage/>
              </Route>

              <Route path="/berry-individual-page/:id">
                  {/*//1. here I us dynamic url /:id*/}
                  <BerryIndividualPage/>
              </Route>

              <Route path="/error-page">
                  <ErrorPage/>
              </Route>



          </Switch>




      </>
  );
}

export default App;
