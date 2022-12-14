import React from "react";
import ItemListContainer from '../../components/ItemListContainer';
import { useEffect, useState } from 'react';
import Loader from "../../components/Loader";


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



const Electronics = () =>{
    return(
    <div>
        <h1>ELECTRONICS</h1>
        <LoadingComponent/>
        
    </div>)
}

export default Electronics;