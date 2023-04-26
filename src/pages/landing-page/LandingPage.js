import "./LandingPage.css";
import PageHeader from "../../components/header/PageHeader";
import Footer from "../../components/footer/Footer";
import NavBarLandingPage from "../../components/navbar-landing-page/NavBarLandingPage";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";


function LandingPage() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/login-page");
    }

    return(
        <>
            <PageHeader
                message="Poke Berry App"
            />
            <Main>
                <Button
                    type="button"
                    clickHandler={handleClick}

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