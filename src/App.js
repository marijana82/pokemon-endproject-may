import React, {useContext, useState} from "react";
import './App.css';
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";

import BerrySearch from "./pages/berry-search/BerrySearch";

import RegistrationPage from "./pages/register/RegistrationPage";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import BerryIndividualPage from "./pages/berry-individual/BerryIndividualPage";

import BerryOverviewPage from "./pages/berry-overview/BerryOverviewPage";
import HomePage from "./pages/home-page/HomePage";

import {LoginContext} from "./context/LoginContext";



function App() {

    const {test} = useContext(LoginContext);
    console.log(test);

    //beveiling van pagina's, simpele versie
    //1. step 1: create a variable with a boolean true
    //2. step 2: create Private Route
    //3. step 3: create conditional rendering/ternary operator {}
    //const isLoggedIn = true;

    //const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
          {/*<NavBar isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>*/}


          <Routes>

              <Route path="/landing-page" element={<LandingPage/>}/>

              <Route path="/" element={<HomePage/>} />

              <Route path="/registration-page" element={<RegistrationPage/>}/>

              {/*<Route path="/login-page" element={<LoginPage toggleAuth={toggleIsAuthenticated}/>} />*/}
              <Route path="/login-page" element={<LoginPage/>} />


              {/*<Route path="/berry-search-page" element={isAuthenticated ? <BerrySearch/> : <Navigate to={"/login-page"} />} />*/}
              <Route path="/berry-search-page" element={<BerrySearch/>} />


              <Route path="/berry-overview-page/" element={ <BerryOverviewPage/> } />

              <Route path="/berry-individual-page/:id" element={<BerryIndividualPage/>} />
                  {/*//1. here I us dynamic url /:id*/}

              {/*<Route path="*" element={<ErrorPage/>} />*/}


          </Routes>





      </>
  );
}

export default App;
