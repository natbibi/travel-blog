import axios from 'axios'
import React from 'react'

const Destinations = ({destinationData}) => {

    return (
        <div className="img-container">
            <h5>{destinationData.destination}, {destinationData.country}</h5>
            <img src={destinationData.image} />
            
        </div>
    )
}

export default Destinations