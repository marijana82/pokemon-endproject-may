import "./Main.css";
import PageHeader from "../header/PageHeader";
import React from "react";


function Main({ children }) {
    return(

        <main className="outer-container">

            <article className="inner-container">

                <div className="main-content-container">
                    {children}
                </div>
            </article>
        </main>

    );
}

export default Main;