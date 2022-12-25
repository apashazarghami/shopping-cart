import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

//styles
import styles from "./Navbar.module.css";

//assets
import cart from "../../assets/cart2.png";
import back from "../../assets/back2.png";

//context
import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {
    const { state } = useContext(CartContext);
    const history = useHistory();
    const redirect = () => {
        history.goBack();
    }
    return(
        <div className={styles.container}>
            <button onClick={() => redirect()}><img src={back} alt="arrow-back" /></button>
            <div>
                <Link to="/">Shop</Link>
            </div>
            <div>
                <Link to="/cart">
                    <img src={cart} alt="cart" />
                    <span>{state.totalQuantity}</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;