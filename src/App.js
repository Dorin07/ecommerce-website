import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<ProductList/>}></Route>
          <Route exact path="/details" element={<Details/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<Default/>}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
