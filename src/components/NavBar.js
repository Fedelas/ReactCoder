import "../styles.css"
import React from "react"
import CartWidget from "../components/CartWidget"
import { NavLink } from "react-router-dom";
function NavBar() {
    return (
        <nav className="nav">
            <NavLink to="/" >
                <a href="" className="logo">MEMORY</a>
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/category/men" style={({ isActive }) => ({
                        fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                        Men
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/category/women" style={({ isActive }) => ({
                        fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/electronics" style={({ isActive }) => ({
                        fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/jewelery" style={({ isActive }) => ({
                        fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/funStuff" style={({ isActive }) => ({
                        fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                        FunStuff
                    </NavLink>
                </li>

            </ul>
            <CartWidget />

        </nav>
    )
}

export default NavBar