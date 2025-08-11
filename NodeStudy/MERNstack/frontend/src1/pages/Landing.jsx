import { CreateUser } from "../components/CreateUser"
import { Login } from "../components/Login"
import { useState } from "react"
// import { Button } from "@/components/ui/button"

export function Landing() {

    //view == 0 --> Login
    //view == 1 --> Create
    const [view, setView] = useState(0)

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            {!view ?
            <div className="flex flex-col w-96"> 
                <Login/>
                <button onClick={() => setView(!view)}>Create new Account</button>
            </div> :
            <div className="flex flex-col w-96">
                <CreateUser/>
                <button onClick={() => setView(!view)}>Login existing account</button>
            </div>}
        </div>
    )
}