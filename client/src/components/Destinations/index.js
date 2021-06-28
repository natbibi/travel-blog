import React from 'react'

const Destinations = ({ destinationData }) => {

    return (
        <div className="img-container">
            <img className="destination" src={destinationData.image} />
            <h5 style={{ textAlign: "center" }}>{destinationData.city}, {destinationData.country}</h5>
            
        </div>
    )
}

export default Destinations