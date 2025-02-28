import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import k from '../../assests/image11.webp'

 function Carousel1(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src="https://static.vecteezy.com/system/resources/previews/025/482/734/non_2x/spinning-carousel-horses-bring-childhood-joy-outdoors-generated-by-ai-free-photo.jpg" alt=""></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="https://cdn.pixabay.com/photo/2016/06/30/20/39/horse-1489825_1280.jpg" alt=""></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="https://static.vecteezy.com/system/resources/previews/025/482/734/non_2x/spinning-carousel-horses-bring-childhood-joy-outdoors-generated-by-ai-free-photo.jpg" alt=""></img>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src="https://media.istockphoto.com/id/1887227507/photo/vintage-carousel-horse-in-the-sun-childhood-memories.webp?b=1&s=612x612&w=0&k=20&c=3aZ9y1JH_3m4AZXCnCVE2E_odVac7bZ87OahpnRLj2M=" alt=""></img>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )

 }
 export {Carousel1}