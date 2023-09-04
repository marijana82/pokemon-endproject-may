import React, {useContext} from "react";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import BerrySearch from "./pages/berry-search/BerrySearch";
import PokemonSearch from "./pages/pokemon-search/PokemonSearch";
import RegistrationPage from "./pages/register/RegistrationPage";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import BerryIndividualPage from "./pages/berry-individual/BerryIndividualPage";
import BerryOverviewPage from "./pages/berry-overview/BerryOverviewPage";
import HomePage from "./pages/home-page/HomePage";
import Profile from "./pages/profile/Profile";
import NavBar from "./components/navbar/NavBar";
import MyFavorites from "./pages/my-favorites/MyFavorites";
import BerryFirmnessPage from "./pages/berry-firmness/BerryFirmnessPage";
//import NotFound!!!
import {LoginContext} from "./context/LoginContext";


function App() {

    const {isAuthenticated} = useContext(LoginContext);

  return (
      <>
          <NavBar/>

          <Routes>

              <Route path="/landing-page" element={<LandingPage/>}/>

              <Route path="/" element={isAuthenticated ? <HomePage/> : <RegistrationPage/> } />

              <Route path="/profile-page" element={isAuthenticated ? <Profile/> : <RegistrationPage/>} />

              {/*EXAMPLE OF BEVEILIGDE ROUTE! Check if I have to write <Navigate to=""/> for every Route which I want to secure!*/}
              <Route path="/profile-page" element={isAuthenticated ? <Profile/> : <Navigate to="/registration-page"/>} />

              <Route path="/registration-page" element={<RegistrationPage/>}/>

              <Route path="/login-page" element={<LoginPage/>} />

              <Route path="/berry-search-page" element={isAuthenticated ? <BerrySearch/> : <RegistrationPage/>} />

              <Route path="/pokemon-search-page" element={isAuthenticated ? <PokemonSearch/> : <RegistrationPage/>} />

              <Route path="/berry-overview-page/" element={isAuthenticated ? <BerryOverviewPage/> : <RegistrationPage/> } />
              <Route path="/berry-overview-page/:id" element={isAuthenticated ? <BerryIndividualPage/> : <RegistrationPage/> } />


              <Route path="/my-favorites-page" element={isAuthenticated ? <MyFavorites/> : <RegistrationPage/>  } />

              <Route path="berry-firmness" element={isAuthenticated ? <BerryFirmnessPage/> : <RegistrationPage/> } />

              {/*<Route path="*" element={<ErrorPage/>} />*/}


          </Routes>





      </>
  );
}

export default App;
