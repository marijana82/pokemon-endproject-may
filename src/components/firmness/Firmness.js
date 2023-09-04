import "./Firmness.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Checkbox from "../checkbox/Checkbox";


function Firmness({ endpointOneFirmness }) {

    const [oneFirmness, setOneFirmness] = useState(null);
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);

    function handleChangeOne() {
        setCheckedOne(!checkedOne);
    }

    function handleChangeTwo() {
        setCheckedTwo(!checkedTwo);
    }



    useEffect(() => {
        async function fetchFirmness() {
            try {
                const result = await axios.get(endpointOneFirmness);
                console.log(result.data);
                setOneFirmness(result.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchFirmness();

    }, [endpointOneFirmness]);

    return(
        <>
            {oneFirmness &&

                <Checkbox
                    label={oneFirmness.berries[0].name}
                    value={checkedOne}
                    onChange={handleChangeOne}
                />

                

                }


            {oneFirmness &&
                oneFirmness.berries &&
                oneFirmness.berries.map((oneFirmBerry) => {

                return(
                    <>
                        {/*<label>
                            <h3>{oneFirmBerry.name}</h3>
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleChange}
                            />
                        </label>*/}

                        {/*<Checkbox
                            label={oneFirmBerry.name}
                            value={checkedOne}
                            onChange={handleChange}
                        />

                        <Checkbox
                            label={oneFirmBerry.name}
                            value={checkedTwo}
                            onChange={handleChangeTwo}
                        />*/}







                    {/*<div className="checkbox-container">
                        <h3>CHECKBOX FORM</h3>
                        <form className="checkbox-form">
                            <fieldset>
                                <legend>
                                    Test me
                                </legend>
                                <label
                                    htmlFor="checkbox"
                                >{oneFirmBerry.name}
                                </label>
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    value={oneFirmBerry.name}

                                />
                            </fieldset>
                        </form>
                    </div>*/}



                    </>

                    )

            })}



        </>

)
}

export default Firmness;