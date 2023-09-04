import "./TabComponent.css";
import React, {useState} from "react";
import FirstTab from "../tabs-all/FirstTab";
import SecondTab from "../tabs-all/SecondTab";

function TabComponent() {

    const [activeTab, setActiveTab] = useState("tab 1");

    //functions to handle tab switching
    function handleTabOne() {
        //update the state to tab 1
        setActiveTab("tab 1");
    }

    function handleTabTwo() {
        setActiveTab("tab 2");
    }

    return(
        <div className="tabs">
            {/*Tab Nav*/}
            <ul className="nav">
                <li
                    className={activeTab === "tab 1" ? "active" : ""}
                    onClick={handleTabOne}
                >Pokemon Search (Tab 1)
                </li>

                <li
                    className={activeTab === "tab 2" ? "active" : ""}
                    onClick={handleTabTwo}
                >Berry Search (Tab 2)
                </li>
            </ul>

            <div className="outlet">
                {/*Content will be shown here*/}
                { activeTab === "tab 1" ? <FirstTab/> : <SecondTab/> }

            </div>

        </div>
    )
}

export default TabComponent;

