import React from "react";
import { useDispatch, useSelector } from "react-redux";

//styles
import styles from "./Cart.module.css";


//component
import ShoppingCart from "../ShoppingCart";
import { Link } from "react-router-dom";

//redux
import { checkout, clear } from "../../redux/cart/cartActions";

const Cart = () => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    return(
        <div className={styles.container}>
            <div>
                {
                    state.selectedItems.map(product => <ShoppingCart key={product.id} productsData={product} />)
                }
            </div>
            {
                state.totalQuantity !== 0  &&
                <div>
                        <div className={styles.price}>
                            <div className={styles.costInformation}>
                                <h3>Subtotal</h3>
                                <p>${state.totalPrice}</p>
                            </div>
                            <div className={styles.costInformation}>
                                <h3>Shipping</h3>
                                <p>${`${state.totalQuantity}.99`}</p>
                            </div>
                            <div className={styles.costInformation}>
                                <h3>Bag total</h3>
                                <p><span>{`(${state.totalQuantity} items)`}</span>${eval(`${state.totalPrice} + ${state.totalQuantity}.99`).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => dispatch(checkout())}>Proceed to checkout</button>
                            <button onClick={() => dispatch(clear())}>Clear cart</button>
                        </div>
                    </div>
            }
            {
                state.checkout &&
                <div className={styles.checkoutClear}>
                    <h3>Checked out successfully</h3>
                    <Link to="/products">Buy more?</Link>
                </div>
            }
            {
                !state.checkout && state.totalQuantity === 0 &&
                <div className={styles.checkoutClear}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
            }
        </div>
    )
}

export default Cart;