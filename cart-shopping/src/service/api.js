import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/";
const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}products`);
    response.data.map(product => product.quantity = 0);
    return response.data;
}

export default getProducts;