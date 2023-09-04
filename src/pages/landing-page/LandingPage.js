import "./LandingPage.css";
import PageHeader from "../../components/header/PageHeader";
import Footer from "../../components/footer/Footer";
import NavBarLandingPage from "../../components/navbar-landing-page/NavBarLandingPage";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";
import FormTest from "../../components/form-test/FormTest";
import FlippableCard from "../../components/flippable-card/FlippableCard";
import FlippableLanding from "../../components/flippable-card/flippable-for-landing-page/FlippableLanding";



function LandingPage() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }


    return(
        <>
            <PageHeader
                message="Poke Berry App"
            />


            <Main>

                <FlippableLanding/>

                <Button
                    type="button"
                    clickHandler={handleClick}
                >
                    Start Now!
                </Button>

                <Button
                    type="button"
                    clickHandler={() => navigate("/")}
                >
                    About us

                </Button>


            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    );
}

export default LandingPage;