import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Shop } from './Shop/Shop'
import Home from './Home/Home'
import logo from '../Components/Home/images/logo1.png';
import { AiFillShopping } from 'react-icons/ai';
import './Navb.css'
import { Badge } from 'react-bootstrap';
import { useShoppingCart } from './Shop/Shoppingcartcontext';
export const Navb = () => {
 const {openCart ,cartQuantity}= useShoppingCart()
  return (
    <Navbar id='na' bg="light" expand="lg">
  
        <Nav className="me-auto">
            <NavLink id='st' className={"home"} to="/">Home</NavLink>
            <NavLink id='st' className={"shop"} to="/Shop">Shop</NavLink>
        </Nav>
        <Nav className="me-auto">
        <Navbar.Brand href="/">
      <img
        src={logo}
        className="d-inline-block align-top"
        alt="Overland NInja Logo"
      />
      </Navbar.Brand>
        </Nav>
        
        <Nav className="me-3">
          <AiFillShopping onClick={openCart}>
          </AiFillShopping>
      <Badge bg="secondary">{cartQuantity}</Badge>
        </Nav>
  </Navbar>
  );
  };
export default Navb