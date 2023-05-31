import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//styles
import styles from "./Navbar.module.css";

//assets
import cart from "../../assets/cart.png";
import back from "../../assets/back.png";

const Navbar = () => {
    const state = useSelector(state => state.cartState);
    const history = useNavigate();
    const redirect = () => {
        history(-1);
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