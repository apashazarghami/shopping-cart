import axios from "axios"

const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

const fetchProductsSuccess = products => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}

const fetchProductsFailure = error => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error
    }
}

const fetchRequest = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const products = response.data;
                dispatch(fetchProductsSuccess(products));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchProductsFailure(errorMessage));
            })
    }
}

export default fetchRequest;