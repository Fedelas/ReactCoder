
import { MdAddShoppingCart } from "react-icons/md";
import CartItem from "../CartItem";

import { NavLink } from "react-router-dom";

const CartWidget = ({ item, onRemoveItem, cartQty = 0 }) => {
    const { id, image, name, price, quantity } = item || {};
    return (
        <div className="cart-container">
            
            <NavLink to="/cart-order" >
                <MdAddShoppingCart />
            </NavLink>
            

        
        </div>
    )
}

export default CartWidget







