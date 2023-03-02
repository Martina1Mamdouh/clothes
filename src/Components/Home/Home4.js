import React, { Component, Fragment } from 'react'
import { Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import img4 from './images/banner-2.png'
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
const Home4 = () =>{
    let navigate = useNavigate();
    return (
          <>
            <div className="LandingPage-container">
            <div className="Poster-container poster-1">
            <div className="Poster">
            <Link to="/Shop/Shop">
            <button className="Overlay-button">Shop Now</button>
            </Link>
            </div>
            <Figure style={{marginLeft: '5%',
                padding: '4%'}}>
        <Figure.Image className='Poster'
            width={500}
            height={400}
           alt="600x1000"
            src={img4}/>
       <h1 className='tittle'>MERRY</h1>
       <p className='Figurecap'>
           Christmass<br />
            40% </p>
    </Figure>
   </div>
      <div className='greyBg'>
        <h6 className='head'>You Next</h6>
        <p className='purchase'>Purchase <br />10% off</p>
        <div className=''>
        <Link to="/Shop/Shop">
            <button className="Overlay-button">Shop Now</button>
            </Link>
        </div>
       
      </div>
     </div>
            
            {/* <h1>Home4</h1>
            <Button variant='danger' onClick={() =>{navigate("/Shop")}}>GO to Home</Button> */}
        </>
    );
};

export default Home4;
// export default class Home4 extends Component {
//   render() {
//     return (
//       <div>Home4</div>
//     )
//   }
// }
