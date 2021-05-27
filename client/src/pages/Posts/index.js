import React, { useState, useEffect } from 'react';
import { Destinations, ScrollToTop } from '../../components'
import axios from 'axios';

const Posts = () => {
    const [destination, setDestination] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDestinations = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get("https://nat-api.herokuapp.com/destinations/")
                setDestination(data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError("Sorry, there's been error")
            }
        }
        fetchDestinations()
    }, []);

    const renderDestinations = destination.map(d =>
        <Destinations destinationData={d} key={d.id} />
    );

    return (
        <>
            <header className="intro-container">
                <h1>Photos from my trips...</h1>
            </header>

            <main id="photos"> 
                {loading ? <p className="main-container">loading... please wait or refresh </p> : 
                <>{renderDestinations} </>}
                {error && <p className="main-container">sorry, please try again!</p>}
                <ScrollToTop />
            </main>
        </>
    )
}

export default Posts;