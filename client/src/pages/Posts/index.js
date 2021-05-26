import React, { useState } from 'react';
import { Destinations } from '../../components'
import destinationData from './data'


const Posts = () => {

    const [destination, setDestination] = useState(destinationData)

    const renderDestinations = destination.map(d =>
        <Destinations destinationData={d} key={d.id} />
    );

    return (
        <>
            <header className="intro-container">
                <h1>Posts!</h1>
            </header>

            <main>
           {renderDestinations}
            </main>
        </>
    )
}

export default Posts;