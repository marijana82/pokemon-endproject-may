import "./ToCheckList.css";
import React, { useState } from "react";


function ToCheckList() {

    const [toCheckItems, setToCheckItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setToCheckItems([...toCheckItems, inputValue]);
        setInputValue("");
    }

    function handleDelete(index) {
        const newToCheckItems = [...toCheckItems];
        newToCheckItems.splice(index, 1);
        setToCheckItems(newToCheckItems);
    }


    return(
        <div>
            <h3>To Check List</h3>
            <form>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add To Check</button>
            </form>

            <article className="items-to-check">
                <ul>
                    {toCheckItems.map((toCheckItem, index) => {
                        return(

                            <li key={index}>{toCheckItem}
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </li>


                        );
                    })}

                </ul>
            </article>


        </div>
    );
}

export default ToCheckList;