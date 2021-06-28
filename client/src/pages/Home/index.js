import React, { useState } from 'react';
import { JoinForm } from '../../components'

const Home = () => {

    const [subscribed, setSubscribed] = useState(false)

    const subscribe = (boolean) => {
        setSubscribed(boolean)
    }

    return (
        <>
            <header className="intro-container">
                <h1 hidden>Natalie's Travel Blog</h1>
            </header>
            <main className="main-container" id="homepage">
                <p>Hey there! Thank you for checking out my personal blog for my travels. I'm slowly adding in details of my previous travels. 
                    Feel free to join my mailing list where I send any updates of my travels: </p>
                <div>
                    {subscribed ? <p>Thank you 💖 Look out for updates from me!</p> : <JoinForm subscribe={subscribe} />}
                </div>
            </main>
        </>
    )
}

export default Home;