import "./RegistrationPage.css";
import Form from "../../components/form/Form";
import PageHeader from "../../components/header/PageHeader";
import React from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";


function RegistrationPage() {

    const navigate = useNavigate();

    return(

        <>
            <PageHeader
                message="Register!"
            />

            <Form/>
            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>

    );
}

export default RegistrationPage;