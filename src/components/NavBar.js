import "../styles.css"
import React from "react"
import CartWidget from  "../components/CartWidget"
function NavBar() {
  return(
    <nav className="nav">
        <a href="" className="logo">MEMORY</a>
        <ul>
            <li>
                <a>Accesories</a>
            </li>
            <li>
                <a>Shirts and Blousers </a>
            </li>
            <li>
                <a>Sweatshirts & Hoodies</a>
            </li>
            <li>
                <a>Jackets and Coats</a>
            </li>
            <li>
                <a>Trousers and Leggings</a>
            </li>
            <li>
                <a>Shoes and Boots</a>
            </li>
        </ul>
        <CartWidget/>
        
    </nav>
  )
}

export default NavBar