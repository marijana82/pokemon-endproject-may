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
import NavBar from "./components/navbar/NavBar";
import {LoginContext} from "./context/LoginContext";





function App() {

    const {isAuthenticated} = useContext(LoginContext);

    //beveiling van pagina's, simpele versie
    //1. step 1: create a variable with a boolean true
    //2. step 2: create Private Route
    //3. step 3: create conditional rendering/ternary operator {}
    //const isLoggedIn = true;

    //I should change the name of this state when i found out where i used it
    const [isAuthorized, toggleIsAuthorized] = useState(false);

  return (
      <>
          <NavBar/>


          <Routes>

              <Route path="/landing-page" element={<LandingPage/>}/>

              <Route path="/" element={<HomePage/>} />

              <Route path="/registration-page" element={<RegistrationPage/>}/>

              <Route path="/login-page" element={<LoginPage isAuthenticated={toggleIsAuthorized}/>} />
              {/*<Route path="/login-page" element={<LoginPage/>} />*/}


              {/*<Route path="/berry-search-page" element={isAuthenticated ? <BerrySearch/> : <Navigate to={"/login-page"} />} />*/}
              <Route path="/berry-search-page" element={isAuthenticated ? <BerrySearch/> : <RegistrationPage/>} />


              <Route path="/berry-overview-page/" element={isAuthenticated ? <BerryOverviewPage/> : <RegistrationPage/> } />

              <Route path="/berry-individual-page/:id" element={<BerryIndividualPage/>} />
                  {/*//1. here I us dynamic url /:id*/}

              {/*<Route path="*" element={<ErrorPage/>} />*/}


          </Routes>





      </>
  );
}

export default App;
