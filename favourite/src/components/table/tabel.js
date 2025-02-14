 import React from "react";
 import data from "../../data/data";
 import Table from 'react-bootstrap/Table';
 function Table1(){
    return(
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>sl.no</th>
                        <th>product-name</th>
                        <th>product-price</th>
                        <th>product-image</th>
            

                    </tr>

                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return(

                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                            <img src={item.image} alt="" width={200}></img>
                        </td>

                    </tr>
                        )
                    })}
                    
                </tbody>
            </Table>
        </div>
    )

 }
 export {Table1};