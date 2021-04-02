import React from 'react';

import "./Cards.css"

const CardsItem = props => {
    return (
        <div className="card text">
            <div className="overflow">
                <img src={props.imgsrc} alt="moodSing" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
              {props.text}
                </p>
                <a href={props.link} target="_blank" className="btn btn-outline-info">{props.name}</a>
                {/* <a href=" https://github.com/Mrjcowman/moodSing">repo</a> */}

            </div>
            
        </div>
    )
}

export default CardsItem; 
