import React, { useEffect, useState } from "react";

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

const Scenario2 = () => {
  const [expandcat, setexpandcat] = useState(null);
  const [cart, setcart] = useState([]);
  const [wishlist, setwishlist] = useState([]);

  // ✅ Toggle category selection
  function handlecategories(catid) {
    setexpandcat((prev) => (prev === catid ? null : catid));
  }

  // ✅ Add to Cart
  function handleAddToCart(product) {
    setcart((prevCart) => [...prevCart, product]);
  }

  // ✅ Add to Wishlist
  

  const handleAddToWishlist= (item) => {
    setwishlist((prev) =>
      prev.some((w) => w.id === item.id) ? prev.filter((w) => w.id !== item.id) : [...prev, item]
    );
  };

  //local storage fow wishlist
  
  useEffect(() => {
    setwishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <>
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2>Scenario2</h2>
        <div>
          Cart: {cart.length} | Wishlist: {wishlist.length}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
        {/* Categories Section */}
        <div
          style={{
            width: "30%",
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#f9fafb",
          }}
        >
          <h2>Categories</h2>
          {data.map((category) => (
            <div
              key={category.id}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderRadius: "4px",
                border: "3px solid cyan",
                width: "150px",
                margin: "5px",
                backgroundColor: expandcat === category.id ? "cyan" : "white",
              }}
              onClick={() => handlecategories(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>

        {/* Subcategories Section */}
        <div style={{ width: "70%" }}>
          <h2>Products of Categories</h2>
          {expandcat !== null ? (
            data
              .find((category) => category.id === expandcat)
              ?.subcat.map((sub) => (
                <div
                  key={sub.id}
                  style={{
                    padding: "8px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                  }}
                >
                  <div>{sub.name}</div>
                  <button
                    onClick={() => handleAddToCart(sub)}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                      className={`px-3 py-1 mr-2 rounded ${wishlist.some((w) => w.id === sub.id) ? "bg-red-500" : "bg-yellow-500"}`}
                      onClick={() => handleAddToWishlist(sub)}
                    >
                      {wishlist.some((w) => w.id === sub.id) ? "💔 Remove" : "💖 Wishlist"}
                    </button>
                </div>
              ))
          ) : (
            <p>Select a category to view products</p>
          )}
        </div>
      </div>

      {/* Cart & Wishlist Section */}
      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff3cd",
        }}
      >
        <h3>Cart Items ({cart.length})</h3>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#d1ecf1",
        }}
      >
        <h3>Wishlist Items ({wishlist.length})</h3>
        {wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Scenario2;
