import React from 'react';
import { BiDownArrow } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Visited = () => {
 
    const history = useHistory();

    return (
        <>
            <header className="intro-container">
                <h1>Leave Only Footprints 👣 </h1>
            </header>
            <main className="main-container" id="visited">
                <iframe src="https://www.google.com/maps/d/embed?mid=1f4azxXr2CNwbPqzKT63opRFJNpje_TC1" 
                width="640" height="480"></iframe>
                <button className="see-photos" onClick={() => history.push('/photos')}><BiDownArrow /></button>
            </main>
        </>
    )
}

export default Visited;