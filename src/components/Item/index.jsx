import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";


const Item = ({ item }) => {
    const { id, image, material, category, price, name, stock } = item;
    //const {id, image, title, category,price} = item;
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/item/${id}`, { state: item })
    }

    return (
        <div className="card">
            <div onClick={handleDetail} className="item">

                <div className="item-image-container">
                    <img className="item-image" src={image} alt={name} />
                </div>
                <div className="item-content">
                    <h1 className="item-title">{name}</h1>
                    <h2 className="item-price">USD {price}</h2>
                </div>



            </div>

            

        </div>

    )

}

export default Item;
