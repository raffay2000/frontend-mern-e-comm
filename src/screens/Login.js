import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import "./login.css"
export default function Login() {
    const navigate = useNavigate();
    const auth = localStorage.getItem('auth');
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const LoginBtn = async()=>{
        var data = {email,password};
        if(!email || !password){
            return alert("Please fill all the fields");
        }
        let response = await fetch("http://localhost:8000/login",{
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let responseData = await response.json();
        console.log(responseData);
        if(responseData.auth){
          localStorage.setItem("user", JSON.stringify(responseData.user));
          localStorage.setItem("auth", JSON.stringify(responseData.auth));
          navigate("/products");
        }else{
          alert(responseData.result);
        }
    }
    useEffect(()=>{
        if(auth){
            navigate('/products');
        }
    },[])
  return (
    <>
      <div className="container">
      <h1 className="about">Login Here</h1>
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
