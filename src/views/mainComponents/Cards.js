import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({property}) => {
    const {index, picture, city, address} = property;
    return (
        <div id={`cards-${index}`} className="cards" >
            <img src={picture} alt={city} height="400px" width="400px" />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
               
            </div>
        </div>
    )
}

Cards.propTypes = {
    property: PropTypes.object.isRequired
}

export default Cards;