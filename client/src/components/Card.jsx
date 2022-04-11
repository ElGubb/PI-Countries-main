import React from "react";
import './Card.css';

export default function Card({ flag, name, continent}) {
    return (
        <div className="card">
            <img className='flag' src={flag} alt="Flag not found" width='350px' height='200px'/>
            <h3 className="title">{name}</h3>
            <h5 className="region">{continent}</h5>
        </div>
    )
}