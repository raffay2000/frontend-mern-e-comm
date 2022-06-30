import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getData = () => {
    let auth = JSON.parse(localStorage.getItem("auth"));
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "authorization": `Bearer ${auth}`,
      }
    };

    fetch("http://localhost:8000/products", requestOptions)
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log("error", error));
  };
  // console.log(products)

  const deleteComponent= async(id)=>{
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
      headers: {
        "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
      }
    };
    
    fetch(`http://localhost:8000/product/${id}`, requestOptions)
      .then(response => response.json())
      .then(() => getData())
      .catch(error => console.log('error', error));
    
  }
  const updateComponent= async(id)=>{
    
    navigate(`/update-products/${id}`)
  }
  const SearchFunction = async(e) => {
    let key = e.target.value;
    if(key){
      let response = await fetch(`http://localhost:8000/search/${key}`,{
        headers:{"authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}
      })
      let result = await response.json();
      setProducts(result);
    }
    else{
      getData();
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div style={{textAlign:"center" , margin:"10px"}}>
        <input placeholder="Search" style={{padding:"10px"}} onChange={(e)=>{
          SearchFunction(e);
        }}/>
    </div>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"20px"}}>
        {products.length>0 ? products.map((product,index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "Highlight",
                width: 200,
                marginLeft: 25,
                borderRadius: 12,
                padding: 5,
                margin: 10,
              }}
            >
              <h1 style={{backgroundColor:"CaptionText" ,borderRadius:12,color:"white",padding:5}}>{product.name}</h1>
              <div style={{backgroundColor:"pink",borderRadius:12,padding:5}}>
              <p>Company :{product.company}</p>
              <p>Price : {product.price}</p>
              <p>Category : {product.category}</p>
              <p>Description : {product.description}</p>
              </div>
              <button style={{padding:"12px",marginTop:"12px",borderRadius:"12px"}} onClick={()=>{
                deleteComponent(product._id)
              }}>Delete</button>
              <button style={{padding:"12px",marginTop:"12px",borderRadius:"12px",marginLeft:"10px"}} onClick={()=>{
                updateComponent(product._id)
              }}>Update</button>
            </div>
          );
        })
        :<h1>No Products Found</h1>}
      </div>
    </>
  );
}
