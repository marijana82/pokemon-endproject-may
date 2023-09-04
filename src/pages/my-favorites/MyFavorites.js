import "./MyFavorites.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Favorites from "../../components/favorites/Favorites";
import CheckboxForm from "../../components/checkbox-form/CheckboxForm";
import RadiobuttonForm from "../../components/radiobutton-form/RadiobuttonForm";
import RadiobuttonDynamic from "../../components/radiobutton-dynamic/RadiobuttonDynamic";


function MyFavorites({ endpointOneBerry, oneBerry }) {

    const [berries, setBerries] = useState([]);
    const [berryInfo, setBerryInfo] = useState({
        berry: [],
        response: []
    });

    function handleChange(event) {
        const { value, checked} = event.target;
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


    useEffect(() => {
        async function getDataForFavorites() {
            try {
                const result = await axios.get(endpointOneBerry);
                console.log(result.data);
                setBerries(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        getDataForFavorites();

    }, []);


    /*Callback function to render cards on and off of the MyFavorites page*/
   /* function handleFavoriteBerries(updatedBerry) {
        const updatedBerriesArray = berries.map((berry) => {
            if (berry.id === updatedBerry.id) {
                return updatedBerry;
            } else {
                return berry;
            }
            setBerries(updatedBerriesArray);
        });
    }*/

    return(
        <>
            <RadiobuttonDynamic enpoint={oneBerry}/>

            <div className="form-container">
                <h3>Choose a language</h3>
                <form>
                    <div>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="berries"
                            value={berries.name}
                            id="check"
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="check"
                        > Berry One
                        </label>
                    </div>
                    <div>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="berries"
                            value="Pecha berry"
                            id="check"
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="check"
                        > Berry two
                        </label>
                    </div>
                    <div>
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
                    </div>
                </form>
            </div>

            <Favorites
                berries={berries}
                //onFavoriteBerries={handleFavoriteBerries}
            />




        </>

    );
}

export default MyFavorites;