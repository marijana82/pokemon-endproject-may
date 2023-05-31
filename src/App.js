import React, {useContext, useState} from "react";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import BerrySearch from "./pages/berry-search/BerrySearch";
import RegistrationPage from "./pages/register/RegistrationPage";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import BerryIndividualPage from "./pages/berry-individual/BerryIndividualPage";
import BerryOverviewPage from "./pages/berry-overview/BerryOverviewPage";
import HomePage from "./pages/home-page/HomePage";
import Profile from "./pages/profile/Profile";
import NavBar from "./components/navbar/NavBar"
import {LoginContext} from "./context/LoginContext";


function App() {

    const {isAuthenticated} = useContext(LoginContext);

  return (
      <>
          <NavBar/>

          <Routes>

              <Route path="/landing-page" element={<LandingPage/>}/>

              <Route path="/" element={<HomePage/>} />

              <Route path="/profile-page" element={isAuthenticated ? <Profile/> : <RegistrationPage/>} />

              <Route path="/registration-page" element={<RegistrationPage/>}/>

              <Route path="/login-page" element={<LoginPage/>} />

              <Route path="/berry-search-page" element={isAuthenticated ? <BerrySearch/> : <RegistrationPage/>} />

              <Route path="/berry-overview-page/" element={isAuthenticated ? <BerryOverviewPage/> : <RegistrationPage/> } />

              <Route path="/berry-individual-page/:id" element={<BerryIndividualPage/>} />

              {/*<Route path="*" element={<ErrorPage/>} />*/}


          </Routes>





      </>
  );
}

export default App;
