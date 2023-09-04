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
                <div className="content-box-landing-page">

                    <div className="content-flippable">
                        <FlippableLanding/>
                    </div>

                    <div className="content-non-flippable">
                        <article>
                            <h2>This is poke berry app, your favorite application for pokemon and their berries!</h2>
                            <p>A simple application to keep your pokemon in one place and let them eat those berries.</p>
                        </article>
                    </div>

                </div>






            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    );
}

export default LandingPage;