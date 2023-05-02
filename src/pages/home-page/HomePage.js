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

                <div className="homepage-container">
                    <h4>Welcome to the Poke Berry Application!</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus et ex, id inventore nam nemo obcaecati, pariatur reprehenderit sed tempora totam ullam, unde vero voluptatibus. Ab architecto blanditiis culpa dicta eligendi fugiat fugit, id in ipsa, iste praesentium provident qui quos repellat repellendus similique sit veniam, vitae. A animi asperiores atque cupiditate, debitis et eveniet expedita harum inventore ipsam ipsum maiores maxime natus obcaecati quae saepe sint soluta suscipit vitae voluptatum! Aperiam delectus dignissimos, necessitatibus placeat quasi tempora. A accusamus aliquam, corporis cum deleniti dignissimos eius et eum id incidunt itaque nesciunt quia quos reprehenderit totam. Dolore earum, ex!</p>

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

                </div>


            </Main>
            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />




        </>

    );
}

export default HomePage;