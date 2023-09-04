import "./BerryFirmnessPage.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import RadiobuttonDynamic from "../../components/radiobutton-dynamic/RadiobuttonDynamic";
import CheckboxForm from "../../components/checkbox-form/CheckboxForm";
import CheckboxManyInputs from "../../components/checkbox-many-inputs/CheckboxManyInputs";
import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/main/Main";
//has to import Firmness component
import Firmness from "../../components/firmness/Firmness";
import Footer from "../../components/footer/Footer";
import Radio from "../../components/radio/Radio";



function BerryFirmnessPage() {

    const [firmnessList, setFirmnessList] = useState([]);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/berry-firmness");
    const [checked, setChecked] = useState(false);

    function handleChange(e) {
        setChecked(e.target.value);
    }

    /*function handleAddItem(value) {
        const newItem = [...firmnessList, value];
        setFirmnessList(newItem);
    }*/

    //handleAddItem();

    useEffect(() => {
        async function fetchFirmness() {
            try {
                const result = await axios.get(endpoint);
                console.log(result.data.results);
                setFirmnessList(result.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        fetchFirmness();


    }, [endpoint]);


    return (
        <>
            <PageHeader
                message="Firmness List"
            />

            <Main>


                <div className="radio-container">

                    <h3>FIRMNESS LIST:</h3>

                    <h3>Selected firmness?{checked || undefined}</h3>


                    {firmnessList &&

                        firmnessList.map((firm) => {

                            return(
                                <>
                                    <Radio
                                        label={firm.name}
                                        value={firm.name}
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.value)}
                                    />

                                    {/*here write conditional rendering by using ternary operator!!!: if checked={checked} then <Firmness/>*/}

                            <Firmness
                                key={`${firm.name}-${firm.url}`}
                                endpointOneFirmness={firm.url}
                            />

                        </>


                            )
                        })

                    }

                </div>


            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />




        </>

    );

}



export default BerryFirmnessPage;