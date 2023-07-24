import axios from "axios";

export const getSingleCategory = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3333/categories/${id}`);
            dispatch({ type: "FETCH_CATEGORY_SUCCESS", payload: response.data.category });
        } catch (error) {
            dispatch({ type: "FETCH_CATEGORY_ERROR", error: error.message });
        }
    };
}

export const getProductsFromCategory = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3333/categories/${id}`);
            dispatch({ type: "FETCH_PRODUCTS_IN_CATEGORY_SUCCESS", payload: response.data.data });
        } catch (error) {
            dispatch({ type: "FETCH_CATEGORY_ERROR", error: error.message });
        }
    };
}