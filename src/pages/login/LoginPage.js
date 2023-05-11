import "./LoginPage.css";
import React from "react";
import FormLogin from "../../components/form-login/FormLogin";
import PageHeader from "../../components/header/PageHeader";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";


function LoginPage() {

    const navigate = useNavigate();

    return(
        <>
            <PageHeader
                message="Log in!"
            />

            <Main>
                <FormLogin/>
            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    );
}

export default LoginPage;


