import React from 'react'
import img1 from '../Home/images/cate-df-1_360x.jpg';
import img2 from '../Home/images/cate-df-2_360x.jpg';
import img3 from '../Home/images/cate-df-3_360x.jpg';
import img4 from '../Home/images/cate-df-4_360x.jpg';
import { Link } from 'react-router-dom';
import Home3 from './Home3';
import './Home.css'
export default function Home2() {
  
    return (
      <>
      <div className="LandingPage-container">
        <div className="Poster-container poster-1">
          <div className="Poster-overlay">
            <Link to="/Shop/Shop">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src={img1}
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-2">
          <div className="Poster-overlay">
            <Link to="/Shop/Shop">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src={img2}
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-3">
          <div className="Poster-overlay">
            <Link to="/Shop/Shop">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src={img3}
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-4">
          <div className="Poster-overlay">
            <Link to="/Shop/Shop">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src={img4}
            alt="poster"
          />
        </div>
      </div>
      
      </>
    )}



