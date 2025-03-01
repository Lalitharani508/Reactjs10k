import React from "react";
import { useEffect } from "react";
import apidata from 'axios'
import { useState } from "react";

const Products = () => {
    // const [data, setData] = useState([])
    const [data, setData] = useState([]);

    useEffect(() => {
        apidata.get('https://dummyjson.com/recipes')
            .then(res => {
                console.log(res);  // Logs the entire response
                setData(res.data.recipes);  // Sets the recipes data to state
            })
            .catch(err => {
                console.log(err);  // Logs any errors
            });
    }, []);

    console.log(data); 
    // console.log("data")
    return (
        <div>
            {data.map(x=>{
                return(
                    <div>{x.name}</div>
                )
            })}
        </div>
    )
}

export default Products