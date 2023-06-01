import "./RegistrationPage.css";
import Form from "../../components/form/Form";
import PageHeader from "../../components/header/PageHeader";
import React from "react";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";


function RegistrationPage() {

    return(

        <>
            <PageHeader
                message="Register!"
            />

            <Main>
                <Form/>
            </Main>


            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>

    );
}

export default RegistrationPage;