import React from "react";
import ItemListContainer from '../../components/ItemListContainer';
import { useEffect, useState } from 'react';
import Loader from "../../components/Loader";
import CartItem from "../../components/CartItem";

function LoadingComponent(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return <>
        {loading? <Loader/>:<ItemListContainer pageCategory="electronics" />}
        </>
} 

const CartOrder = () =>{
    const onRemoveItemCart = (id) => {
        setCart(currentCart => {
          return currentCart.filter(item => item.id !== id);
        });
      }
    const [cart, setCart] = useState([]);
    
    
    return(
    <div>
        <h1>Cart order</h1>
        
        {cart.map((item) => (
              <CartItem item={item} key={item.id} onRemoveItem={onRemoveItemCart}  />
            ))}
        
    </div>)
}

export default CartOrder;