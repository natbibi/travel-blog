import React from 'react';
import { SocialIcons } from '../../components';
import selfie from '../../images/selfie.jpg'
import { BiRightArrow } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const About = () => {

    const history = useHistory();

    return (
        <>
            <header className="intro-container">
                <h1 hidden>A bit about me...</h1>
            </header>
            <main className="main-container" id="about">
                <div className="about-text"> 
                    <p>Hi, I'm Natalie!</p>
                    <p>I have always loved to travel and visit the world. It is my dream to explore as much of this earth as possible. So far I have visited 30 countries and one of my favourites is Japan because the locals are super friendly, the food is full of variety and the city itself is vibrant and full of life.
                    One of my most memorable trips was North Korea. It was fascinating to see first hand the world's most secretive country.
                    When travelling I love to immerse myself in local culture by eating the local cuisine, learning basic phrases of the local language, and learning their history by visiting museums and cultural destinations.</p>

                    <p>Upcoming destinations: Jordan, Las Vegas </p>
                    <SocialIcons /><button style={{ textAlign: "right" }}className="see-visited" onClick={() => history.push('/visited')}><BiRightArrow /></button>
                  </div>
                <img className="profile" src={selfie} />
            </main>

        </>
    )
}

export default About;