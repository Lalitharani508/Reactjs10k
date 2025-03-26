import React, { useState } from "react";

function SearchInput() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [result, setResult] = useState([]);

  const data = [
    "shirt",
    "pant",
    "t-shirt",
    "joggers",
    "laptop",
    "mobile",
    "watch",
  ];

  const filterItems = () => {
    if (search === "") {
      alert("Please enter a search term.");
      return;
    }

    const filterData = data.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    setFilter(filterData);

    if (filterData.length === 0) {
      setResult(["No matching items found."]);
    } else {
      setResult(filterData);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search and Display Result</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for an item..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      {/* Search Button */}
      <button onClick={filterItems} style={{ padding: "8px 16px" }}>
        Search
      </button>

      {/* Display Result */}
      <h2>Results:</h2>
      {result.map((item, index) => (
        <div key={index} style={{ margin: "5px 0" }}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default SearchInput;
