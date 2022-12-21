import React from "react";
import { Link } from "react-router-dom";

//function
import { shorten } from "../helper/functions";

//style
import styles from "./Product.module.css";

const Product = ( { data }) => {
    const { image, title, price, id } = data;
    return(
        <div className={styles.container}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={title} />
                <h3>{shorten(title)}</h3>
                <p>${price}</p>
                <button>Add to cart</button>
            </Link>
        </div>
    )
}

export default Product;