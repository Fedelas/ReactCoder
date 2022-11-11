import React from "react";
import Item from '../../components/Item';
import { useParams, useLocation } from "react-router-dom";
const ItemDetails = () =>{
    const {params} =useParams();
    const {state} = useLocation();
    
    return(
        
    <div >
        <Item item={state} />
    </div>
    )
}

export default ItemDetails;