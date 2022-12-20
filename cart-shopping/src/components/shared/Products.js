import React, { useContext, useState } from "react";

//context
import { ProductsContext } from "../../context/ProductsContextProvider";

//component
import Product from "../Product";

//asset
import search from "../../assets/search.svg";

const Products = () => {
    const [categorySearch, setCategorySearch] = useState("");
    const products = useContext(ProductsContext);

    return(
        <div>
            <div>
                <img src={search} alt="search" />
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