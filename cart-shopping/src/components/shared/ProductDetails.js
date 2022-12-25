import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//styles
import styles from "./ProductDetails.module.css";

//context
import { ProductsContext } from "../../context/ProductsContextProvider";

//assets
import men from "../../assets/men's clothing.png";
import women from "../../assets/women's clothing.png";
import jewelery from "../../assets/jewelery.png";
import electronics from "../../assets/electronics.png";

//function
import { createRate, shorten, countQuantity } from "../../helper/functions";

//context
import { CartContext } from "../../context/CartContextProvider";

const ProductDetails = () => {
    const numberId = useParams();
    const products = useContext(ProductsContext);
    const product = products[numberId.id - 1];
    const { image, category, title, description, price, rating:{rate, count}, id } = product;
    console.log(product)
    const { dispatch, state } = useContext(CartContext);
    console.log(state);
    console.log(dispatch);
    return(
        <div className={styles.container}>
           <img src={image} alt={title} />
           <div className={styles.category}>
               <div>
                    {
                        category === "men's clothing" && <img src={men} alt="men's clothing" />
                    }
                    {
                        category === "jewelery" && <img src={jewelery} alt="jewelery" />
                    }
                    {
                        category === "electronics" && <img src={electronics} alt="electronics" />
                    }
                    {
                        category === "women's clothing" && <img src={women} alt="electronics" />
                    }
                    <p>{category}</p>
               </div>
           </div>
           <div className={styles.detailsInformation}>
                <div>
                    <div className={styles.title}>
                        <h3>{shorten(title).shortestTitle}</h3>
                        <div>
                            {createRate(rate)}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>{shorten(description).shortDescrption}</p>
                        <span>({count} Reviews)</span>
                    </div>
                </div>
                <div className={styles.price}>
                    <p>${price}</p>
                    <div>
                        <button onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>
                        <span>{countQuantity(state, id)}</span>
                        <button onClick={() => dispatch({type: "INCREASE", payload: product})}>+</button>
                    </div>
                    <Link to="/cart">Cart</Link>
                </div>
           </div>
        </div>
    )
}

export default ProductDetails;