'use client'

import { useState } from "react"

export default function LinksCreateForm() {
    const [results, setResults] = useState(null)

    const handleForm = async (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const JSONData = JSON.stringify(data)
        const endpoint = "/api/links/"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options)

        const result = await response.json()
        console.log(result)
        setResults(result)
    }

    return <>
        <form onSubmit={handleForm}>
            <input type="text" defaultValue="https://github.com/kc0/my-app.io" name="url" placeholder="Your url to shorten"/>
            <button type="submit">Shorten</button>
        </form>
        {results && JSON.stringify(results)}
    </>
}