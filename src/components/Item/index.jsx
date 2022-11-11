import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

const Item = ({item}) => {
    const {id, image, title, category,price} = item;
    const navigate = useNavigate();
    const handleDetail=()=>{
        navigate(`/item/${id}`, {state:item})
    }

    return (
        <>
        <div onClick={handleDetail} className="item">
           
            <div className="item-image-continer">
                <img className="item-image" src={image} alt={title} />
            </div>
            <div className="item-content">
                <h1 className="item-title">{title}</h1>
                <h2 className="item-price">{price}</h2>
            </div>

            

        </div>
        
        </>

    )

}

export default Item;
