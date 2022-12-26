import React, { useContext } from "react";
import { Link } from "react-router-dom";

//function
import { countQuantity, isInCart, shorten } from "../helper/functions";

//style
import styles from "./Product.module.css";

//context
import { CartContext } from "../context/CartContextProvider";

//asset
import trash from "../assets/trash.svg";

const Product = ( { data }) => {
    const { image, title, price, id } = data;
    const { state, dispatch } = useContext(CartContext);
    return(
        <div className={styles.container}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <h3>{shorten(title).shortestTitle}</h3>
            <p>${price}</p>
            {
                !isInCart(state, id) &&
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to cart</button>
            } 
            <div className={styles.buttons}>
                {
                    isInCart(state, id) && countQuantity(state, id) === 1 &&
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><img src={trash} alt="trash" /></button>
                }
                {
                    isInCart(state, id) && countQuantity(state, id) > 1 && 
                    <button onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button>
                }
                {
                    isInCart(state, id) && countQuantity(state, id) && <span>{countQuantity(state, id)}</span>
                }
                
                {
                    isInCart(state, id) && countQuantity(state, id) >= 1 &&
                    <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
                }
            </div>
        </div>
    )
}

export default Product;