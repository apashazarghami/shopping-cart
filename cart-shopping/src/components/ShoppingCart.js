import React, { useContext } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./ShoppingCart.module.css";

//context
import { CartContext } from "../context/CartContextProvider";

//functions
import { countQuantity, shorten } from "../helper/functions";

//asset
import trash from "../assets/trash-details.svg";

const ShoppingCart = productsData => {
    const { state, dispatch } = useContext(CartContext);
    const { image, title, description, price, id } = productsData.productsData;
    return(
        <div className={styles.container}>
            <div>
                <Link to={`/products/${id}`}><img src={image} alt={title} /></Link>
            </div>
            <div>
                <h3>{shorten(title).shortestTitle}</h3>
                <p>{shorten(description).shortDescrption}</p>
                <p>${price}</p>
            </div>
            <div>
                {
                    countQuantity(state, id) === 1 ?
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productsData.productsData})}><img src={trash} alt="trash" /></button> :
                    <button onClick={() => dispatch({type: "DECREASE", payload: productsData.productsData})}>-</button>
                }
                <span>{countQuantity(state, id)}</span>
                <button onClick={() => dispatch({type: "INCREASE", payload: productsData.productsData})}>+</button>
            </div>
        </div>
    )
}

export default ShoppingCart;