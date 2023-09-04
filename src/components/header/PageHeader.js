import "./PageHeader.css";
import React from "react";

function PageHeader({ message, description }) {
    return(
            <header className="header-outer-container">
                <article className="header-inner-container">
                    <div className="header-content-container">
                        <h1>{message}</h1>
                        <h2 className="header-description">{description}</h2>
                    </div>
                </article>


            </header>
    );
}

export default PageHeader;