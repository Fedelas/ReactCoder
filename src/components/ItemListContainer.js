import React from "react";
import '../styles.css';

import { useEffect, useState } from 'react';
import Item from "./Item";
import { getFirestore, doc, getDocs, collection } from 'firebase/firestore'





 const ItemListContainer = (props) => {
    const [item, setItem] = useState(null)
    /*
    //
    
    useEffect(() => {
        const db = getFirestore();
        const getProductsCollection = collection(db, "Products");
        getDocs(getProductsCollection)
            .then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setItem(products)


            })
    }, []) */


    //

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {

                const db = getFirestore();
                const getProductsCollection = collection(db, "Products");
                getDocs(getProductsCollection)
                    .then((snapshot) => {
                        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                        setProducts(products);
                    })
            } catch (error) {
                //console.log(error)


            }
        }
        getProducts(); //ejecuto la funcion
    }, [])














    /*  const [products, setProducts] = useState([]);
     useEffect(() => {
         const getProducts = async () => {
             try {
                 
                 const data = await fetch('https://fakestoreapi.com/products'); // consulta al servicio
                 const dataProducts = await data.json(); // convertir en JSON si la respuesta es exitosa
                 setProducts(dataProducts);
             } catch (error) {
                 //console.log(error)
                 
                 
             }
         }
         getProducts(); //ejecuto la funcion
     }, []) */


    return (
        <>

            <div class="container">
                <div className="list-container">
                    {(() => {
                        if (props.pageCategory == "") {
                            return (
                                products.map(product => (
                                    <Item key={product.id} item={product} />
                                )
                                )

                            )
                        } else {
                            return (

                                products.map(product => (
                                    
                                    props.pageCategory == product.category ? <Item key={product.id} item={product} /> : ""
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