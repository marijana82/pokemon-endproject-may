import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";

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

    //beveiling van pagina's, simpele versie
    //1. step 1: create a variable with a boolean true
    //2. step 2: create Private Route
    //3. step 3: create conditional rendering/ternary operator {}
    const isLoggedIn = true;

    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (

      <>

          <NavBar isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>

          <Routes>

              <Route path="/landing-page" element={<LandingPage/>}/>

              <Route path="/" element={<HomePage/>}/>


              <Route path="/registration-page" element={<RegistrationPage/>}/>

              <Route path="/login-page" element={<LoginPage toggleAuth={toggleIsAuthenticated}/>} />


              <Route path="/berry-search-page" element={isAuthenticated ? <BerrySearch/> : <Navigate to={"/login-page"} />} />


              <Route path="/berry-overview-page/:id" element={isAuthenticated ? <BerryOverviewPage/> : <Navigate to={"/login-page"} />} />

              <Route path="/berry-individual-page/:id" element={<BerryIndividualPage/>} />
                  {/*//1. here I us dynamic url /:id*/}

              <Route path="*" element={<ErrorPage/>} />


          </Routes>




      </>
  );
}

export default App;
