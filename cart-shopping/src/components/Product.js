import React from "react";

//function
import { shorten } from "../helper/functions";

const Product = ( { data }) => {
    const { image, title, price } = data;
    return(
        <div>
            <img src={image} alt={title} />
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
            <button>Add to crat</button>
        </div>
    )
}

export default Product;