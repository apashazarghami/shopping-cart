import React, { useContext, useState } from "react";

//context
import { ProductsContext } from "../../context/ProductsContextProvider";

//component
import Product from "../Product";
import Loading from "../Loading";

//assets
import search from "../../assets/search.svg";
import loading from "../../assets/loading.gif";

//style
import styles from "./Products.module.css";

const Products = () => {
    const [categorySearch, setCategorySearch] = useState("");
    const products = useContext(ProductsContext);

    return(
        <div className={styles.container}>
            <div>
                <img className={styles.searchIcon} src={search} alt="search" />
                <input type="text" placeholder="Search category" value={categorySearch} onChange={event => setCategorySearch(event.target.value)} />
            </div>
            <div>
                {
                    products.length ?
                    products.map(product => product.category.includes(categorySearch) && <Product key={product.id} data={product} />) :
                    <Loading />
                }
            </div>
        </div>
    )
}

export default Products;