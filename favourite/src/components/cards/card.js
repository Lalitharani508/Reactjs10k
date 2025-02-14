import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import fakestoreapi from '../../data/data';
import './card.css';
function Card1(){
    return(
        <div className="cardsContainer">
            {fakestoreapi.map((item,index)=>{
                return(
                    <Card className="card" style={{width:"200"}} key={index}>
                <Card.Img src={item.image} alt="" >

                </Card.Img>
                <Card.Body>
                    <Card.Title>
                        {item.title}
                    </Card.Title>
                    <Card.Text>{item.price}</Card.Text>
                    <Button>Add To Cart</Button>
                </Card.Body>
            </Card>
                )
            })}

        </div>
    )
}
export {Card1};
// console.log(Card1())