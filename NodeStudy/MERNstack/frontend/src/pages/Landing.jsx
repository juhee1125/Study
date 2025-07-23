import { CreateUser } from "../components/CreateUser"
import { Login } from "../components/Login"
import { use, useState } from "react"

export function Landing() {

  //view==0 login
  //view==1 create
  const [view, setView] = useState(0)
  return(
    <>
      {!view?
      <>
        <Login/>
        <button onClick={()=>  setView(!view)}>Create new Account</button>
        </>:
        <>
        <CreateUser/>
        <button onClick={()=>  setView(!view)}>Login existing account</button>
        </>}
    </>
  )
}