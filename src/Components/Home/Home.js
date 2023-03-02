
import React, { Fragment, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../Home/images/Home-default-1510-3.png'
import img2 from '../Home/images/Home-default-1510-4.png'
import './Home.css'
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
export default function Home(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
      <Fragment>
        <div>
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item id='ca' >
          <figure className='position-relative'>
        <img
          className="img-fluid"
          src={img}
          alt="First slide"
        />
        <figcaption className='W'>
        The White Collection
        </figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item id='ca' >
      <figure className='position-relative'>
        <img
          className="img-fluid"
          src={img2}
          alt="First slide"
        />
        <figcaption className='W'>
        The Black Collection
        </figcaption>
        </figure>
      </Carousel.Item>
    </Carousel>
    </div>
    <Home2/>
    <Home3 />
    <Home4/>
    <Home5/>
    <Home6/>
    </Fragment>
  );

}

