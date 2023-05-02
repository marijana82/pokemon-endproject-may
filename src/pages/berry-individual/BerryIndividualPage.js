import "./BerryIndividualPage.css";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/main/Main";


function BerryIndividualPage() {

    //2. here I import and create UseParam, and destructure id from it
    const { id } = useParams();

    return(
        <>
            <PageHeader
                message="This is Berry Individual Page"
            />

            <Main>
                    <div className="container-berry-individual">

                        {/*//3. here I make reference to id by putting it in curly braces*/}
                        <h2>Berry Name: { id } </h2>
                        <h2>Berry Characteristic:</h2>
                        <p>Here comes image</p>

                    </div>

            </Main>


        </>
    );
}


export default BerryIndividualPage;