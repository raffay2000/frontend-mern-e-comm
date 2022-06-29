import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import "./AddProducts.css"
const  UpdateProducts=()=> {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [company, setcompany] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [error, seterror] = useState(false);
  const PressUpdateBtn = async() => {
    if (name === "" || price === "" || company === "" || category === "" || description === "") {
      seterror(true);
    } else {
      seterror(false);
      let raw = { name, price, company, category, description };
      let response = await fetch(`http://localhost:8000/product/${params.id}`, {
        method: "put",
        body: JSON.stringify(raw),
        headers: {
          "Content-Type": "application/json",
        }
      })
      let result = await response.json();
      if(result){
        navigate("/products");
      }else{
        alert("Something went wrong");
      }
      // navigate("/products");
      // console.log(params.id);
     
  }
}
useEffect(()=>{
  getSingleProduct();
},[])
  const getSingleProduct = async () => {
    let data = await fetch(`http://localhost:8000/product/${params.id}`)
    let result = await data.json();
    if(result){
      setname(result.name);
      setprice(result.price);
      setcompany(result.company);
      setcategory(result.category);
      setdescription(result.description);
    }else{
      alert("Something went wrong");
    }
  }
  
  return (
    <div className="container">
    <h1>Update Products</h1>
    <div className="inputContainer">
      <input
      className="inputTag"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      {error && !name && <span className="span"> Error : Enter Name </span>}
      <input
      className="inputTag"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />
      {error && !price && <span className="span"> Error : Enter Price </span>}
      <input
      className="inputTag"
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      />
      {error && !company && <span className="span"> Error : Enter company </span>}
      <input
      className="inputTag"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      />
      {error && !category && <span className="span"> Error : Enter Category </span>}
      <input
      className="inputTag"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />
      {error && !description && <span className="span"> Error : Enter Description </span>}
    </div>
    <button className="productsBtn" onClick={()=>{
      PressUpdateBtn()
    }}>
      {" "}
      Update Product
    </button>
  </div>
  )
}
export default UpdateProducts;
