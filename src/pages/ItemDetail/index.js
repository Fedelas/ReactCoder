import React, { useState } from "react";
import Item from '../../components/Item';
import Counter from "../../components/Counter";
import './styles.css';


import { useParams, useLocation } from "react-router-dom";
const ItemDetails = () => {
    const { params } = useParams();
    const { state } = useLocation();
    const [cart, setCart] = useState([]);

   
    //const { id, image, material, category, price, name, stock } = { state };

    const [numberOfItems, setNumberOfItems] = useState(0)

    const decreaseQty = (id) => {
        const item = state

        if (numberOfItems > 0) {
    
            setNumberOfItems(numberOfItems => numberOfItems - 1)
    
            if (cart?.length === 0) {
                setCart([{ ...item, quantity: 1 }]);
                //setIsOpenCart(!isOpenCart);
            } else if (cart.length > 0 && !cart?.find(item => item.id === id)) {
                setCart([...cart, { ...item, quantity: 1 }]);
            } else {
                setCart(currentCart => {
                    return currentCart.map((product) => {
                        if (product.id === id) {
                            return { ...product, quantity: product.quantity - 1 };
                        } else {
                            return product;
                        }
                    });
                });
            }
    
    
        } else { }
    }
        
    
const increaseQty = (id) => {
    const item = state
    

    if (numberOfItems < state.stock) {
        {}
        setNumberOfItems(numberOfItems => numberOfItems + 1)

        if (cart?.length === 0) {
            setCart([{ ...item, quantity: 1 }]);
            //setIsOpenCart(!isOpenCart);
        } else if (cart.length > 0 && !cart?.find(item => item.id === id)) {
            setCart([...cart, { ...item, quantity: 1 }]);
        } else {
            setCart(currentCart => {
                return currentCart.map((product) => {
                    if (product.id === id) {
                        return { ...product, quantity: product.quantity + 1 }
                        
                    } else {
                        return product;
                    }
                });
            });
        }


    } else { }
}

const getItemQuantity = (id) => {
    return cart?.find(item => item.id === id)?.quantity || 0;
  }

  console.log('cart', cart)
return (

    <div class="item-container">
        {/* <Item item={state} /> */}
        <div className="item-image-container">
            <img className="item-image" src={state.image} alt={state.name} />
        </div>
        <div className="item-content">
            <h1 className="item-title">{state.name}</h1>
            <h1 className="item-price">USD {state.price}</h1>
            <h2 className="item-stock">AVAILABLE {state.stock}</h2>
        </div>

        <Counter id={state.id} name={state.name} decreaseQty={decreaseQty} increaseQty={increaseQty} numberOfItems={numberOfItems} />

    </div>
)
}

export default ItemDetails;