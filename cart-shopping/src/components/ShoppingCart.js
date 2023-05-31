import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//styles
import styles from "./ShoppingCart.module.css";

//functions
import { countQuantity, shorten } from "../helper/functions";

//asset
import trash from "../assets/trash-details.svg";

//redux
import { decrease, increase, removeItem } from "../redux/cart/cartActions";



const ShoppingCart = productsData => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
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
                    <button onClick={() => dispatch(removeItem(productsData.productsData))}><img src={trash} alt="trash" /></button> :
                    <button onClick={() => dispatch(decrease(productsData.productsData))}>-</button>
                }
                <span>{countQuantity(state, id)}</span>
                <button onClick={() => dispatch(increase(productsData.productsData))}>+</button>
            </div>
        </div>
    )
}

export default ShoppingCart;