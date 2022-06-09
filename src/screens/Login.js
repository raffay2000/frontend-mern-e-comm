import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();
    const auth = localStorage.getItem('auth');
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const LoginBtn = async()=>{
        var data = {email,password};
        console.log(data);
        let response = await fetch("http://localhost:8000/login",{
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let responseData = await response.json();
        console.log(responseData);
        localStorage.setItem("auth", JSON.stringify(responseData));
        if(responseData.result){
            alert(responseData.result);
        }else{
            navigate("/");
        }
    }
    useEffect(()=>{
        if(auth){
            navigate('/');
        }
    },[])
  return (
    <>
      <h1 className="about">Login Here</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Email"
           value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button onClick={LoginBtn} type="button">Login</button>
      </div>
    </>
  )
}
