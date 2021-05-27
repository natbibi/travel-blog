import React, { useState } from 'react';
import axios from 'axios';

function JoinForm({ subscribe }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const options = {
                headers: { "Authorization": `Token 5c2831cea3a84a93dfc042fcd3476b670c374d2d` }
            };
            await axios.post('https://nat-api.herokuapp.com/mailinglist/', { email: email, name: name }, options)
            setName("")
            setEmail("")
            subscribe(true)
        } catch (err) {
            setError("sorry, please try again!")
        }
    }

    const updateName = e => {
        const input = e.target.value
        setName(input)
    }

    const updateEmail = e => {
        const input = e.target.value
        setEmail(input)
    }

    return (
        <>
            <form onSubmit={handleSubmit} role="join-mailing-list">
                <label>Name:
            <input type="text" value={name} onChange={updateName} />
                </label>
                <label>Email:
            <input type="text" value={email} onChange={updateEmail} />
                </label>
                <button type="submit">Join!</button>
            </form>
            {error && <p>🚧<em>{error}</em></p>}
        </>
    )
}

export default JoinForm