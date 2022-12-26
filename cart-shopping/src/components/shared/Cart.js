import React, { useContext } from "react";

//styles
import styles from "./Cart.module.css";

//context
import { CartContext } from "../../context/CartContextProvider";

//component
import ShoppingCart from "../ShoppingCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    return(
        <div className={styles.container}>
            {
                state.selectedItems.map(product => <ShoppingCart key={product.id} productsData={product} />)
            }
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
                                <p><span>{`(${state.totalQuantity} items)`}</span>{eval(`${state.totalPrice} + ${state.totalQuantity}.99`).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => dispatch({type:"CHECKOUT"})}>Proceed to checkout</button>
                            <button onClick={() => dispatch({type:"CLEAR"})}>Clear cart</button>
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