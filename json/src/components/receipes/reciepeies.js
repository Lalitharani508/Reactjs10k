import React, { useEffect, useState } from 'react'
import recipedata from 'axios'
import { Card, Button } from 'react-bootstrap'
const Reciepeies = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    recipedata.get("http://localhost:3000/recipes").then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => {
      console.log(err)
    })

  }, [])

  // const handleaddtoCart=(cartitem)=>{
  //   alert("item added to cart")
  //   recipedata.post("http://localhost:3000/CartItems",cartitem)


  // }
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px",justifyContent:"space-around"}}>
      {data.map(x => {
        return (
          <>

            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={x.image} />
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <div style={{display:"flex",gap:"20px"}}>
                        
                  {/* <Button variant="primary" onClick={()=>handleaddtoCart(x)}>Add To Cart</Button> */}
                  <Button variant="primary">Delete Item</Button>
                  <Button variant="primary">Edit Item</Button>

                  </div>

                </Card.Body>
              </Card>

            </>
          </>
        )
      })}
    </div>
  )
}

export default Reciepeies
