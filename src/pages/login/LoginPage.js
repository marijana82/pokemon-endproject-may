import "./LoginPage.css";
import React from "react";
import FormLogin from "../../components/form-login/FormLogin";
import PageHeader from "../../components/header/PageHeader";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import {Link} from "react-router-dom";


function LoginPage() {

    return(
        <>
            <PageHeader
                message="Log in!"
            />

            <Main>
                <FormLogin/>
                <p>...or click <Link to={"/landing-page"}>here</Link> to go back to landing page!</p>
            </Main>


            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    );
}

export default LoginPage;


