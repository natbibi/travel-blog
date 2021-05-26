import React from 'react';

const Visited = () => {
 
    return (
        <>
            <header className="intro-container">
                <h1>A map of all the places I've been...</h1>
            </header>
            <main className="main-container">
                <iframe src="https://www.google.com/maps/d/embed?mid=1f4azxXr2CNwbPqzKT63opRFJNpje_TC1" 
                width="640" height="480"></iframe>
            </main>
        </>
    )
}

export default Visited;