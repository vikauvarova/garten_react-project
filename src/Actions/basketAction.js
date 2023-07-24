import axios from "axios";

export const allProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3333/products/all");
            dispatch({ type: "FETCH_ALL_PRODUCTS_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "FETCH_ALL_PRODUCTS_ERROR", error: error.message });
        }
    };
}

export const addToBasket= (product) => (  {  
    type: "ADD_TO_BASKET",
    payload: {...product, quantity: 1}
});

export const deleteFromBasket = (productId) => ({
    type: "DELETE_FROM_BASKET",
    payload: productId,
});

export const uptadeQuantity = (id, newQuantity) => ({
    type: "UPTATE_QUANTITY",
    payload: {id, newQuantity},
})

export const clearBasket = () => {
    return {
        type: "CREAR_BASKET",
    }
}