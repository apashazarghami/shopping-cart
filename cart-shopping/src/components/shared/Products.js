import React, { useContext, useState } from "react";

//context
import { ProductsContext } from "../../context/ProductsContextProvider";

//component
import Product from "../Product";

//asset
import search from "../../assets/search.svg";

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
                    products.map(product => product.category.includes(categorySearch) && <Product key={product.id} data={product} />)
                }
            </div>
        </div>
    )
}

export default Products;