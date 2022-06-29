import React, { useState ,useEffect} from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const showData = async() => {
    var data = { name, email, password };
    if(!name || !email || !password){
      return alert("Please fill all the fields");
    }
    let response = await fetch("http://localhost:8000/register",{
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    });
    let responseData = await response.json();
    console.log(responseData);
    localStorage.setItem("auth", JSON.stringify(responseData));

    navigate("/products");
  };
  useEffect(()=>{
    const auth = localStorage.getItem('auth');
    if(auth){
      navigate('/products');
    }
  },[]);
  return (
    <>
      <h1 className="about">SignUp Form</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
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
        <button onClick={showData} type="button">Submit</button>
      </div>
    </>
  );
}
