import React, { useState } from "react"
export default function Accueil() {
    const [hello, setHello] = useState("")
    const handleClick = async () => {
        const data = await window.fetch('/api/bonjour')
        const json = await data.json()
        console.log(json)

        setHello(json["msg"])
    }
    return (
        <div>
            <p>{hello}</p>
            <button onClick={handleClick}>cliquer ici</button>
        </div>
    )
}