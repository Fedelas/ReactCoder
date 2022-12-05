import { getFirestore, doc, getDocs, collection, addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import './styles.css';


const addToCart = (id, nameOfProduct, numberOfItems) => {
    let setCartId = {}
    const myCart = {
      user: {
        name: 'John Doe',
        email: 'awdawd@gmail.com'
      },
      items: numberOfItems,
      idProduct:id,
      product:nameOfProduct,
     
    }
    const db = getFirestore();
    const cartCollection = collection (db, 'carts');
    addDoc(cartCollection, myCart) .then(({docRef})=>setCartId(docRef.id));


    
}



const Counter = ({id,name,decreaseQty,increaseQty,numberOfItems=0}) => {
  
    return (
        <div className="counter-container" >
        <div className="counter">
            <button className="button-minus" onClick={()=>decreaseQty(id)}>-</button>
            <input
                disabled
                className="input"
                type="text"
                value={numberOfItems} />
            <button className="button-plus" onClick={()=>increaseQty(id)}>+</button>

            
        </div>

        <button onClick={()=>addToCart(id, name, numberOfItems)} className='button'>ADD TO CART</button>
        </div>

    )



}

export default Counter