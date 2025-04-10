import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "electronics",
    subcat: [
      { id: 101, name: "laptop", color: "black", price: 50000 },
      { id: 102, name: "watch", price: 10000, color: "pink" },
      { id: 103, name: "pods", price: 3000, color: "white" },
      { id: 104, name: "headphones", price: 5000, color: "white" },
    ],
  },
  {
    id: 2,
    name: "fashion",
    subcat: [
      { id: 201, name: "dresses", price: 5000, color: "red" },
      { id: 202, name: "lipstick", price: 5000, color: "nude" },
      { id: 203, name: "eyeliner", price: 500, color: "black" },
      { id: 204, name: "nail polish", price: 5000, color: "light gray" },
    ],
  },
  {
    id: 3,
    name: "household",
    subcat: [
      { id: 301, name: "chair", price: 2000, color: "red" },
      { id: 302, name: "curtains", price: 3000, color: "pink" },
      { id: 303, name: "utensils", price: 10000, color: "gray" },
      { id: 304, name: "bedsheets", price: 5000, color: "pink" },
    ],
  },
  {
    id: 4,
    name: "dresses",
    subcat: [
      { id: 401, name: "shirt", price: 500, color: "black" },
      { id: 402, name: "jeans", price: 2000, color: "black" },
      { id: 403, name: "t-shirts", price: 4000, color: "white" },
      { id: 404, name: "cargos", price: 2000, color: "beige" },
    ],
  },
];

const Scenario1 = () => {
  const [expandcat, setexpandcat] = useState(null);
  const [cart, setcart] = useState([]);

  function handlecat(id) {
    setexpandcat(expandcat === id ? null : id);
  }

  function handlecartitems(subC) {
    setcart([...cart, subC]);
  }

  return (
    <>
    <div style={{ border: "2px solid green", margin: "5px", padding: "5px",display:"flex" }}>
      {/* Categories Section */}
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          margin: "10px",
          width: "20%",
        }}
      >
        <h2>Categories</h2>
        {data.map((x) => (
          <div
            key={x.id}
            style={{
              border: "1px solid red",
              padding: "5px",
              margin: "3px",
              width: "150px",
              cursor: "pointer",
            }}
            onClick={() => handlecat(x.id)}
          >
            {x.name}
          </div>
        ))}
      </div>

      {/* Subcategories Section */}
      {expandcat && (
        <div>
          <h3>Subcategories</h3>
          {data
            .find((category) => category.id === expandcat)
            ?.subcat.map((subC) => (
              <div key={subC.id} style={{ color: "red", margin: "5px", width:"100%", fontSize:"30px", fontWeight:"bold", display:"flex", gap:"20px"}}>
                <span>{subC.name}</span>
                <button onClick={() => handlecartitems(subC)} style={{width:"200px"}}> Add to Cart </button>
              </div>
            ))}
        </div>
      )}

      {/* Cart Section */}
      
    </div>
    <div style={{ border: "2px solid pink", marginTop: "10px", padding: "10px" }}>
    <h2>Cart Items ({cart.length})</h2>
    {cart.map((c, index) => (
      <p key={index}>{c.name}</p>
    ))}
  </div>
  </>
  );
};

export default Scenario1;
