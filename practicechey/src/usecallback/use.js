// import React, { useState, useCallback } from "react";

// function Button({ handleClick, label }) {
//   console.log("Button re-rendered:", label);
//   return <button onClick={handleClick}>{label}</button>;
// }

// function App12() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState(0);

//   // ✅ This function is "cached" and won't be recreated on every render
//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <Button handleClick={increment} label="Increment" />
//       <button onClick={() => setValue(value + 1)}>Re-render App</button>
//     </div>
//   );
// }

// export default App12;


// import React, { useState } from "react";

// function Child({ sayHello }) {
//   console.log("👶 Child rendered");
//   return <button onClick={sayHello}>Say Hello</button>;
// }

// function App12() {
//   const [count, setCount] = useState(0);

//   // This function is recreated every time App renders
//   const sayHello = () => {
//     alert("Hello!");
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child sayHello={sayHello} />
//     </div>
//   );
// }

// export default App12;

import React from 'react'

const App12 = () => {
  return (
    <div>
      hiiiii
    </div>
  )
}

export default App12
