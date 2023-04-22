import "./PageHeader.css";
import React from "react";



function PageHeader({ message, description }) {
    return(
            <header className="header-outer-container">
                <article className="header-inner-container">
                    <div className="header-content-container">
                        <h1>{message}</h1>
                        <p className="header-description">{description}</p>
                    </div>
                </article>


            </header>
    );
}

export default PageHeader;