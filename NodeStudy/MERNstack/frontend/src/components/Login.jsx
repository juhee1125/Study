import { useState } from "react";
import { verifyUser } from "../api";
import { useNavigate } from "react-router-dom"
//HTTP 요청을 보낼 수 있게 해주는 자바스크립트 라이브러리(프론트, 백 연결)
import axios from "axios";

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password:""
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setUser({ ...user, [e.target.name]:e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let response = await verifyUser(user)
        if(response){
            sessionStorage.setItem("User", response)
            axios.defaults.headers.common["Authorization"] = `Bearer ${response}`
            navigate("/home")
        }else{
            alert("Login failed")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder={"Email"} onChange={handleChange} name="email" required maxLength={40}/>
            <input placeholder={"Password"} onChange={handleChange} name="password" required maxLength={20}/>
            <button type="submit">Login</button>
        </form>
    )

}