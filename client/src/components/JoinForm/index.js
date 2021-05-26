import React, { useState } from 'react'

function JoinForm({ subscribe }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://nat-api.herokuapp.com/mailinglist/', { email: email, name: name })
        setName("")
        setEmail("")
        subscribe(true)
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
        </>
    )
}

export default JoinForm