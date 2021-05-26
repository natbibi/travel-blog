import React from 'react'

const Destinations = ({ destinationData }) => {

    return (
        <div className="img-container">
            <h5>{destinationData.city}, {destinationData.country}</h5>
            <img className="destination" src={destinationData.image} />
            
        </div>
    )
}

export default Destinations