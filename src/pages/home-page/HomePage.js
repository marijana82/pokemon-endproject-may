import React from "react";
import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";


function HomePage() {

    const navigate = useNavigate();

    return(

        <>
            <PageHeader
                message="Home Page!"
            />

            <Main>


                    <Button
                        type="button"
                        clickHandler={() => navigate("/login-page")}
                    >
                        Login
                    </Button>
                    <Button
                        type="button"
                        clickHandler={() => navigate("/registration-page")}
                    >
                        Register
                    </Button>


            </Main>
            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />




        </>

    );
}

export default HomePage;