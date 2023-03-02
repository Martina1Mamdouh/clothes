import React, {Component, Fragment} from "react";
import Navb from "./Navb";
import {Routes,Route, Link} from 'react-router-dom'
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import ShoppingCartProvider from "./Shop/Shoppingcartcontext";
export default class App extends Component{
   state = {
    counter :0
   }
   handleInput =(e)=>{
    this.setState({
      name: e.target.value
    })
   }
   Added=()=>{
    this.setState({
      counter:this.state.counter +1
    })
   }
   Delete=()=>{
    this.setState({
      counter:this.state.counter <=0 ? this.state.counter=0 :this.state.counter-1
    })
   }
  render(){
    return(
      <ShoppingCartProvider>
        <Navb NavCounter = {this.state.counter} />
        {/* <input value={this.state.name}> OnChange{}</input> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Shop' element={<Shop/>}/>
       </Routes>
       {/* <Home2/>
       <Home3 Added= {this.Added}/> */}
      </ShoppingCartProvider>
    )
  }
}
