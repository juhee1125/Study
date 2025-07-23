import { useState } from "react";
import { createUser } from "../api";

export function CreateUser() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password:""
    })

    //e는 이벤트객체로, input 요소를 가리킴
    //onchange로 input 변경 감지 후 변경된 값 반영
    function handleChange(e) {
        //...user : user 복사 후 덮어쓰기
        //객체의 계산된 속성명 문법
        //[]를 안쓰면 e.target.name 이라는 문자열이 키가 되지만, []를 쓰면 문자열의 변수값 ex)email 이 키가 됨
        setUser({ ...user, [e.target.name]:e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let response = await createUser(user)
        console.log(response)
        if(response.status!==200){
            alert("User account could not be create :(")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder={"Name"} onChange={handleChange} name="name" required maxLength={20}/>
            <input placeholder={"Email"} onChange={handleChange} name="email" required maxLength={40}/>
            <input placeholder={"Password"} onChange={handleChange} name="password" required maxLength={20}/>
            <button type="submit">Create Account</button>
        </form>
    )

}