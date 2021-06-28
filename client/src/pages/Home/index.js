import React, { useState } from 'react';
import { JoinForm } from '../../components'
import { BiDownArrow } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

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
                <button className="see-about" onClick={() => history.push('/about')}><BiDownArrow /></button>
            </main>
        </>
    )
}

export default Home;