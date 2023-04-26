import "./LandingPage.css";
import PageHeader from "../../components/header/PageHeader";
import Footer from "../../components/footer/Footer";
import NavBarLandingPage from "../../components/navbar-landing-page/NavBarLandingPage";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";


function LandingPage() {

    return(
        <>
            <PageHeader
                message="Poke Berry App"
            />
            <Main>
                <Button
                    type="button"
                >
                    Start Now!
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