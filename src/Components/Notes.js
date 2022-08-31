import React from "react";

export default function Notes(){
    return(
        <div className="notes--container">
            <nav className="nav--notes">
                <h1>
                    Notes
                </h1>
                <button className="add--icon">+</button>
            </nav>
            <div className="store--notes">
                Note 1
            </div>
        </div>
    )
}