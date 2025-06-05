import React, { useMemo } from "react";

const products = [
  { name: "iPhone" },
  { name: "Samsung" },
  { name: "Pixel" },
  { name: "Nokia" },
];

const ProductList = React.memo(({ filtered  }) => {
  console.log("🔄 ProductList re-rendered");

  // useMemo ensures we only filter if needed
  const filtered1 = useMemo(() => filtered(products), [filtered]);

  return (
    <ul>
      {filtered1.map((p, index) => (
        <li key={index}>{p.name}</li>
      ))}
    </ul>
  );
});

export default ProductList;
