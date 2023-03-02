import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import img5 from './images/12girl.jpg'
import img6 from './images/126197996_385197312744633_6397005439344767247_n.jpg'
import img7 from './images/126092902_363731078221416_3923172392216927851_n.jpg'
import img8 from './images/126398977_221851472632792_6291091317212891166_n.jpg'
export default class Home5 extends Component {
  render() {
    return (
    <div >
    <div className="container-row-sm-3">
    <div className="columnn col col-md-4">
    <img
          src={img5}
          alt="First slide"
          width={'50%'}
        />
        <img
          src={img6}
          alt="First slide"
          width={'50%'}
        />
        <img
          src={img7}
          alt="First slide"
          width={'50%'}
        />
        <img
          src={img8}
          alt="First slide"
          width={'50%'}
        />
        <div className='columnn vintagestyle justify-content-center align-items-center'>
            <h1>vintagestyle</h1>
            <p style={{color:'grey' ,fontStyle:'oblique'
    }}>
            Clothing is also worn for decoration, 
            as a fashion. People from different cultures wear different clothing, 
            and have different beliefs and customs about what type of clothing should be worn. 
            For many people, clothing is a status symbol.
             It helps people project an image.
            </p>
        </div>
     </div>
      </div>
      </div>
     
    )
  }
}
