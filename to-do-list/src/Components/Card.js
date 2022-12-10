import React from "react";
import { CardContext } from "./CardContext";

export default function Card(){
    const [cards, setCards] = React.useContext(CardContext);

    function removeItem(e){
       let removeItems = e.target
       removeItems.parentNode.parentNode.remove();
    }
    return(
        <div className="card--container">
            {cards.map((card) => <div className="card" id="card-component">
                <h3 className="card--heading">{card.heading}</h3>   
                <p className="card--startDate">Start Date : <span>{card.startDate} </span></p>
                <p className="card--endDate">End Date :<span>{card.endDate}</span></p>
                <p className="card--description">Task Description :<span className="card--description-word">{card.description}</span>  </p>
                <div className="card--buttons">
                    <button className="btn btn--completed">Completed</button>
                    <button className="btn btn--delete" onClick={removeItem}>Delete</button>
                    <button className="btn btn--edit">Edit</button>
                </div>
            </div>)}
        </div>
    )
}