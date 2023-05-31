import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//component
import Product from "../Product";
import Loading from "../Loading";

//assets
import search from "../../assets/search.svg";

//style
import styles from "./Products.module.css";

//redux
import fetchRequest from "../../redux/products/productsActions";

const Products = () => {
    const [categorySearch, setCategorySearch] = useState("");
    const productsState = useSelector(state => state.productsState);
    const dispatch = useDispatch();
    const { loading, products, error } = productsState;

    useEffect(() => {
        if(!products.length) dispatch(fetchRequest())
    }, []);

    return(
        <div className={styles.container}>
            <div>
                <img className={styles.searchIcon} src={search} alt="search" />
                <input type="text" placeholder="Search category" value={categorySearch} onChange={event => setCategorySearch(event.target.value)} />
            </div>
            <div>
                {
                    loading ? 
                    <Loading /> :
                    error ?
                    <h2>{error}</h2> :
                    products.map(product => product.category.includes(categorySearch) && <Product key={product.id} data={product} />)
                }
            </div>
        </div>
    )
}

export default Products;