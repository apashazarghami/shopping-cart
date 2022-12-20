import React from "react";

//function
import { shorten } from "../helper/functions";

//style
import styles from "./Product.module.css";

const Product = ( { data }) => {
    const { image, title, price } = data;
    return(
        <div className={styles.container}>
            <img src={image} alt={title} />
            <h3>{shorten(title)}</h3>
            <p>${price}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product;