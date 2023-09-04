import "./LandingPage.css";
import PageHeader from "../../components/header/PageHeader";
import Footer from "../../components/footer/Footer";
import NavBarLandingPage from "../../components/navbar-landing-page/NavBarLandingPage";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import {Link, useNavigate} from "react-router-dom";
import React from "react";
import FormTest from "../../components/form-test/FormTest";
import FlippableCard from "../../components/flippable-card/FlippableCard";
import FlippableLanding from "../../components/flippable-card/flippable-for-landing-page/FlippableLanding";
import QuizGame from "../games-page/quiz-game/QuizGame";



function LandingPage() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }


    return(
        <>
            <PageHeader
                message="Poke Berry App"
                description="your favorite application for pokemon and their berries!"
            />


            <Main>
                <div className="content-box-landing-page">

                    <div className="content-box-non-flippable">
                        <caption>
                            <h3>A simple application that helps you keep your pokemon in one place and let them eat those berries.</h3>
                        </caption>

                        <article>
                            <h2>To get a glimpse of what PokeBerry has to offer, click on the card...</h2>
                            <img alt="image of an arrow pointing to the flippable card"/>
                            <p>...or click <Link to={"/registration-page"}>here</Link> to register now!</p>
                        </article>
                    </div>

                    <div className="content-box-flippable">

                        <FlippableLanding/>
                    </div>

                    <QuizGame/>



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