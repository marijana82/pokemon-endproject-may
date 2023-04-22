import "./PageHeader.css";
import React from "react";



function PageHeader({ message, description }) {
    return(
            <header className="outer-container">
                <article className="inner-container">
                    <div className="header-content-container">
                        <h1>{message}</h1>
                        <p>{description}</p>
                    </div>
                </article>


            </header>
    );
}

export default PageHeader;