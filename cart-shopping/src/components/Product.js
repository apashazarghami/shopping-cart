import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//function
import { countQuantity, isInCart, shorten } from "../helper/functions";

//style
import styles from "./Product.module.css";

//asset
import trash from "../assets/trash.svg";

//redux
import { addItem, decrease, increase, removeItem } from "../redux/cart/cartActions";

const Product = ( { data }) => {
    const { image, title, price, id } = data;
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    return(
        <div className={styles.container}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <h3>{shorten(title).shortestTitle}</h3>
            <p>${price}</p>
            {
                !isInCart(state, id) &&
                <button onClick={() => dispatch(addItem(data))}>Add to cart</button>
            } 
            <div className={styles.buttons}>
                {
                    isInCart(state, id) && countQuantity(state, id) === 1 &&
                    <button onClick={() => dispatch(removeItem(data))}><img src={trash} alt="trash" /></button>
                }
                {
                    isInCart(state, id) && countQuantity(state, id) > 1 && 
                    <button onClick={() => dispatch(decrease(data))}>-</button>
                }
                {
                    isInCart(state, id) && countQuantity(state, id) && <span>{countQuantity(state, id)}</span>
                }
                
                {
                    isInCart(state, id) && countQuantity(state, id) >= 1 &&
                    <button onClick={() => dispatch(increase(data))}>+</button>
                }
            </div>
        </div>
    )
}

export default Product;