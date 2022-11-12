import React from "react";
import '../styles.css';

import { useEffect, useState } from 'react';
import Item from "./Item";



const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetch('https://fakestoreapi.com/products'); // consulta al servicio
                const dataProducts = await data.json(); // convertir en JSON si la respuesta es exitosa
                setProducts(dataProducts)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts(); //ejecuto la funcion
    }, [])


    return (
        <>
            <div class="container">
                <div className="list-container">
                    {(() => {
                        if (props.pageCategory == "") {
                            return (
                                products.map(product => (
                                    <Item key={product.id} item={product} />
                                ))

                            )
                        } else {
                            return (
                                products.map(product => (
                                    product.category == props.pageCategory ? <Item key={product.id} item={product} /> : ""
                                ))
                            )
                        }
                    })()}
                </div>
            </div>
        </>
    )
}



export default ItemListContainer