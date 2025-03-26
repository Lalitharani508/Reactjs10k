import React, { useEffect, useState } from "react";
import axios from "axios";
import {Table} from 'react-bootstrap'

const Addtocart = () => {
  const [cartitems, setCartitems] = useState([]); // Initialize as an empty array
    const [deletedone,setdeletedone]=useState(false)
    const[loading,setloading]=useState(true)
  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((res) => {
        console.log(res.data);
        setCartitems(res.data);
        setloading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deletedone]); // Empty dependency array to run only once when the component mounts
  

  if(loading){
    return <h1>loading please wait a moment</h1>
  }
  const handledeleteBtn=async(dl)=>{
    try{
        await  axios.delete(`http://localhost:3000/recipes/${Number(dl.id)}`)
        console.log(dl)

        alert("item deleted from addtocart")
        setdeletedone(dl)

    }catch(err){
        console.log(err)

    }
   

  }
  return (
    <div>
     {cartitems.length>0?
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl.NO</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        cartitems.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              <img src={item.image} alt="Product" width={200} />
            </td>
            <td>
              <button onClick={()=>handledeleteBtn(item)}>Delete</button>
            </td>
          </tr>
        ))
        }
      </tbody>
    </Table>:"no items found in cart"}
    </div>
  );
};

export default Addtocart;
