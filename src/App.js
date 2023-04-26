import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { Routes, Route } from "react-router-dom";

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

    //beveiling van pagina's, simple example
    //1. step 1: create a variable with a boolean true
    //2. step 2: create Private Route
    //3. step 3: create conditional rendering/ternary operator {}
    //const isLoggedIn = true;

  return (

      <>

          <NavBar/>

          <Routes>

              <Route path="/landing-page" element={<LandingPage/>}/>

              {/*Nova is using Navigate to instead of Redirect to, check it out!!*/}
              <Route exact path="/" element={<HomePage/>}/>


              <Route path="/registration-page" element={<RegistrationPage/>}/>

              <Route path="/login-page" element={<LoginPage/>} />


              <Route path="/berry-search-page" element={<BerrySearch/>} />


              <Route path="/berry-overview-page" element={<BerryOverviewPage/>} />

              <Route path="/berry-individual-page/:id" element={<BerryIndividualPage/>} />
                  {/*//1. here I us dynamic url /:id*/}

              <Route path="*" element={<ErrorPage/>} />


          </Routes>




      </>
  );
}

export default App;
