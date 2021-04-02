import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import "./Carousel.css"
import Image1 from "../../assets/lights.jpeg"



function MyCarousel (){
    return (
        <div id="home">
<Carousel controls={false} indicators interval={2500} pause={false}>

  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Image1}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>  
        </div>
    )
}

export default MyCarousel; 
