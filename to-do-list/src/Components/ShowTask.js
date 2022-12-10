import React from "react";
import Card from "./Card";


export default function ShowTask(){
    return (
        <div className="show-task--container col-md-7">
            <nav className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active task</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Important task</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Completed ShowTask</a>
                    </li>
                </ul>
            </nav>
           <Card /> 
        </div>
    )
}