import './styles.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import { Fragment, useEffect,useState } from 'react';
import {getFirestore, doc, getDocs, collection} from 'firebase/firestore'

import { Routes, Route } from "react-router-dom";

import {Home, Men, Women, Jewelery, Electronics, FunStuff, ItemDetails, CartOrder} from './pages/index';
import CartItem from './components/CartItem';



function App() {
  
  return (

    <div className="App">

      <NavBar />
      
        <body>
             
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/category/men" element={<Men />} />
            <Route exact path="/category/women" element={<Women />} />
            {/*<Route exact path="/category/jewelery" element={<Jewelery />} />
            <Route exact path="/category/electronics" element={<Electronics />} />
            <Route exact path="/category/funStuff" element={<FunStuff />} />*/}
            <Route exact path="/item/:itemid" element={<ItemDetails />} />
            <Route exact path="/cart-order" element={<CartOrder />} />
          </Routes>
          
          
        </body>
        
    </div>
  );

}

export default App;
