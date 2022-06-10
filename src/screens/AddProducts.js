import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProducts.css";
export default function AddProducts() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [company, setcompany] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [error, seterror] = useState(false);
  const AddProductsData = async () => {
    let userID = localStorage.getItem("auth");
    userID = JSON.parse(userID)._id;
    console.log(userID);
    var data = { name, price, company, category, description, userID };
    if (!name || !price || !company || !category || !description) {
      seterror(true);
      return alert("Please fill all the fields");
    }
    let response = await fetch("http://localhost:8000/add-product", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let responseData = await response.json();
    console.log(responseData);
    navigate("/");
  };
  return (
    <div className="container">
      <h1>AddProducts</h1>
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
      <button className="productsBtn" onClick={AddProductsData}>
        {" "}
        Add Product
      </button>
    </div>
  );
}
