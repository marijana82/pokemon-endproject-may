import {useState} from "react";

function ChildComponent( {updateHandler}) {

    const [newMessage, setNewMessage] = useState("Hi parent! Child loves you!");


    return(
        <div>
            <button
                onClick={() => updateHandler(newMessage)}
            >
                Send message to parent
            </button>




        </div>
    )
}

export default ChildComponent;