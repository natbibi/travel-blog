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
                <h1>Home</h1>
                {subscribed ? <p>Thank you 💖 Look out for updates from me!</p> : <JoinForm subscribe={subscribe} />}

            </header>
        </>
    )
}

export default Home;