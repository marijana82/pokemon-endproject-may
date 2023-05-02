import "./LandingPage.css";
import PageHeader from "../../components/header/PageHeader";
import Footer from "../../components/footer/Footer";
import NavBarLandingPage from "../../components/navbar-landing-page/NavBarLandingPage";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";
import FormTest from "../../components/form-test/FormTest";



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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda, deleniti dignissimos exercitationem in iusto labore minima nam, nemo nulla optio, provident quas saepe sed sint tempora tempore veritatis voluptatem. Ad, aliquid eius explicabo facere, inventore mollitia odio officia quos ratione saepe sit suscipit! Ab adipisci aliquid animi aperiam doloribus enim esse, eum exercitationem explicabo fugit ipsam labore libero maxime minus nesciunt quaerat quo sit tenetur ut voluptas? Ab dicta et quasi sit soluta. Corporis deleniti deserunt, dicta dolore doloremque, eius esse expedita inventore ipsam, iste mollitia nisi odio odit sapiente sequi temporibus vitae! At beatae, commodi dignissimos error fugiat soluta sunt. Ab, aliquam asperiores, assumenda delectus illo incidunt maxime nihil nobis omnis sapiente sint vero. Accusantium ad adipisci aliquid assumenda consequuntur culpa cumque delectus dolorem eos in inventore ipsam iure magnam maxime, molestias nostrum odit quibusdam repellendus reprehenderit rerum sapiente sit ut voluptates. Alias assumenda atque commodi consequuntur dolorem eligendi et fugiat, maiores nam natus nostrum quasi quis quisquam sed sequi totam voluptate voluptatum. At corporis ducimus earum eos eveniet ex fugit harum minus, modi mollitia quaerat repudiandae totam voluptatibus. Beatae consectetur cum cumque, debitis distinctio earum explicabo fugit hic itaque maxime nemo, odio quae quasi tempore temporibus vero.</p>

                <Button
                    type="button"
                    clickHandler={handleClick}
                >
                    Start Now!
                </Button>

                <FormTest/>

            </Main>
            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    );
}

export default LandingPage;