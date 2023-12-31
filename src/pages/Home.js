import { useEffect, useState } from "react"




export default function Home() {
const [loggedIn, setLoggedIn ]=useState(false)
    useEffect(() => {
        const userLS = localStorage.getItem('myUser')

        if(userLS) {
            setLoggedIn(true)
        }

    }, []

    )



    return (
        <>
            <h1>This is the Home page</h1>
            {loggedIn && <button onClick={() => localStorage.clear()}>Logout</button>}
        </>
    )
}