import "./Berry.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ToCheckList from "../to-check-list/ToCheckList";
import CheckboxForm from "../checkbox-form/CheckboxForm";
import RadiobuttonDynamic from "../radiobutton-dynamic/RadiobuttonDynamic";
import Button from "../button/Button";
import Card from "../card-to-flip/Card";


function Berry({ endpointOneBerry}) {
    const [oneBerry, setOneBerry] = useState(null); //null
    const [berryInfo, setBerryInfo] = useState({
        berry: [],
        response: [],
        //oneBerry: []
    });


    //this function belongs to the berryInfo use State
    function handleChange(event) {
        const { value, checked} = event.target;
        // const { languages } = userInfo;
        const { berry } = berryInfo;
        console.log(`${value} is ${checked}`);

        //case 1: the user checks the box
        if (checked) {
            setBerryInfo({
                berry: [...berry, value],
                response: [...berry, value],
            });
            //case 2: the user unchecks the box
        } else {
            setBerryInfo({
                berry: berry.filter((event) => event !== value),
                response: berry.filter((event) => event !== value),
            });
        }
    }

//deleted this code, but could return it:
    /*function parentToChild() {
    setDataCheck(oneBerry.name);
}

function triggerDeleteButton(index) {
    const newDataCheck = [...dataCheck];
    newDataCheck.splice(0); //check how splice works!
    setDataCheck(newDataCheck);*/


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(endpointOneBerry);
                console.log(result.data);
                setOneBerry(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [endpointOneBerry]);



    return (
        <>

            {/* <div>
                <ul>
                    <li>{dataCheck}</li>
                    <button onClick={() => triggerDeleteButton()}>Delete</button>
                </ul>
            </div>*/}


              {/*  <div className="textarea-container">
                    <label
                        className="form-textarea"
                        htmlFor="text-area"
                    >You chose these berries: {""}
                    </label>
                    <textarea
                        className="text"
                        name="response"
                        value={berryInfo.response}
                        placeholder="The checkbox values will be displayed here."
                        onChange={handleChange}
                    >
                        </textarea>
                </div>*/}

            {/*iterate over berries and create a checkbox for each one:*/}


            {oneBerry &&
                    <div className="berry-container">

                        {/*<button type="button" onClick={() => parentToChild()}>Add me to the list</button>*/}
                    <ul>
                            {/*<div>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="pokeberries"
                                    value={oneBerry.name}
                                    id="check"
                                    onChange={handleChange}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="check"
                                > <li><h3>{oneBerry.name}</h3></li>
                                </label>

                            </div>*/}


                        <li><h3>{oneBerry.name}</h3></li>
                        <li>Type: {oneBerry.natural_gift_type.name}</li>
                        <li>{oneBerry.firmness.name}</li>
                        <li>smooth: {oneBerry.smoothness} </li>
                        <li>size: {oneBerry.size}</li>



                    </ul>



                    {oneBerry && oneBerry.flavors.map((flavor) => {

                        return(

                            <ul key={`${flavor.flavor.name}-${oneBerry.name}`} className="berry-results">
                                {flavor.potency > 0

                                    &&

                                    <>
                                        <li>{flavor.flavor.name} | {flavor.potency}</li>
                                        {/*<form>
                                            <div>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="languages"
                                                    value={flavor.flavor.name}
                                                    id="check"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="check"
                                                > {flavor.flavor.name}
                                                </label>
                                            </div>
                                        </form>*/}
                                    </>
                                }
                            </ul>



                        )

                    })
                    }


                </div>


            }

        </>
    );

}




export default Berry;



