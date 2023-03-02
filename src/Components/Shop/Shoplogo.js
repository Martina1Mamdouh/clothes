import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img9 from '../Home/images/wrist-watch-2159785_1920_01.jpg'
import img10 from '../Home/images/125474066_691332491496782_8130376826513537460_n.jpg'
import { Nav , NavLink } from 'react-bootstrap';
function Shoplogo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src={img9}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
         <NavLink id='st' className={"home"} style={{color:"white"}} to="/">Home</NavLink></h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img10}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>
         <NavLink id='st' className={"home"} style={{color:"white"}} to="/Shop">Shop</NavLink></h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Shoplogo