import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import k from '../../assests/image11.webp'

 function Carousel1(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={k} alt=""></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt=""></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="https://static.vecteezy.com/system/resources/previews/026/646/625/non_2x/ai-generated-ai-generative-adventure-outdoor-wild-vacation-trip-landscape-beautiful-background-mountains-valley-graphic-art-photo.jpg" alt=""></img>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Himalayas%2C_Ama_Dablam%2C_Nepal.jpg/800px-Himalayas%2C_Ama_Dablam%2C_Nepal.jpg" alt=""></img>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )

 }
 export {Carousel1}