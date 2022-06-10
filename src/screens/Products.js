import React, { useState, useEffect } from "react";
export default function Products() {
  const [products, setProducts] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8000/products", requestOptions)
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log("error", error));
  };
  // console.log(products)
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div style={{display:"flex",flexDirection:"row"}}>
        {products.map((product) => {
          return (
            <div
              key={product.id}
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
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <p>{product.company}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
