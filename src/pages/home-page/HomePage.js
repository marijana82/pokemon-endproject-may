import React, {useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import ChildComponent from "../../components/child-component/ChildComponent";
import TabComponent from "../../components/tab-component/TabComponent";
import FlippableCard from "../../components/flippable-card/FlippableCard";
import HoverCard from "../../components/hover-card/HoverCard";


function HomePage() {

   // const [message, setMessage] = useState("");
    const navigate = useNavigate();

    /*function handleMessageUpdate(newMessageReceived) {
        setMessage(newMessageReceived);
    }*/

    return(

        <>
            <PageHeader
                message="Home Page!"
            />

            <Main>


               {/* <ChildComponent updateHandler={handleMessageUpdate}/>*/}

               {/* <TabComponent/>*/}

                <FlippableCard/>


            </Main>
            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />




        </>

    );
}

export default HomePage;